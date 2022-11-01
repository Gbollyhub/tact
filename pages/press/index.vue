<template>
  <div>
    <div
      class="section shop wf-section"
      :style="{
        backgroundColor: this.$store.state.global.SiteColor,
        backgroundImage: `url('${this.$store.state.global.SiteBannerBackground.url}')`,
      }"
    >
      <div class="container-default w-container">
        <div class="shop-hero-wrapper">
          <div class="split-content shop-hero-left">
            <h1 class="subtitle color-white">PRESS</h1>
            <h2 class="h1-size color-white">
              {{ this.$store.state.press[0].Title }}
            </h2>
            <div class="about-event-wrapper mg-bottom-8px gallery-date">
              <div>{{ this.$store.state.press[0].PressDate | moment }}</div>
              <div class="text-separator"></div>
              <div>{{ this.$store.state.press[0].PressDate | moment2 }}</div>
            </div>
            <div class="inner-container-600px">
              <p class="press-p">
                {{ this.$store.state.press[0].Subtitle }}
              </p>
            </div>
            <div class="_2-button-wrap mg-top-32px">
              <a
                href="/community"
                class="button-primary _2-buttons white w-button"
                >Join our instagram community</a
              >
            </div>
          </div>
          <div
            data-w-id="071cde0c-e76a-2555-6e58-736bfba13956"
            class="split-content shop-hero-right press"
          >
            <img
              :src="this.$store.state.press[0].Image.url"
              loading="eager"
              style="opacity: 1"
              data-w-id="e4fb1b1b-0d55-a509-d334-60bd1f9faf72"
              alt=""
              class="image shop-hero"
            />
          </div>
        </div>
      </div>
    </div>
    <div id="donate" class="section list-press wf-section">
      <div class="container-default w-container">
        <div>
          <div class="grid-3-columns">
            <a
              v-for="(item, index) in this.$store.state.press"
              :key="index"
              data-w-id="719f6280-9821-0d84-94ae-de85ba9cfece"
              style="opacity: 1"
              :href="`/press/${item.id}`"
              class="card blog-post-card w-inline-block"
            >
              <div class="about-blog-post-wrapper press-list">
                {{ item.PressDate | moment }}
              </div>
              <img
                :src="item.Image.url"
                loading="lazy"
                width="324"
                height=""
                sizes="(max-width: 479px) 68vw, (max-width: 767px) 324px, (max-width: 991px) 38vw, (max-width: 1439px) 24vw, 324px"
                alt=""
                class="mg-bottom-16px"
              />
              <h3 class="title blog-post-card-title">
                {{ item.Title }} 
              </h3>
              <p class="press-list-p press-list block-with-text">
                {{ item.Body }}
              </p>
              <div
                data-w-id="719f6280-9821-0d84-94ae-de85ba9cfed5"
                class="flex mg-top-24px color-primary-1"
              >
                <div>Read more</div>
                <div class="link-arrow"></div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="pagination">
      <a href="#" class="button-primary">Next</a>
    </div>
    <FProgram />
    <div class="section bg-neutral-200 wf-section">
      <div class="container-default w-container">
        <div class="media-kit-wrapper">
          <div
            data-w-id="c8e23797-df76-9728-30ff-c7a8890d356f"
            style="opacity: 1"
            class="split-content media-kit-left"
          >
            <h2>{{ this.$store.state.campaign.Text1 }}</h2>
            <p class="mg-bottom-24px">
              {{ this.$store.state.campaign.Text2 }}
            </p>
            <a
              :href="this.$store.state.campaign.DownloadLink"
              target="_blank"
              class="button-primary w-button"
              >Download Campaign Kit</a
            >
          </div>
          <div
            data-w-id="c8e23797-df76-9728-30ff-c7a8890d3576"
            class="split-content media-kit-right"
          >
            <a
              :href="this.$store.state.campaign.DownloadLink"
              target="_blank"
              class="card media-kit-card w-inline-block"
              :style="{
                    backgroundColor: this.$store.state.global.SiteColor,
                    backgroundImage: `url('${this.$store.state.global.SiteBannerBackground.url}')`,
                  }"
            >
              <div class="media-kit-card-content">
                <h2 class="color-white">Campaign Media Kit</h2>
                <div
                  class="accent-line media-kit-card"
                ></div>
              </div>
              <div class="media-kit-card-content">
                <img
                  :src="this.$store.state.global.SiteLogo.url"
                  loading="eager"
                  alt=""
                />
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
import HeroSection from "~/components/banner/hero-section.vue";
import FProgram from "~/components/foundation-programmes/f-program.vue";
import moment from "moment";
export default {
  name: "IndexPage",
  components: { HeroSection, FProgram },
  filters: {
    moment: function (date) {
      return moment(date).format("MMMM Do YYYY");
    },
    moment2: function (date) {
      return moment(date).format("LT");
    },
  },
  head() {
    return {
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
/* styles for '...' */
.block-with-text {
  /* hide text if it more than N lines  */
  overflow: hidden;
  /* for set '...' in absolute position */
  position: relative;
  /* use this value to count block height */
  line-height: 1.2em;
  /* max-height = line-height (1.2) * lines max number (3) */
  max-height: 3.6em;
  /* fix problem when last visible word doesn't adjoin right side  */
  text-align: justify;

  /* */
  margin-right: -1em;
  padding-right: 1em;
}
.block-with-text:before {
  /* points in the end */
  content: "...";
  /* absolute position */
  position: absolute;
  /* set position to right bottom corner of block */
  right: 0;
  bottom: 0;
}
.block-with-text:after {
  /* points in the end */
  content: "";
  /* absolute position */
  position: absolute;
  /* set position to right bottom corner of text */
  right: 0;
  width: 1em;
  /* set width and height */
  height: 1em;
  margin-top: 0.2em;
  background: white;
}
</style>
