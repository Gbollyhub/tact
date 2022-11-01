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
            <h1 class="subtitle color-white">FACILITATIONS</h1>
            <h2 class="h1-size color-white">
              {{ this.$store.state.facilitations[0].Title }}
            </h2>
            <div class="about-event-wrapper mg-bottom-8px gallery-date">
              <div>
                {{ this.$store.state.facilitations[0].PostDate | moment }}
              </div>
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
            <div
              data-delay="4000"
              data-animation="slide"
              class="slider-top w-slider"
              data-autoplay="true"
              data-easing="ease-in-out-quart"
              data-hide-arrows="false"
              data-disable-swipe="false"
              data-autoplay-limit="0"
              data-nav-spacing="3"
              data-duration="500"
              data-infinite="true"
            >
              <div class="slider-mask w-slider-mask">
                <div
                  class="w-slide"
                  v-for="(item, index) in imageList"
                  :key="index"
                >
                  <img
                    :src="item.Image.url"
                    loading="eager"
                    sizes="(max-width: 479px) 93vw, (max-width: 767px) 94vw, (max-width: 991px) 95vw, (max-width: 1439px) 43vw, 549px"
                    alt=""
                    class="image shop-hero"
                  />
                </div>
              </div>
              <div class="left-arrow w-slider-arrow-left">
                <div class="w-icon-slider-left"></div>
              </div>
              <div class="right-arrow w-slider-arrow-right">
                <div class="w-icon-slider-right"></div>
              </div>
              <div class="slide-nav-2 w-slider-nav w-round"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="narrow-section wf-section">
      <div class="container-default w-container">
        <div>
          <div
            data-w-id="cfafdf21-9180-59a7-8b91-d47c8ecfba8c"
            class="content-top title-button facilitations"
          >
            <div
              id="w-node-d04532ce-1655-8eec-3f8d-db35aee9b699-868a23ca"
              class="page-submenu faciliatations"
            >
              <div
                @click="filterList('All')"
                id="w-node-_5154bbd9-3b45-eded-3861-109b3f4b9529-868a23ca"
                :class="[
                  currentTab === 'All'
                    ? 'button-secondary w--current'
                    : 'button-secondary',
                ]"
              >
                All
              </div>
              <div
                @click="filterList('Education')"
                id="w-node-_04216d52-cab4-c849-6fbb-8c9e4c25ccd9-868a23ca"
                :class="[
                  currentTab === 'Education'
                    ? 'button-secondary w--current'
                    : 'button-secondary',
                ]"
              >
                Education
              </div>
              <div
                @click="filterList('ElectrificationWater')"
                id="w-node-_29f7dfe3-a009-e7b6-dc0f-6ea5e9605895-868a23ca"
                :class="[
                  currentTab === 'ElectrificationWater'
                    ? 'button-secondary w--current'
                    : 'button-secondary',
                ]"
              >
                Electrification & Water
              </div>
              <div
                @click="filterList('Health')"
                id="w-node-_22b1f723-bf2e-29d5-8d9a-29c408127d90-868a23ca"
                :class="[
                  currentTab === 'Health'
                    ? 'button-secondary w--current'
                    : 'button-secondary',
                ]"
              >
                Health
              </div>
              <div
                @click="filterList('YouthSportsTechnology')"
                id="w-node-b5c98fda-1551-b5fe-aa3f-6c4608005380-868a23ca"
                :class="[
                  currentTab === 'YouthSportsTechnology'
                    ? 'button-secondary w--current'
                    : 'button-secondary',
                ]"
              >
                Youths, Sports &amp;Technology
              </div>
              <div
                @click="filterList('Market')"
                id="w-node-b1652143-b9d4-3aec-0a0a-d855b163777b-868a23ca"
                :class="[
                  currentTab === 'Market'
                    ? 'button-secondary w--current'
                    : 'button-secondary',
                ]"
              >
                Market
              </div>
              <div
                @click="filterList('RoadConstructions')"
                id="w-node-f60307f4-f682-e985-d98c-288859402fe4-868a23ca"
                :class="[
                  currentTab === 'RoadConstructions'
                    ? 'button-secondary w--current'
                    : 'button-secondary',
                ]"
              >
                Road Constructions
              </div>
            </div>
          </div>
          <div class="grid-3-columns">
            <a
              v-for="(item, index) in postList"
              :key="index"
              data-w-id="719f6280-9821-0d84-94ae-de85ba9cfece"
              style="opacity: 1"
              :href="`/facilitations/${item.id}`"
              class="card blog-post-card w-inline-block"
            >
              <div class="about-blog-post-wrapper facilitation-category">
                {{
                  item.Tag == "YouthSportsTechnology"
                    ? "Youth, Sports & Technology"
                    : item.Tag == "RoadConstructions"
                    ? "Road Contructions"
                    : item.Tag == "ElectrificationWater"
                    ? "Electrification & Water" : item.Tag
                }}
              </div>
              <img
                :src="item.Image.url"
                loading="lazy"
                width="324"
                height=""
                sizes="(max-width: 479px) 68vw, (max-width: 767px) 324px, (max-width: 991px) 38vw, (max-width: 1439px) 25vw, 324px"
                alt=""
                class="mg-bottom-16px"
              />
              <h3 class="title blog-post-card-title">
                {{ item.Title }}
              </h3>
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
    <div
      id="w-node-a12e3150-68e5-f35a-9498-5e4ea0abbbff-868a23ca"
      class="pagination"
    >
      <a href="#" class="button-primary">Next</a>
    </div>
    <FProgram />
    <div class="section bg-neutral-200 pagination wf-section">
      <div class="container-default w-container">
        <div class="media-kit-wrapper">
          <div
            data-w-id="c3aead54-d9a5-7950-b5be-5fc59a3b0c5d"
            class="split-content media-kit-left"
          >
            <h2>Media &amp; Press Kit</h2>
            <p class="mg-bottom-24px">
              Make the #DoingGood 2023 Campaign yours!
            </p>
            <a href="#" target="_blank" class="button-primary w-button"
              >Download Campaign 2023 Kit</a
            >
          </div>
          <div
            data-w-id="c3aead54-d9a5-7950-b5be-5fc59a3b0c64"
            class="split-content media-kit-right"
          >
            <a
              :style="{
                backgroundColor: this.$store.state.global.SiteColor,
                backgroundImage: `url('${this.$store.state.global.SiteBannerBackground.url}')`,
              }"
              href="/contact-us"
              target="_blank"
              class="card media-kit-card w-inline-block"
            >
              <div class="media-kit-card-content">
                <h2 class="color-white">Campaign Media Kit</h2>
                <div class="accent-line media-kit-card"></div>
              </div>
              <div class="media-kit-card-content">
                <img
                  src="~/assets/images/Asset-6600x.png"
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
import marked from "marked";
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
  methods: {
    marked: function (input) {
      return marked(input);
    },
  },
  data() {
    return {
      tabClass: "button-secondary",
      activeClass: "w--current",
      currentTab: "All",
      postList: this.$store.state.facilitations,
      imageList: this.$store.state.facilitations,
    };
  },

  methods: {
    filterList(value) {
      let newList = this.$store.state.facilitations;
      if (value === "All") {
        this.postList = this.$store.state.facilitations;
        this.currentTab = value;
      } else {
        this.postList = newList.filter((x) => {
          return x.Tag === value;
        });
        this.currentTab = value;
      }
    },
  },
  head() {
    return {
      htmlAttrs: {
        "data-wf-page": "628b0b3de461d30a868a23ca",
        "data-wf-site": "61d454e57ae5920f3051faad",
      },
      title: "Facilitations - Senator Mukhail Adetokunbo Abiru",
      meta: [
        {
          hid: "Facilitations - Senator Mukhail Adetokunbo Abiru",
          name: "Facilitations - Senator Mukhail Adetokunbo Abiru",
          content: "Facilitations - Senator Mukhail Adetokunbo Abiru",
        },
      ],
    };
  },
};
</script>
