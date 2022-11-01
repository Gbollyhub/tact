<template>
  <div>
    <div 
     :style="{
        backgroundColor: this.$store.state.global.SiteColor,
        backgroundImage: `url('${this.$store.state.global.SiteBannerBackground.url}')`,
      }"
    class="section shop wf-section">
      <div class="container-default bursary w-container">
        <div class="bursary-hero-wrapper">
          <div class="split-content bursary-hero-left">
            <h1 class="subtitle color-white">
              {{post.Text1}}
            </h1>
            <h2 class="h1-size color-white">
               {{post.Text2}}
            </h2>
            <div class="inner-container-600px">
              <p class="press-p">
                {{post.Text3}}
              </p>
            </div>
            <div class="_2-button-wrap mg-top-32px">
              <a href="#" class="button-primary _2-buttons white w-button"
                >Read more</a
              >
            </div>
          </div>
          <div class="split-content bursary-hero-right">
            <img
              class="image bursary-hero"
              :src="post.HeroImage.url"
              height=""
              alt=""
              style="opacity: 1"
              sizes="(max-width: 767px) 97vw, (max-width: 1439px) 59vw, 725.265625px"
              data-w-id="14c00482-11d4-5f54-8eb7-55810b262dff"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </div>
    <div id="donate" class="section detailsed wf-section">
      <div class="container-default w-container">
        <div class="narrow-section detailed">
          <div>
            <div class="blog-post-body-wrapper">
              <div class="split-content blog-post-body-left">
                <h2 class="heading-4 content">{{post.SectionHeader}}</h2>
                <p id="bursary-synopsis" class="profile-p" v-html="marked(post.SectionBody)"></p>
              </div>
             <AuthorCard/>
            </div>
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
    const  data  = await axios.get(`${process.env.STRAPI_URL}/constituents-monthly-financial-assistance`)
    return {
      post: data.data
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
        "data-wf-page": "62b03dee03457befd660c38d",
        "data-wf-site": "61d454e57ae5920f3051faad",
      },
      title: "Constituents Monthly financial assistance - Senator Mukhail Adetokunbo Abirus",
      meta: [
        {
          hid: "Constituents Monthly financial assistance - Senator Mukhail Adetokunbo Abiru",
          name: "Constituents Monthly financial assistance - Senator Mukhail Adetokunbo Abiru",
          content: "Constituents Monthly financial assistance - Senator Mukhail Adetokunbo Abiru",
        },
      ],
    };
  },
};
</script>
