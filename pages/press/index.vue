<template>
  <div>
    <!-- HERO SECTION -->
    <div class="section shop wf-section" :style="{
      backgroundColor: $store.state.global.SiteColor,
      backgroundImage: `url('${$store.state.global.SiteBannerBackground.url}')`,
    }">
      <div class="container-default w-container">
        <div class="shop-hero-wrapper" v-if="presses.length">
          <div class="split-content shop-hero-left">
            <h1 class="subtitle color-white">PRESS</h1>
            <h2 class="h1-size color-white">
              {{ presses[0].Title }}
            </h2>

            <div class="about-event-wrapper mg-bottom-8px gallery-date">
              <div>{{ presses[0].PressDate | moment }}</div>
              <div class="text-separator"></div>
              <div>{{ presses[0].PressDate | moment2 }}</div>
            </div>

            <div class="inner-container-600px">
              <p class="press-p">
                {{ presses[0].Subtitle }}
              </p>
            </div>

            <div class="_2-button-wrap mg-top-32px">
              <a href="/community" class="button-primary _2-buttons white w-button">
                Join our instagram community
              </a>
            </div>
          </div>

          <div class="split-content shop-hero-right press">
            <img :src="presses[0].Image.url" loading="eager" alt="" class="image shop-hero" />
          </div>
        </div>
      </div>
    </div>

    <!-- PRESS LIST -->
    <div id="donate" class="section list-press wf-section">
      <div class="container-default w-container">
        <div class="grid-3-columns">
          <a v-for="item in presses" :key="item.id" :href="`/press/${item.documentId}/${item.Title.toLowerCase()
            .replace(/[^a-z0-9\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+$/, '')}`" class="card blog-post-card w-inline-block">
            <div class="about-blog-post-wrapper press-list">
              {{ item.PressDate | moment }}
            </div>

            <img :src="item.Image.url" loading="lazy" width="324" class="mg-bottom-16px" alt="" />

            <h3 class="title blog-post-card-title">
              {{ item.Title }}
            </h3>

            <p class="press-list-p press-list block-with-text">
              {{ item.Body }}
            </p>

            <div class="flex mg-top-24px color-primary-1">
              <div>Read more</div>
              <div class="link-arrow"></div>
            </div>
          </a>
        </div>
      </div>
    </div>

    <!-- PAGINATION -->
    <div class="pagination" style="margin-top: 50px; gap: 10px;">
      <button class="button-primary" style="margin-bottom: 20px; background-color: #2d2d2f !important;"
        :disabled="!hasPrev" @click="page--">
        Previous
      </button>

      <button class="button-primary" :disabled="!hasNext" @click="page++">
        Next
      </button>
    </div>

    <FProgram />

    <!-- MEDIA KIT -->
    <div class="section bg-neutral-200 wf-section">
      <div class="container-default w-container">
        <div class="media-kit-wrapper">
          <div class="split-content media-kit-left">
            <h2>{{ $store.state.campaign.Text1 }}</h2>
            <p class="mg-bottom-24px">
              {{ $store.state.campaign.Text2 }}
            </p>
            <a :href="$store.state.campaign.DownloadLink" target="_blank" class="button-primary w-button">
              Download Campaign Kit
            </a>
          </div>

          <div class="split-content media-kit-right">
            <a :href="$store.state.campaign.DownloadLink" target="_blank" class="card media-kit-card w-inline-block"
              :style="{
                backgroundColor: $store.state.global.SiteColor,
                backgroundImage: `url('${$store.state.global.SiteBannerBackground.url}')`,
              }">
              <div class="media-kit-card-content">
                <h2 class="color-white">Campaign Media Kit</h2>
                <div class="accent-line media-kit-card"></div>
              </div>

              <div class="media-kit-card-content">
                <img :src="$store.state.global.SiteLogo.url" loading="eager" alt="" />
              </div>

              <div class="bg overlay-w-hover"></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FProgram from "~/components/foundation-programmes/f-program.vue";
import moment from "moment";

export default {
  name: "PressPage",
  components: { FProgram },

  data() {
    return {
      presses: [],
      page: 1,
      limit: 12,
      total: 0,
    };
  },

  async fetch() {
    const res = await this.$axios.$get(
      `${process.env.STRAPI_URL}/presses`,
      {
        params: {
          "pagination[page]": this.page,
          "pagination[pageSize]": this.limit,
          sort: "PressDate:desc",
          populate: "*",
        },
      }
    );

    this.presses = res.data;
    this.total = res.meta.pagination.total;
  },

  watch: {
    page() {
      this.$fetch();

      // scroll to top smoothly when page changes
      if (process.client) {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    },
  },


  computed: {
    hasNext() {
      return this.page * this.limit < this.total;
    },
    hasPrev() {
      return this.page > 1;
    },
  },

  filters: {
    moment(date) {
      return moment(date).format("MMMM Do YYYY");
    },
    moment2(date) {
      return moment(date).format("LT");
    },
  },
  head() {
    return {
      link:
        [
          {
            rel: "canonical",
            href: `https://tokunboabiru.org${this.$route.path}`,
          },
        ],
      htmlAttrs: {
        "data-wf-page": "628ae58faab2dfe2a9ca8eb3",
        "data-wf-site": "61d454e57ae5920f3051faad",
      },
      title: "Press - Senator Mukhail Adetokunbo Abiru",
      meta: [
        {
          hid: "Press - Senator Mukhail Adetokunbo Abiru",
          name: "Press - Senator Mukhail Adetokunbo Abiru",
          content: "Press - Senator Mukhail Adetokunbo Abiru",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* KEEP YOUR EXISTING STYLES */
.block-with-text {
  overflow: hidden;
  position: relative;
  line-height: 1.2em;
  max-height: 3.6em;
  text-align: justify;
  margin-right: -1em;
  padding-right: 1em;
}

.block-with-text:before {
  content: "...";
  position: absolute;
  right: 0;
  bottom: 0;
}

.block-with-text:after {
  content: "";
  position: absolute;
  right: 0;
  width: 1em;
  height: 1em;
  background: white;
}
</style>
