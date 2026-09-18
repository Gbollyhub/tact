<template>
  <div>
    <div class="section detailed wf-section">
      <div class="container-default w-container">
        <div class="shop-hero-wrapper">
          <div class="split-content shop-hero-left detailed">
            <a href="/press" class="arrow-link-wrapper detailed"
              ><span class="link-arrow reversed"></span>Back to Press</a
            >
            <div class="about-event-wrapper mg-bottom-8px gallery-date">
              <div>{{ press.PressDate | moment }}</div>
              <div class="text-separator"></div>
              <div>{{ press.PressDate | moment2 }}</div>
            </div>
            <h2 class="h1-size color-white">{{ press.Title }}</h2>
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
                <div class="w-richtext" v-html="marked(press.Body)"></div>
              </div>
              <AuthorCard />
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
import AuthorCard from "~/components/author-card/author-card.vue";
import axios from "axios";
import moment from "moment";
import marked from "marked";
export default {
  name: "IndexPage",
  components: { HeroSection, FProgram, AuthorCard },
  async asyncData({ params }) {
    const data = await axios.get(
      `${process.env.STRAPI_URL}/presses/${params.id}?populate=*`
    );
    return {
      press: data.data.data,
    };
  },
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
  head() {
    return {
      link: [
        {
          rel: "canonical",
          href: `https://tokunboabiru.org${this.$route.path}`,
        },
      ],
      htmlAttrs: {
        "data-wf-page": "61fe68af6ef20a85c783fd8b",
        "data-wf-site": "61d454e57ae5920f3051faad",
      },
      title: `${this.press.Title} - Senator Mukhail Adetokunbo Abiru`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.press.Body
            ? this.press.Body.replace(/<[^>]+>/g, "").substring(0, 160)
            : "Read the latest press release from Senator Mukhail Adetokunbo Abiru.",
        },
        {
          hid: "og:title",
          property: "og:title",
          content: `${this.press.Title} - Senator Mukhail Adetokunbo Abiru`,
        },
        {
          hid: "og:description",
          property: "og:description",
          content: this.press.Body
            ? this.press.Body.replace(/<[^>]+>/g, "").substring(0, 160)
            : "",
        },
      ],
    };
  },
};
</script>
