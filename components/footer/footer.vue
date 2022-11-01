<template>
   <footer class="footer">
      <div class="container-default">
        <div data-w-id="fa6243ba-3540-32b4-8dbf-e21601538ff3" class="footer-content-top">
          <div class="footer-column first">
            <a href="/" aria-current="page" class="footer-logo-container mg-bottom-24px w-inline-block w--current"><img :src="getFooter.Logo.url" loading="eager" alt="" class="footer-logo"></a>
            <p>{{getFooter.Summary}}</p>
            <div class="footer-contact-links-wrapper">
              <a :href="`mailto:${getFooter.EmailAddress}?subject=Contact`" class="footer-contact-link w-inline-block"><img src="~/assets/images/mail-icon-politician-template.svg" loading="eager" alt="" class="mg-right-16px">
                <div>{{getFooter.EmailAddress}}</div>
              </a>
              <a :href="`tel:${getFooter.PhoneNumber}`" class="footer-contact-link w-inline-block"><img src="~/assets/images/phone-icon-politician-template.svg" loading="eager" alt="" class="mg-right-16px">
                <div>{{getFooter.PhoneNumber}}</div>
              </a>
            </div>
          </div>
          <div class="footer-column footer-menu-nav-main-wrapper">
            <div class="footer-menu-wrapper">
              <div class="footer-title">Menu</div>
              <div class="footer-menu-content">
                <ul role="list" class="footer-nav">
                  <li class="footer-nav-item">
                    <a href="/" aria-current="page" class="footer-link w--current">Home</a>
                  </li>
                  <li class="footer-nav-item">
                    <a href="/meet" class="footer-link">About</a>
                  </li>
                  <li class="footer-nav-item">
                    <a href="/press" class="footer-link">Press Releases</a>
                  </li>
                  <li class="footer-nav-item">
                    <a href="/gallery" class="footer-link">Gallery</a>
                  </li>
                  <li class="footer-nav-item">
                    <a href="/bursary" class="footer-link">Bursary 600</a>
                  </li>
                  <li class="footer-nav-item">
                    <a href="/msme-1000" class="footer-link">6% Interest Loan for MSME</a>
                    <a href="/sail-senator-abiru-innovation-lab" class="footer-link">SAIL</a>
                  </li>
                  <li class="footer-nav-item">
                    <a href="/legislative-activities" class="footer-link">Legislative activities</a>
                  </li>
                  <li class="footer-nav-item">
                    <a href="/facilitations" class="footer-link">Facilitations</a>
                  </li>
                  <li class="footer-nav-item last">
                    <a href="/contact-us" class="footer-link">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="card footer-newsletter-card" :style="{  backgroundColor: getGlobal.SiteColor, backgroundImage: `url('${ getGlobal.SiteBannerBackground.url }')` }">
            <div class="footer-newsletter-card-top-content"><img src="~/assets/images/newsletter-politician-template.svg" loading="eager" alt="" class="footer-newsletter-icon">
              <div>
                <h3 class="mg-bottom-4px color-white">Subscribe to receive updates</h3>
                <p class="mg-bottom-0px">Be ahead of the pack with all our #DOINGGOOD activities in Lagos EAST</p>
              </div>
            </div>
            <div class="footer-newsletter-form-block w-form">
              <form id="wf-form-Footer-Newsletter-Form" name="wf-form-Footer-Newsletter-Form" data-name="Footer Newsletter Form" method="get"><input type="email" class="input footer-newsletter-input w-input" maxlength="256" name="Email" data-name="Email" placeholder="Enter your email" id="Email-3" required=""><input type="submit" value="Join us" data-wait="Join us" class="submit-button full-width white w-button"></form>
              <div class="success-message small w-form-done">
                <div>Thank you for joining us!</div>
              </div>
              <div class="error-message w-form-fail">
                <div>Oops! Something went wrong</div>
              </div>
            </div>
          </div>
        </div>
        <div data-w-id="97dd53b9-9108-92d1-fd7a-9b4ec09bad18" class="footer-content-bottom">
          <div class="footer-small-print">{{getFooter.FootText}}</div>
          <div class="social-links-wrapper footer-social-links">
            <a :href="getFooter.FacebookLink" target="_blank" class="social-link"></a>
            <a :href="getFooter.TwitterLink" class="social-link"></a>
            <a :href="getFooter.InstagramLink" target="_blank" class="social-link"></a>
            <a :href="getFooter.YoutubeLink" target="_blank" class="social-link"></a>
          </div>
        </div>
      </div>
    </footer>
</template>

<script>
import { mapGetters } from 'vuex' ;
export default {
  computed:{
    ...mapGetters([
      'getGlobal',
      'getFooter',
    ])
  }
}
</script>