<template>
  <div>
    <AboutBanner :about="about" />
    <div class="narrow-section large wf-section">
      <div class="container-default w-container">
        <div>
          <div
            data-w-id="cfafdf21-9180-59a7-8b91-d47c8ecfba8c"
            style="opacity: 1"
            class="logo-bar-main-wrapper"
          >
            <h3 class="mg-bottom-24px">Partners for social Good!</h3>
            <div class="logo-bar">
              <a
                :href="item.PartnerUrl"
                class="card logo-card w-inline-block"
                v-for="(item, index) in post"
                :key="index"
                ><img
                  :src="item.PartnerLogo.url"
                  loading="eager"
                  sizes="(max-width: 479px) 60vw, 130px"
                  alt=""
                  class="image-2"
              /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-default w-container">
      <div
        data-w-id="205de070-7545-1d47-f544-82757aa50d37"
        style="opacity: 1"
        class="divider"
      ></div>
    </div>
    <div id="meet-profile" class="narrow-section wf-section">
      <div class="container-default w-container">
        <div>
          <div class="split">
            <div
              data-w-id="c67bc92a-be59-119a-74e7-788fbed746cb"
              style="opacity: 1"
              class="split-content about-left"
            >
              <img
                :src="about.SectionImage.url"
                loading="eager"
                sizes="(max-width: 479px) 93vw, (max-width: 767px) 94vw, (max-width: 1439px) 46vw, 585.59375px"
                alt=""
                class="image full-image border-radius-16px"
              />
            </div>
            <div
              data-w-id="c885bdc2-d7ac-8a77-b853-c980282b007c"
              style="opacity: 1"
              class="split-content about-right"
            >
              <div class="subtitle">About MUKHAIL ADETOKUNBO ABIRU</div>
              <h2>Focused on Doing Good for Lagos East</h2>
              <ul role="list" class="list-column w-list-unstyled">
                <li class="checkmark-list-item">
                  <div class="checkmark mg-right-16px"></div>
                  <div class="text-200 medium">
                    32 years of public &amp; corporate experience
                  </div>
                </li>
                <li class="checkmark-list-item">
                  <div class="checkmark mg-right-16px"></div>
                  <div class="text-200 medium">
                    Serving as the Honourable Commissioner of Finance, Lagos
                    State (2011 -2013)
                  </div>
                </li>
                <li class="checkmark-list-item mg-bottom-0px">
                  <div class="checkmark mg-right-16px"></div>
                  <div class="text-200 medium">
                    Pioneer and former Managing Director/Chief Executive Officer
                    of Polaris Bank Limited
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="w-richtext" v-html="marked(about.AboutWriteUp)"></div>
        </div>
      </div>
    </div>
    <div class="section bg-neutral-200 wf-section">
      <div class="container-default w-container">
        <div>
          <div class="content-top title-paragraph">
            <div class="inner-container-500px">
              <div class="subtitle">Our Values</div>
              <h2 class="mg-bottom-0px">
                The values that drive everything we do
              </h2>
            </div>
            <div
              id="w-node-_63eb588a-5323-8029-8c6e-efb0a2ae89f7-d751fab4"
              class="inner-container-450px"
            >
              <p class="mg-bottom-0px">
                Our #DoingGood to Greater Number mantra is the driving force
                behind our values.
              </p>
            </div>
          </div>
          <div class="grid-2-columns _24-gap">
            <div
              data-w-id="33b2c3e1-5e9a-4d6a-2d9c-bd5bd7e4ca0e"
              style="
                -webkit-transform: translate3d(0, 0, 0) scale3d(0.97, 0.97, 1)
                  rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                -moz-transform: translate3d(0, 0, 0) scale3d(0.97, 0.97, 1)
                  rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                -ms-transform: translate3d(0, 0, 0) scale3d(0.97, 0.97, 1)
                  rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                transform: translate3d(0, 0, 0) scale3d(0.97, 0.97, 1)
                  rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                opacity: 0;
              "
              class="card value-card"
            >
              <img
                src="~/assets/images/icon-transparency-politician-template.svg"
                alt=""
                class="icon round-icon"
              />
              <div class="value-card-content">
                <h3 class="heading">Transparency</h3>
                <p class="mg-bottom-0px">
                  We operate an open door which encourages free flow of
                  information and create new opportunities for our constituents.
                </p>
              </div>
            </div>
            <div
              data-w-id="50d8eaa5-9122-0afc-1c5f-4c300fbbfcec"
              style="
                -webkit-transform: translate3d(0, 0, 0) scale3d(0.97, 0.97, 1)
                  rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                -moz-transform: translate3d(0, 0, 0) scale3d(0.97, 0.97, 1)
                  rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                -ms-transform: translate3d(0, 0, 0) scale3d(0.97, 0.97, 1)
                  rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                transform: translate3d(0, 0, 0) scale3d(0.97, 0.97, 1)
                  rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                opacity: 0;
              "
              class="card value-card"
            >
              <img
                src="~/assets/images/icon-hard-work-politician-template.svg"
                alt=""
                class="icon round-icon"
              />
              <div class="value-card-content">
                <h3 class="heading-6">Hard work</h3>
                <p class="mg-bottom-0px">
                  We work round the clock to ensure we bring people-oriented
                  legislation, empowerment programmes &amp; facilitations
                  that&#x27;ll raise the standard of living of our people.
                </p>
              </div>
            </div>
            <div
              data-w-id="416c1656-7ece-f064-62e5-0e6b5634d72a"
              style="
                -webkit-transform: translate3d(0, 0, 0) scale3d(0.97, 0.97, 1)
                  rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                -moz-transform: translate3d(0, 0, 0) scale3d(0.97, 0.97, 1)
                  rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                -ms-transform: translate3d(0, 0, 0) scale3d(0.97, 0.97, 1)
                  rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                transform: translate3d(0, 0, 0) scale3d(0.97, 0.97, 1)
                  rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                opacity: 0;
              "
              class="card value-card"
            >
              <img
                src="~/assets/images/icon-passion-politician-template.svg"
                alt=""
                class="icon round-icon"
              />
              <div class="value-card-content">
                <h3 class="heading-2">Empathy</h3>
                <p class="mg-bottom-0px">
                  We understand your concerns and fears about our communities
                  and nation. You are not alone.
                </p>
              </div>
            </div>
            <div
              data-w-id="d48fa7ce-d10c-d94f-ee12-dcec2d2608c6"
              style="
                -webkit-transform: translate3d(0, 0, 0) scale3d(0.97, 0.97, 1)
                  rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                -moz-transform: translate3d(0, 0, 0) scale3d(0.97, 0.97, 1)
                  rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                -ms-transform: translate3d(0, 0, 0) scale3d(0.97, 0.97, 1)
                  rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                transform: translate3d(0, 0, 0) scale3d(0.97, 0.97, 1)
                  rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                opacity: 0;
              "
              class="card value-card"
            >
              <img
                src="~/assets/images/icon-equality-politician-template.svg"
                alt=""
                class="icon round-icon"
              />
              <div class="value-card-content">
                <h3 class="heading-5">Equality</h3>
                <p class="mg-bottom-0px">
                  Access to our programmes are devoid of tribalism, religious
                  sentiment, colour and party affiliations.
                </p>
              </div>
            </div>
            <div
              data-w-id="73fef10e-e65c-3212-955b-40087dff7cf0"
              style="
                -webkit-transform: translate3d(0, 0, 0) scale3d(0.97, 0.97, 1)
                  rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                -moz-transform: translate3d(0, 0, 0) scale3d(0.97, 0.97, 1)
                  rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                -ms-transform: translate3d(0, 0, 0) scale3d(0.97, 0.97, 1)
                  rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                transform: translate3d(0, 0, 0) scale3d(0.97, 0.97, 1)
                  rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                opacity: 0;
              "
              class="card value-card"
            >
              <img
                src="~/assets/images/icon-freedom-politician-template.svg"
                alt=""
                class="icon round-icon"
              />
              <div class="value-card-content">
                <h3 class="heading-3">Freedom</h3>
                <p class="mg-bottom-0px">
                  Wherever you live, we believe every Nigerian has the
                  constitutional freedom to accomplish his or her dream without
                  any encumbrances.
                </p>
              </div>
            </div>
            <div
              data-w-id="85166239-803a-c35d-ca43-c98675710d7c"
              style="
                -webkit-transform: translate3d(0, 0, 0) scale3d(0.97, 0.97, 1)
                  rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                -moz-transform: translate3d(0, 0, 0) scale3d(0.97, 0.97, 1)
                  rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                -ms-transform: translate3d(0, 0, 0) scale3d(0.97, 0.97, 1)
                  rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                transform: translate3d(0, 0, 0) scale3d(0.97, 0.97, 1)
                  rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                opacity: 0;
              "
              class="card value-card"
            >
              <img
                src="~/assets/images/icon-innovation-politician-template.svg"
                alt=""
                class="icon round-icon"
              />
              <div class="value-card-content">
                <h3 class="heading-5">Innovation</h3>
                <p class="mg-bottom-0px">
                  This runs in our DNA. We&#x27;ll continue to look for unique
                  ways and partners that would make #DoingGood a Nigerian
                  reality!
                </p>
              </div>
            </div>
          </div>
          <div class="_2-button-wrap align-center mg-top-64px">
            <a
              href="/community"
              class="button-primary _2-buttons center w-button"
              >Join our community</a
            >
          </div>
        </div>
      </div>
    </div>
    <div class="section mask wf-section">
      <div class="container-default w-container">
        <div>
          <div
            data-w-id="d3367d97-04bc-810f-e66b-fa8ae85add1e"
            class="inner-container-600px align-center mg-bottom-40px"
          >
            <div class="subtitle">Achievements</div>
            <h2 class="heading-7">Our achievements so far?</h2>
            <p>
              Our commitment to the good constituents of Lagos East senatorial
              district is unwavering
            </p>
          </div>
          <div
            data-delay="4000"
            data-animation="slide"
            class="slider mg-bottom-in-mobile w-slider"
            data-autoplay="false"
            data-easing="ease"
            data-hide-arrows="true"
            data-disable-swipe="false"
            data-w-id="d3367d97-04bc-810f-e66b-fa8ae85add25"
            data-autoplay-limit="0"
            data-nav-spacing="3"
            data-duration="500"
            data-infinite="true"
          >
            <div class="false-mask inner-container-400px w-slider-mask">
              <div
                v-for="(item, index) in achievements"
                :key="index"
                class="slide mg-right-24px w-slide"
              >
                <div class="card card-v1">
                  <h3 class="heading-achievements">{{ item.Figure }}</h3>
                  <p class="mg-bottom-32px">
                    {{ item.Description }}
                  </p>
                  <div class="accent-line thick"></div>
                </div>
              </div>
            </div>
            <div
              data-w-id="d3367d97-04bc-810f-e66b-fa8ae85add51"
              class="slider-arrow-v1 left w-slider-arrow-left"
            >
              <div class="text-block"></div>
            </div>
            <div
              data-w-id="d3367d97-04bc-810f-e66b-fa8ae85add54"
              class="slider-arrow-v1 right w-slider-arrow-right"
            >
              <div></div>
            </div>
            <div class="slide-nav w-slider-nav w-round"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="section bg-neutral-200 wf-section">
      <div class="container-default w-container">
        <div class="timeline-main-wrapper">
          <div
            data-w-id="ac69a846-6b8c-4891-b041-3ed4823e8599"
            style="opacity: 0"
            class="split-content timeline-left"
          >
            <div class="subtitle">Our timeline</div>
            <h2 class="heading-8">Browse Tokunbo Abiru’s timeline</h2>
            <p>
              Keep abreast of Senator Tokunbo Abiru&#x27;s activities. Join our
              press room
            </p>
            <div class="_2-button-wrap mg-top-32px">
              <a href="/press" class="button-primary _2-buttons w-button"
                >See more info</a
              >
              <a href="/community" class="button-secondary w-button"
                >Join our community</a
              >
            </div>
          </div>
          <div class="split-content timeline-right">
            <div
              v-for="(item, index) in presses.slice(0, 4)"
              :key="index"
              data-w-id="2f0061a8-821b-e8b5-eb32-d0daa60a5a15"
              style="opacity: 0"
              class="card card-v1"
            >
              <h3 class="h2-size color-primary-1">
                {{ item.PressDate | moment }}
              </h3>
              <h4 class="h3-size">{{ item.Title }}</h4>
              <p class="mg-bottom-32px block-with-text">{{ item.Body }}</p>
              <div class="accent-line large"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeroSection from "~/components/banner/hero-section.vue";
