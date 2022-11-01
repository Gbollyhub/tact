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
            <!-- <h1 class="subtitle color-white">FACILITATIONS</h1> -->
            <h2 class="h1-size color-white">
              {{post.Text1}}
            </h2>
            <div class="about-event-wrapper mg-bottom-8px gallery-date">
              <div>
                {{post.Text2}}
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
                  v-for="(item, index) in post.HeroImages"
                  :key="index"
                >
                  <img
                    :src="item.url"
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
    <div id="landing-detail-section" class="section detailsed wf-section">
      <div class="container-default w-container">
        <div class="narrow-section detailed">
          <div>
            <div class="blog-post-body-wrapper">
              <div class="split-content blog-post-body-left">
                <div
                  data-w-id="16c374cf-a22c-7f17-ec83-1c2ed12e7ff9"
                  style="opacity: 1"
                  class="card futured-event-card mg-bottom-24px landingtemplate"
                >
                  <div class="split-content futured-event-card-left-content">
                    <div class="about-event-wrapper mg-bottom-24px">
                      <div>{{post.InfoCardDate | moment}}</div>
                    </div>
                    <div>
                      <h3>
                        {{post.InfoCardTitle}}
                      </h3>
                      <p>
                        {{post.InfoCardDescription}}<br />
                      </p>
                    </div>
                  </div>
                  <div class="split-content futured-event-card-right-content">
                    <img
                      :src="post.InfoCardImage.url"
                      loading="eager"
                      sizes="(max-width: 479px) 100vw, (max-width: 767px) 93vw, (max-width: 991px) 42vw, (max-width: 1439px) 34vw, 414.96875px"
                      alt=""
                      class="image full-image"
                    />
                  </div>
                </div>
                <iframe 
    name="my_iframe" 
    srcdoc="
                    <div id='Form-Code-bursary-embed' class='w-embed w-script'>
                  <!DOCTYPE html>
                  <html lang='en'>
                    <head>
                      <meta charset='utf-8' />
                      <meta
                        name='viewport'
                        content='width=device-width, initial-scale=1'
                      />
                      <title>MSME Revolving Loan - Application Form 1</title>
                      <style>
            * {
                margin: 0;
                padding: 0;
            }
            html,
            body,
            #wrapper {
                width: 100%;
                height: 800px;
            }
            iframe {
                border-radius: 0 !important;
            }
        </style>
                    </head>
                    <body>
                      <div id='wrapper' data-tf-widget='kfxHJ6mx' data-tf-inline-on-mobile='' data-tf-medium='snippet'></div>
                       <script src='https://embed.typeform.com/next/embed.js'></script>
                    </body>
                  </html>
                </div>
    "
    src="https://www.birthdaycalculatorbydate.com/"
    width="100%"
    height="800px"
    frameBorder="0"
    scrolling="no"
></iframe>

              </div>
  <div class="split-content blog-post-body-right">
    <div class="card author-card pagetemplate">
      <img
        :src="this.$store.state.global.AuthorCardImage.url"
        loading="lazy"
        alt=""
        class="mg-bottom-16px"
      />
      <h4 class="title-link detailed-press pagetemplate">
        {{this.$store.state.global.AuthorCardTitle}}
      </h4>
      <h5>Follow me on</h5>
      <div class="social-links-wrapper footer-social-links pagetemplate">
        <a
          :href="this.$store.state.footer.FacebookLink"
          target="_blank"
          class="social-link"
          ></a
        >
        <a :href="this.$store.state.footer.TwitterLink" class="social-link"></a>
        <a
          :href="this.$store.state.footer.InstagramLink"
          target="_blank"
          class="social-link"
          ></a
        >
        <a
          :href="this.$store.state.footer.YoutubeLink"
          target="_blank"
          class="social-link"
          ></a
        >
      </div>
      <div v-show="post.PartnersList.length > 0" v-for="(item, index) in post.PartnersList" :key="index" class="card logo-card landing">
        <img :src="item.img" loading="eager" alt="" class="image-2">
        </div>
    </div>
  </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <FProgram />

  </div>
</template>

<script>
import HeroSection from "~/components/banner/hero-section.vue";
import FProgram from "~/components/foundation-programmes/f-program.vue";
import marked from "marked";
import moment from "moment";
import axios from 'axios'
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
   async asyncData({ params }) {
    const  data  = await axios.get(`${process.env.STRAPI_URL}/event-template-1`)
    return {
      post: data.data
      }
   },

  head() {
    return {
      htmlAttrs: {
        "data-wf-page": "63074e1023e5b553b9e92e80",
        "data-wf-site": "61d454e57ae5920f3051faad",
      },
      title: "Event - Senator Mukhail Adetokunbo Abiru",
      meta: [
        {
          hid: "Event - Senator Mukhail Adetokunbo Abiru",
          name: "Event - Senator Mukhail Adetokunbo Abiru",
          content: "Event - Senator Mukhail Adetokunbo Abiru",
        },
      ],
    };
  },
};
</script>
