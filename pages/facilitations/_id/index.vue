<template>
  <div>
 <div class="section detailed wf-section">
      <div class="container-default w-container">
        <div class="shop-hero-wrapper">
          <div class="split-content shop-hero-left detailed">
            <a href="/facilitations" class="arrow-link-wrapper detailed"><span class="link-arrow reversed"></span>Back to Facilitations</a>
            <div class="about-event-wrapper mg-bottom-8px gallery-date">
              <div>{{post.PostDate | moment }}</div>
            </div>
            <h2 class="h1-size color-white">{{post.Title}}</h2>
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
                <div class="w-richtext" v-html="marked(post.Body)"></div>
              </div>
              <AuthorCard/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <FProgram/>
  </div>
</template>

<script>
import HeroSection from "~/components/banner/hero-section.vue";
import FProgram from "~/components/foundation-programmes/f-program.vue";
import marked from 'marked';
import AuthorCard from "~/components/author-card/author-card.vue";
import axios from 'axios'
import moment from "moment";
export default {
  name: "IndexPage",
  components: { HeroSection, FProgram, AuthorCard },
       filters: {
    moment: function (date) {
      return moment(date).format("MMMM Do YYYY");
    },
    moment2: function (date) {
      return moment(date).format("LT");
    },
  },
       async asyncData({ params }) {
    const  data  = await axios.get(`${process.env.STRAPI_URL}/facilitations/${params.id}`)
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
        "data-wf-page": "628ca7dd087f2d31e819a4e9",
        "data-wf-site": "61d454e57ae5920f3051faad",
      },
      title: "Facilitations",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Facilitations",
        },
      ],
    };
  },
};
</script>
