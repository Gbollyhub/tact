<template>
  <div>
    <VideoModal v-show="modal" :url="url" @closeModal="closeModal"/>
    <div 
    class="section shop wf-section"
             :style="{
        backgroundColor: this.$store.state.global.SiteColor,
        backgroundImage: `url('${this.$store.state.global.SiteBannerBackground.url}')`,
      }">
      <div class="container-default bursary w-container">
        <div class="bursary-hero-wrapper">
          <div class="split-content bursary-hero-left">
            <h1 class="subtitle color-white">{{post.Text1}}</h1>
            <h2 class="h1-size color-white"> {{post.Text2}}</h2>
            <div class="inner-container-600px">
              <p class="press-p">
                {{post.Text3}}
              </p>
            </div>
            <div class="_2-button-wrap mg-top-32px">
              <a
                href="#bursary-synopsis"
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
              data-w-id="a5195e97-ea09-015f-e15d-a0bec372b323"
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
                <p id="bursary-synopsis" class="profile-p" v-html="marked(post.SectionBody)"></p>
              </div>
              <div class="split-content blog-post-body-right">
                <div class="card author-card">
                  <img
                    :src="post.MSMECardImage.url"
                    loading="lazy"
                    sizes="(max-width: 479px) 83vw, (max-width: 767px) 87vw, 258.984375px"
                    alt=""
                    class="mg-bottom-16px"
                  />
                  <div class="split-content progapply">
                    <h2 class="bursary-h2">
                      {{post.MSMECardTitle}}
                    </h2>
                    <p class="mg-bottom-24px">
                      {{post.MSMECardDescription}}
                    </p>
                    <a :href="post.MSMECardLink" target="_blank" class="button-primary w-button"
                      >Apply
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section mask bursary wf-section">
      <div class="container-default w-container">
        <div>
          <div
            data-w-id="1c3a6ebf-a023-e232-a557-27c00a3b6791"
            style="opacity: 1"
            class="inner-container-600px align-center mg-bottom-40px"
          >
            <h2 class="heading-8 bursary">Watch Highlights of MSME 1000</h2>
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
            data-w-id="1c3a6ebf-a023-e232-a557-27c00a3b6798"
            data-autoplay-limit="0"
            data-nav-spacing="3"
            data-duration="500"
            data-infinite="true"
          >
            <div class="false-mask inner-container-400px w-slider-mask">
                            <div 
                            @click="openModal(item.VideoUrl)"
              class="slide mg-right-24px w-slide"
              v-for="(item, index) in post2"
              :key="index" >
                <div class="card card-v1">
           
                    <img :src="item.VideoSnapshot.url" loading="lazy" alt="">
                
                </div>
              </div>   
              
            </div>
            <div
              data-w-id="1c3a6ebf-a023-e232-a557-27c00a3b67c4"
              class="slider-arrow-v1 left w-slider-arrow-left"
            >
              <div class="text-block"></div>
            </div>
            <div
              data-w-id="1c3a6ebf-a023-e232-a557-27c00a3b67c7"
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
import axios from 'axios'
import marked from 'marked';
import VideoModal from "~/components/modal/video-modal.vue";
export default {
  name: "IndexPage",
  components: { HeroSection, FProgram, VideoModal },
           async asyncData({ params }) {
    const  data  = await axios.get(`${process.env.STRAPI_URL}/msme`)
    const  data2  = await axios.get(`${process.env.STRAPI_URL}/msme-highlights`)
    return {
      post: data.data,
      post2: data2.data
      }
   },
      data(){
   return{
    modal:false,
    url:''
   }
   },
         methods:{
        marked: function(input) {
      return marked(input);
    },
        openModal(url){
      this.url =url
this.modal =true
console.log("open")

    },
    closeModal(){
      this.modal =false
      console.log("close")

    }
   },
  head() {
    return {
      htmlAttrs: {
        "data-wf-page": "62a7509c25d9be7097959809",
        "data-wf-site": "61d454e57ae5920f3051faad",
      },
      title: "MSME 1000 - Senator Mukhail Adetokunbo Abiru",
      meta: [
        {
          hid: "MSME 1000 - Senator Mukhail Adetokunbo Abiru",
          name: "MSME 1000 - Senator Mukhail Adetokunbo Abiru",
          content: "MSME 1000 - Senator Mukhail Adetokunbo Abiru",
        },
      ],
    };
  },
};
</script>
