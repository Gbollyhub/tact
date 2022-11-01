<template>
  <div
      class="section shop wf-section"
      :style="{
        backgroundColor: this.$store.state.global.SiteColor,
        backgroundImage: `url('${this.$store.state.global.SiteBannerBackground.url}')`,
      }"
      style="height:100vh;display:flex;justify-content: center;align-items: center;"
    >
      <div style="opacity:1;width:100%;" class="text-center" >
        <h1 class="_404-title">404</h1>
        <h2>Oops this page is missing!</h2>
        <div class="mg-top-24px">
          <a href="/" class="button-secondary button-white w-button">Go Home</a>
        </div>
      </div>
  
</div>

</template>

<script>
  export default {
    props: ['error'],
    layout: 'error' // you can set a custom layout for the error page
  }
</script>