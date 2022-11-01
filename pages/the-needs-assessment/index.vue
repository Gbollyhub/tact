<template>
  <div>
    <div class="section shop wf-section" :style="{
        backgroundColor: this.$store.state.global.SiteColor,
        backgroundImage: `url('${this.$store.state.global.SiteBannerBackground.url}')`,
      }">
      <div class="container-default bursary w-container">
        <div class="bursary-hero-wrapper">
          <div class="split-content bursary-hero-left">
            <h1 class="subtitle color-white">{{post.Text1}}</h1>
            <h2 class="h1-size color-white">{{post.Text2}}</h2>
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
              :src="post.Image.url"
              height=""
              alt=""
              style="opacity: 1"
              sizes="(max-width: 767px) 97vw, (max-width: 1439px) 59vw, 746px"
              data-w-id="f9b75f5a-3fad-81f2-ca55-5d29ce4b424d"
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
                <h2 class="heading-4 content">{{post.SectionTitle}}</h2>
                <p v-html="marked(post.SectionBody)"></p>
                <a href="/facilitations" class="button-primary"
                  >View facilitated community projects</a
                >
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
    const  data  = await axios.get(`${process.env.STRAPI_URL}/need-assessment`)
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
        "data-wf-page": "62b038ee715c2057b3a0b4fe",
        "data-wf-site": "61d454e57ae5920f3051faad",
      },
      title: "The Needs Assessment - Senator Mukhail Adetokunbo Abiru",
      meta: [
        {
          hid: "The Needs Assessment - Senator Mukhail Adetokunbo Abiru",
          name: "The Needs Assessment - Senator Mukhail Adetokunbo Abiru",
          content: "The Needs Assessment - Senator Mukhail Adetokunbo Abiru",
        },
      ],
    };
  },
};
</script>
