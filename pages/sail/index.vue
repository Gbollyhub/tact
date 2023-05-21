<template>
  <div>
    <div 
    class="section shop wf-section"
    :style="{
        backgroundColor: this.$store.state.global.SiteColor,
        backgroundImage: `url('${this.$store.state.global.SiteBannerBackground.url}')`,
      }"
    >
      <div class="container-default bursary w-container">
        <div class="bursary-hero-wrapper">
          <div class="split-content bursary-hero-left">
            <h1 class="subtitle color-white">{{post.Text1}}</h1>
            <img
              :src="post.HeroLogo.url"
              loading="lazy"
              alt=""
              class="image-white-bg"
            />
            <div class="inner-container-600px">
              <p class="press-p">
                {{post.Text2}}
              </p>
            </div>
            <div class="_2-button-wrap mg-top-32px">
              <a
                href="#sail-progs"
                class="button-primary _2-buttons white w-button"
                >Register</a
              >
            </div>
          </div>
          <div class="split-content bursary-hero-right">
            <div
              data-w-id="af5d7420-511a-da2e-feb4-58837080cb44"
              style="opacity: 1; padding-top: 56.17021276595745%"
              class="w-embed-youtubevideo youtube-2"
            >
              <iframe
                :src="post.HeroVideoUrl"
                frameborder="0"
                style="position: absolute;left: 0;top: 0;width: 100%;height: 100%;pointer-events: auto;"
                allow="autoplay; encrypted-media"
                allowfullscreen=""
                title="SAIL Innovation Lab"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="sail-narration" class="section detailsed wf-section">
      <div class="container-default w-container">
        <div class="narrow-section detailed">
          <div>
            <div class="blog-post-body-wrapper">
              <div class="split-content blog-post-body-left">
                <h2 class="heading-4 content">
                  {{post.SectionTitle}}
                </h2>
                <img
                  :src="post.SectionImage"
                  loading="lazy"
                  sizes="(max-width: 479px) 93vw, (max-width: 991px) 94vw, (max-width: 1439px) 66vw, 800px"
                  alt=""
                  class="image-up-and-down-gap"
                />
                <div class="w-richtext" v-html="marked(post.SectionBody)"></div>
              </div>
             <AuthorCard/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="sail-progs" class="section mask wf-section">
      <div class="container-default w-container">
        <div>
          <div
            data-w-id="06468726-3766-286a-13de-61045eaca70a"
            style="opacity: 1"
            class="inner-container-600px align-center mg-bottom-40px"
          >
            <div class="subtitle">{{post.PostSectionHeading1}}</div>
            <h2 class="heading-7">{{post.PostSectionHeading2}}</h2>
            <p>{{post.PostSectionDescription}}</p>
          </div>
          <div
            data-delay="4000"
            data-animation="slide"
            class="slider mg-bottom-in-mobile w-slider"
            data-autoplay="false"
            data-easing="ease"
            style="opacity: 1"
            data-hide-arrows="true"
            data-disable-swipe="false"
            data-w-id="06468726-3766-286a-13de-61045eaca711"
            data-autoplay-limit="0"
            data-nav-spacing="3"
            data-duration="500"
            data-infinite="true"
          >
            <div class="false-mask inner-container-400px w-slider-mask">
              <div 
              v-for="(item, index) in post2"
              :key="index"
              class="slide mg-right-24px w-slide">
                <div class="card card-v1">
                  <h3 class="heading-sail-prog">{{item.Title}}</h3>
                  <img
                    :src="item.Image.url"
                    loading="lazy"
                    sizes="(max-width: 479px) 73vw, (max-width: 767px) 334px, 318px"
                    alt=""
                    class="image-sail"
                  />
                  <p class="mg-bottom-32px">
                    {{item.Description}}
                  </p>
                  <div class="accent-line thick"></div>
                  <a
                  style="text-decoration:none;"
                  :href="item.Url"
                    data-w-id="27980871-8eb9-c8bd-50bf-8aa91bf3d981"
                    class="flex mg-top-24px color-primary-1"
                  >
                    <div>Register now</div>
                    <div class="link-arrow"></div>
                  </a>
                </div>
              </div>
            </div>
            <div
              data-w-id="06468726-3766-286a-13de-61045eaca73d"
              class="slider-arrow-v1 left w-slider-arrow-left"
            >
              <div class="text-block"></div>
            </div>
            <div
              data-w-id="06468726-3766-286a-13de-61045eaca740"
              class="slider-arrow-v1 right w-slider-arrow-right"
            >
              <div></div>
            </div>
            <div class="slide-nav w-slider-nav w-round"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeroSection from "~/components/banner/hero-section.vue";
import FProgram from "~/components/foundation-programmes/f-program.vue";
import AuthorCard from "~/components/author-card/author-card.vue";
import axios from 'axios'
import marked from 'marked';
export default {
  name: "IndexPage",
  components: { HeroSection, FProgram, AuthorCard },
    async asyncData({ params }) {
    const  data  = await axios.get(`${process.env.STRAPI_URL}/sail`)
    const  data2  = await axios.get(`${process.env.STRAPI_URL}/sail-programmes`)
    return {
      post: data.data,
      post2: data2.data
      }
   },
         methods:{
        marked: function(input) {
      return marked(input);
    }
   },
  head() {
    return {
      htmlAttrs: {
        "data-wf-page": "62a86423354c09491747515c",
        "data-wf-site": "61d454e57ae5920f3051faad",
      },
      title: "SAIL - Senator Mukhail Adetokunbo Abiru",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "SAIL - Senator Mukhail Adetokunbo Abiru",
        },
      ],
    };
  },
};
</script>
