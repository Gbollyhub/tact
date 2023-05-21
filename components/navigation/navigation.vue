<template>
       <div data-collapse="medium" data-animation="over-left" data-duration="400" data-w-id="556ebc81-b554-8299-bc0d-bf84370dd504" data-easing="ease" data-easing2="ease" role="banner" class="header absolute-header w-nav">
      <div class="container-default w-container">
        <div class="header-wrapper">
          <div class="split-content header-right">
            <a href="/" aria-current="page" class="brand w-nav-brand w--current"><img :src="getGlobal.SiteLogo.url" loading="eager" alt="" class="header-logo"></a>
            <nav role="navigation" class="nav-menu absolute-header w-nav-menu">
              <ul role="list" class="header-navigation">
                <li class="nav-item-wrapper home">
                  <a href="/" aria-current="page" class="nav-link color-white w--current">Home</a>
                </li>
                <li class="nav-item-wrapper">
                  <a href="/about" class="nav-link color-white">About</a>
                </li>
                <li class="nav-item-wrapper">
                  <div data-hover="true" data-delay="0" data-w-id="556ebc81-b554-8299-bc0d-bf84370dd513" class="w-dropdown">
                    <div class="nav-link dropdown color-white w-dropdown-toggle">
                      <div>Activities</div>
                    </div>
                    <nav class="dropdown-list w-dropdown-list">
                      <div class="dropdown-nav-main-wrapper">
                        <div class="dropdown-nav-wrapper">
                          <div class="dropdown-nav-pages-wrapper">
                            <div class="title dropdown-nav-title">LEGISLATIVE ACTIVITIES</div>
                            <div class="dropdown-nav-content">
                              <ul role="list" class="dropdown-nav w-list-unstyled">
                                <li class="dropdown-nav-item">
                                  <a href="/legislative-activities" class="dropdown-nav-link w-dropdown-link">Sponsored Bills, Motions &amp; Petitions</a>
                                </li>
                              </ul>
                            </div>
                            <div class="title dropdown-nav-title">tact foundation</div>
                            <div class="dropdown-nav-content">
                              <ul role="list" class="dropdown-nav w-list-unstyled">
                                <li class="dropdown-nav-item">
                                  <a href="/bursary" class="dropdown-nav-link w-dropdown-link">BURSARY 600</a>
                                  <a href="/msme-1000" class="dropdown-nav-link w-dropdown-link">6% Interest Loan for MSME</a>
                                  <a href="/sail" class="dropdown-nav-link w-dropdown-link">SAIL Innovation Lab</a>
                                </li>
                              </ul>
                            </div>
                            <div class="title dropdown-nav-title">eMPOWERMENT &amp; facilitations</div>
                            <div class="dropdown-nav-content">
                              <ul role="list" class="dropdown-nav w-list-unstyled">
                                <li class="dropdown-nav-item">
                                  <a href="/covid-19-financial-relief-fund" class="dropdown-nav-link w-dropdown-link">Covid-19 Financial Relief Support</a>
                                  <a href="/constituents-monthly-financial-assistance" class="dropdown-nav-link w-dropdown-link">Monthly Constituent Financial Support</a>
                                  <a href="/facilitations" class="dropdown-nav-link w-dropdown-link">Infrastructural facilitations</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </nav>
                  </div>
                </li>
                <li class="nav-item-wrapper">
                  <a href="/press" class="nav-link color-white">Press</a>
                </li>
                <li class="nav-item-wrapper">
                  <a href="/gallery" class="nav-link color-white">Gallery</a>
                </li>
                <li class="nav-item-wrapper">
                  <a href="/contact-us" class="nav-link color-white">Contact</a>
                </li>
                <li class="nav-item-wrapper show-in-mobile">
                  <div class="_2-button-wrap small-buttons show-in-mobile">
                    <a href="/community" class="button-secondary small button-white _2-buttons-inside-menu w-button">Join our community</a>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
          <div class="split-content header-left">
            <div class="small-2-button-wrap">
              <a href="/community" class="button-secondary small button-white _2-buttons-inside-menu w-button">Join our community</a>
              <a href="https://cvr.inecnigeria.org/Public/getStarted" class="button-primary small w-button">Get Your PVC Now!</a>
            </div>
            <div class="menu-button w-nav-button">
              <div data-is-ix2-target="1" class="menu-button-icon" data-w-id="556ebc81-b554-8299-bc0d-bf84370dd594" data-animation-type="lottie" data-src="documents/menu-icon-lottie-politician-template.json" data-loop="0" data-direction="-1" data-autoplay="0" data-renderer="svg" data-default-duration="2.36" data-duration="0" data-ix2-initial-state="97"></div>
              <div class="text-block-3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex' ;
export default {
  computed:{
    ...mapGetters([
      'getGlobal',
    ])
  }
}
</script>