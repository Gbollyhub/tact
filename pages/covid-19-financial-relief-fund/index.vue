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
            <h1 class="subtitle color-white">{{post.Text1}}</h1>
            <h2 class="h1-size color-white">
              {{post.Text2}}
            </h2>
            <div class="inner-container-600px">
              <p class="press-p">
                {{post.Text3}}
              </p>
            </div>
            <div class="_2-button-wrap mg-top-32px">
              <a
                href="#covid-read"
                class="button-primary _2-buttons white w-button"
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
              sizes="(max-width: 767px) 97vw, (max-width: 1439px) 59vw, 746.390625px"
              data-w-id="0e3557a4-ae16-2f30-8644-9ae4644df27c"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </div>
    <div id="covid-read" class="section detailsed wf-section">
      <div class="container-default w-container">
        <div class="narrow-section detailed">
          <div>
            <div class="blog-post-body-wrapper">
              <div class="split-content blog-post-body-left">
                 <h2 class="heading-4 content">{{post.SectionTitle}}</h2>
                <p id="bursary-synopsis" class="profile-p" v-html="marked(post.SectionBody)"></p>
              </div>
              <div class="split-content blog-post-body-right">
                <div class="card author-card">
                  <img
                    :src="post.CardImage.url"
                    loading="lazy"
                    sizes="(max-width: 479px) 83vw, (max-width: 767px) 87vw, 258.984375px"
                    alt=""
                    class="mg-bottom-16px"
                  />
                  <div class="split-content progapply">
                    <h2 class="bursary-h2">{{post.CardTitle}}</h2>
                    <p class="mg-bottom-24px">
                      {{post.CardDescription}}
                    </p>
                    <a :href="post.Cardlink" target="_blank" class="button-primary w-button"
                      >View list of Beneficiaries</a
                    >
                  </div>
                </div>
              </div>
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
import axios from 'axios'
import marked from 'marked';
export default {
  name: "IndexPage",
  components: { HeroSection, FProgram },
           async asyncData({ params }) {
    const  data  = await axios.get(`${process.env.STRAPI_URL}/covid-19-financial-relief-fund`)
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
        "data-wf-page": "62b0313235e2c8b403c654ff",
        "data-wf-site": "61d454e57ae5920f3051faad",
      },
      title: "Covid-19 financial Relief Fund - Senator Mukhail Adetokunbo Abiru",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Covid-19 financial Relief Fund",
        },
      ],
    };
  },
};
</script>
