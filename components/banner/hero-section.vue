<template>
  <div class="section home-hero wf-section" :style="{  backgroundColor: getGlobal.SiteColor, backgroundImage: `url('${ getGlobal.SiteBannerBackground.url }')` }">
    <div class="container-default w-container">
      <div class="hero-container">
        <div
          data-w-id="071cde0c-e76a-2555-6e58-736bfba13956"
          class="grid-2-columns home-hero-wrapper"
        >
          <div class="home-hero-left-content">
            <p class="mg-new color-white">{{post.Text1}}</p>
            <h1 class="display-1 color-white home" style="color: white;">{{post.Text2}}</h1>
            <p class="mg-bottom-32px color-white">
              {{post.Text3}}
            </p>
            <div class="_2-button-wrap home-hero">
              <a
                href="/about"
                class="button-primary _2-buttons white w-button"
                >Meet Tokunbo Abiru</a
              >
              <a
                href="/the-needs-assessment"
                class="button-secondary button-white w-button"
                >The Needs Assessment</a
              >
            </div>
          </div>
          <div id="w-node-_987d4117-4e6a-631b-68f3-253dc4da915f-0451faae">
            <img
              class="home-hero-image"
              :src="post.HeroImage.url"
              width="634"
              alt=""
              style="opacity: 0"
              sizes="(max-width: 479px) 100vw, (max-width: 767px) 84vw, (max-width: 991px) 76vw, (max-width: 1439px) 47vw, 674.296875px"
              data-w-id="f4a8fad3-eec3-4e25-888d-64c0acd4603b"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { mapGetters } from 'vuex' ;
export default {
  props:['post'],
  computed:{
    ...mapGetters([
      'getGlobal',
    ])
  }
}
</script>