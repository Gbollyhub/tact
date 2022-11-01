<template>
  <div>
    <div
      class="section shop wf-section"
      :style="{
        backgroundColor: this.$store.state.global.SiteColor,
        backgroundImage: `url('${this.$store.state.global.SiteBannerBackground.url}')`,
      }"
    >
                  <CoolLightBox
                    :items="galleryImages"
                    :index="imageIndex"
                    @close="imageIndex = null"
                  >
                  </CoolLightBox>
      <div class="container-default w-container">
        <div class="shop-hero-wrapper">
          <div class="split-content shop-hero-left">
            <h1 class="subtitle color-white">gallery</h1>
            <h2 class="h1-size color-white">
              {{ this.$store.state.gallery[0].Title }}
            </h2>
            <div class="about-event-wrapper mg-bottom-8px gallery-date">
              <div>{{this.$store.state.gallery[0].PostDate | moment }}</div>
              <div class="text-separator"></div>
              <div>{{this.$store.state.gallery[0].PostDate | moment2 }}</div>
            </div>
            <div class="_2-button-wrap mg-top-32px">
              <a href="#donate" class="button-primary _2-buttons white w-button"
                >Join our instagram community</a
              >
            </div>
          </div>
          <div class="split-content shop-hero-right">
            <img
              :src="this.$store.state.gallery[0].Images[0].url"
              loading="eager"
              style="opacity: 1"
              data-w-id="6372786d-f2a6-ef80-4c0e-dbfaaa6fc21d"
              sizes="(max-width: 479px) 93vw, (max-width: 767px) 94vw, (max-width: 1439px) 43vw, 549px"
              alt=""
              class="image shop-hero"
            />
          </div>
        </div>
      </div>
    </div>
    <div
      data-w-id="ecde33fe-d088-7e44-0a2c-996681848421"
      style="opacity: 1"
      id="donate"
      class="section wf-section"
    >
      <div class="container-default w-container">
        <div>
          <div class="grid-3-columns">
            <div
              class="card objective-card gallery"
              v-for="(item, index) in this.$store.state.gallery"
              :key="index"
              @click="openGallery(index)"
              style="cursor:pointer"
            >
              <div
                style="cursor:pointer"
                class="gallery-lightbox-link w-inline-block w-lightbox"
                ><img
                  :src="item.Images[0].url"
                  loading="lazy"
                  width="324"
                  height="100%"
                  sizes="(max-width: 767px) 31vw, (max-width: 991px) 15vw, (max-width: 1439px) 10vw, 130.15625px"
                  alt=""
                  class="mg-bottom-0px"
                />
              </div>
              <div class="mg-top-40px">
                <h3 class="heading-10 gallery">{{ item.Title }}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pagination">
      <a href="#" class="button-primary">Next</a>
    </div>
    <FProgram />
  </div>
</template>

<script>
import HeroSection from "~/components/banner/hero-section.vue";
import FProgram from "~/components/foundation-programmes/f-program.vue";
import moment from 'moment'
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
export default {
  name: "IndexPage",
  components: { HeroSection, FProgram, CoolLightBox },
  computed:{
  galleryImages(){
      const galleryImages = this.$store.state.gallery.map(x => {
          return x.Images
        })
      const galleryImages2 = galleryImages[this.currentIndex].map(x => {
          return x.url
        })

        return galleryImages2
  }
  },
    filters:{
   moment: function(date){
      return moment(date).format('MMMM Do YYYY');
   },
   moment2: function(date){
      return moment(date).format('LT');
   }
  },
  methods:{
   openGallery(index){
    this.currentIndex = index
    this.imageIndex = 0
   }
  }, 
  data(){
  return{
    images:["https://tact-space.fra1.digitaloceanspaces.com/dccfd25347a0f651e7fe16003178eac3.jpg","https://tact-space.fra1.digitaloceanspaces.com/dccfd25347a0f651e7fe16003178eac3.jpg"],
    imageIndex: null,
    currentIndex: 0
  }
  },
  head() {
    return {
      htmlAttrs: {
        "data-wf-page": "61fe6cc4e132246923d0049f",
        "data-wf-site": "61d454e57ae5920f3051faad",
      },
      title: "Gallery - Senator Mukhail Adetokunbo Abiru",
      meta: [
        {
          hid: "Gallery - Senator Mukhail Adetokunbo Abiru",
          name: "Gallery - Senator Mukhail Adetokunbo Abiru",
          content: "Gallery - Senator Mukhail Adetokunbo Abiru",
        },
      ],
    };
  },
};
</script>
