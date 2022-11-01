<template>
  <div>
    <div class="section community wf-section" :style="{  backgroundColor: this.$store.state.global.SiteColor, backgroundImage: `url('${ this.$store.state.global.SiteBannerBackground.url }')` }">
      <div class="container-default w-container">
        <div class="grid-2-columns community-hero-wrapper">
          <div id="w-node-b6a1b0fa-3fe4-3220-7a07-63031dddbc83-b451fab8">
            <div class="mg-bottom-24px">
              <div class="text-300 text-uppercase bold color-white">Commmunity</div>
            </div>
            <h1 class="color-white">Join our online community and help Lagos East grow</h1>
            <div class="inner-container-600px">
              <p class="copy">Stay up to date with all the #DoingGood activities of senator Mukhail Adetokunbo Abiru in your community</p>
            </div>
            <div class="_2-button-wrap mg-top-40px">
              <a href="#socialmedia-community" class="button-primary _2-buttons white w-button">Join our community now!</a>
            </div>
          </div>
        </div>
      </div>
      <div data-w-id="7c254c07-b40a-e7f0-7310-213a65905f49" class="image-full-width-right community-hero"></div>
    </div>
        <div id="socialmedia-community" class="section wf-section">
      <div class="container-default w-container">
        <div>
          <div data-w-id="cfafdf21-9180-59a7-8b91-d47c8ecfba8c" style="opacity:0" class="inner-container-600px align-center mg-bottom-40px">
            <div class="subtitle">Social Media</div>
            <h2>Join our social media communities </h2>
          </div>
          <div data-w-id="cfafdf21-9180-59a7-8b91-d47c8ecfba8d" style="opacity:0" class="grid-3-columns">
            <a data-w-id="b06acd2e-33d9-3d89-1cdc-db05faf3ffca" :href="this.$store.state.footer.FacebookLink" target="_blank" class="card social-media w-inline-block">
              <div class="image-wrapper social-media-card facebook"><img src="~/assets/images/company-icon-white-facebook-politician-template.svg" loading="eager" alt="" class="image"></div>
              <div class="social-media-card-content">
                <h3 class="mg-bottom-4px">Facebook</h3>
                <!-- <p class="community-counter">21,439</p> -->
                <div data-w-id="8485cd59-addd-4f24-901b-063fbfc454ea" class="flex color-primary-1 bold">
                  <div>Follow me</div>
                  <div class="link-arrow"></div>
                </div>
              </div>
            </a>
            <a data-w-id="4eff9af8-5817-f668-3faa-837a3c04838a" :href="this.$store.state.footer.TwitterLink" target="_blank" class="card social-media w-inline-block">
              <div class="image-wrapper social-media-card twitter"><img src="~/assets/images/company-icon-white-twitter-politician-template.svg" loading="eager" alt="" class="image"></div>
              <div class="social-media-card-content">
                <h3 class="mg-bottom-4px">Twitter</h3>
                <!-- <p class="community-counter">6,716</p> -->
                <div data-w-id="4eff9af8-5817-f668-3faa-837a3c048392" class="flex color-primary-1 bold">
                  <div>Follow me</div>
                  <div class="link-arrow"></div>
                </div>
              </div>
            </a>
            <a data-w-id="21d9009f-27ce-7c1d-e7c8-9936e4bc5175" :href="this.$store.state.footer.InstagramLink" class="card social-media w-inline-block">
              <div class="image-wrapper social-media-card instagram"><img src="~/assets/images/company-icon-white-instagram-politician-template.svg" loading="eager" alt="" class="image"></div>
              <div class="social-media-card-content">
                <h3 class="mg-bottom-4px">Instagram</h3>
                <!-- <p class="community-counter">10,330</p> -->
                <div data-w-id="21d9009f-27ce-7c1d-e7c8-9936e4bc517d" class="flex color-primary-1 bold">
                  <div>Follow me</div>
                  <div class="link-arrow"></div>
                </div>
              </div>
            </a>
            <a data-w-id="438776a5-07c0-d93f-8839-c128694d9610" :href="this.$store.state.footer.YoutubeLink" target="_blank" class="card social-media w-inline-block">
              <div class="image-wrapper social-media-card youtube"><img src="~/assets/images/company-icon-white-youtube-politician-template.svg" loading="eager" alt="" class="image"></div>
              <div class="social-media-card-content">
                <h3 class="mg-bottom-4px">YouTube</h3>
                <!-- <p class="community-counter">113</p> -->
                <div data-w-id="438776a5-07c0-d93f-8839-c128694d9618" class="flex color-primary-1 bold">
                  <div>Follow me</div>
                  <div class="link-arrow"></div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeroSection from "~/components/banner/hero-section.vue";
import FProgram from "~/components/foundation-programmes/f-program.vue";
export default {
  name: "IndexPage",
  components: { HeroSection, FProgram },
  head() {
    return {
      htmlAttrs: {
        "data-wf-page": "61d454e57ae59224b451fab8",
        "data-wf-site": "61d454e57ae5920f3051faad",
      },
      title: "Community - Senator Mukhail Adetokunbo Abiru",
      meta: [
        {
          hid: "Community - Senator Mukhail Adetokunbo Abiru",
          name: "Community - Senator Mukhail Adetokunbo Abiru",
          content: "Community - Senator Mukhail Adetokunbo Abiru",
        },
      ],
    };
  },
};
</script>
