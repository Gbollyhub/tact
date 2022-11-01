<template>
  <div class="split-content blog-post-body-right">
    <div class="card author-card">
      <img
        :src="this.$store.state.global.AuthorCardImage.url"
        loading="lazy"
        alt=""
        class="mg-bottom-16px"
      />
      <h4 class="title-link detailed-press">
        {{this.$store.state.global.AuthorCardTitle}}
      </h4>
      <h5>Follow me on</h5>
      <div class="social-links-wrapper footer-social-links">
        <a
          :href="this.$store.state.footer.FacebookLink"
          target="_blank"
          class="social-link"
          ></a
        >
        <a :href="this.$store.state.footer.TwitterLink" class="social-link"></a>
        <a
          :href="this.$store.state.footer.InstagramLink"
          target="_blank"
          class="social-link"
          ></a
        >
        <a
          :href="this.$store.state.footer.YoutubeLink"
          target="_blank"
          class="social-link"
          ></a
        >
      </div>
    </div>
  </div>
</template>
