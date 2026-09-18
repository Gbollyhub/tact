<template>
  <div class="section about-hero wf-section" :style="{  backgroundColor: this.$store.state.global.SiteColor, backgroundImage: `url('${ this.$store.state.global.SiteBannerBackground.url }')` }">
    <div class="container-default w-container">
      <div class="about-hero-main-wrapper">
        <div
          data-w-id="071cde0c-e76a-2555-6e58-736bfba13956"
          style="opacity: 1"
          class="split-content about-hero-left"
        >
          <div class="mg-bottom-16px">
            <div class="text-300 text-uppercase bold color-white">
             {{about.Text1}}
            </div>
          </div>
          <h1 class="color-white"> {{about.Text2}}</h1>
          <div class="inner-container-500px">
            <p class="meet-subh">
              {{about.Text3}}
            </p>
          </div>
          <div class="_2-button-wrap mg-top-40px">
            <a
              href="#meet-profile"
              class="button-primary _2-buttons white w-button"
              >Read more</a
            >
          </div>
        </div>
        <div class="split-content about-hero-right">
          <img
            :src="about.HeroImage.url"
            loading="eager"
            style="opacity: 1"
            data-w-id="f5574c59-ffc1-4ad1-3377-11e280d7f133"
            sizes="(max-width: 479px) 93vw, (max-width: 767px) 94vw, (max-width: 991px) 36vw, (max-width: 1439px) 44vw, 561.1875px"
            alt=""
            class="image about-hero"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['about'],
}
</script>