import AboutBanner from "~/components/banner/about-banner.vue";
import moment from "moment";
import axios from "axios";
import marked from "marked";
export default {
  name: "IndexPage",
  components: { HeroSection, AboutBanner },
  filters: {
    moment: function (date) {
      return moment(date).format("MMMM Do YYYY");
    },
  },
  async asyncData({ params }) {
    const partners = await axios.get(`${process.env.STRAPI_URL}/partners?populate=*`);
    const about = await axios.get(`${process.env.STRAPI_URL}/about-page?populate=*`);
    const achievements = await axios.get(
      `${process.env.STRAPI_URL}/achievements?populate=*`
    );
    const presses = await axios.get(
      `${process.env.STRAPI_URL}/presses`,
      {
        params: {
          sort: "PressDate:desc",
          populate: "*",
        },
      }
    );

    return {
      post: partners.data.data,
      about: about.data.data,
      achievements: achievements.data.data,
      presses: presses.data.data,
    };
  },
  methods: {
    marked: function (input) {
      return marked(input);
    },
  },
  head() {
    return {
      link: [
        {
          rel: "canonical",
          href: `https://tokunboabiru.org${this.$route.path}`,
        },
      ],
      htmlAttrs: {
        "data-wf-page": "61d454e57ae5925bd751fab4",
        "data-wf-site": "61d454e57ae5920f3051faad",
      },
      title: "Meet- Senator Mukhail Adetokunbo Abiru, FCA",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Distinguished Senator Mukhail Adetokunbo Abiru, FCA",
        },
        {
          content: "Meet- Senator Mukhail Adetokunbo Abiru, FCA",
          property: "og:title",
        },
        {
          content:
            "Senator Mukhail Adetokunbo Abiru, FCA, and or “Tokunbo Abiru” is an accomplished Nigerian Banker, Chartered Accountant, and now a Public Servant. He is currently The Senator, representing Lagos East Senatorial district in the 9th Nigerian National Assembly, after about 32 years’ Corporate experience (of which 29 years was spent in the banking industry).",
          name: "description",
          property: "og:description",
        },
        {
          content: "Meet- Senator Mukhail Adetokunbo Abiru, FCA",
          property: "twitter:description",
        },
        {
          content:
            "Senator Mukhail Adetokunbo Abiru, FCA, and or “Tokunbo Abiru” is an accomplished Nigerian Banker, Chartered Accountant, and now a Public Servant. He is currently The Senator, representing Lagos East Senatorial district in the 9th Nigerian National Assembly, after about 32 years’ Corporate experience (of which 29 years was spent in the banking industry).",
          name: "description",
          property: "twitter:description",
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
