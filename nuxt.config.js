export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Distinguished Senator Mukhail Adetokunbo Abiru, FCA',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {content:"http://localhost:3000/_nuxt/assets/images/SenatorTokunbo_Abiru_About.jpg", property:"og:image"},
      {content:"http://localhost:3000/_nuxt/assets/images/SenatorTokunbo_Abiru_About.jpg", property:"twitter:image"},
      { name:"google-site-verification", content:"TEuAqIPsExa4pEzT_JUxQMcx5sWX31weTF80GK77g9o" },
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ],
    script: [
      {
       src:"https://embed.typeform.com/next/embed.js"
      },
      {
        src: 'https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=61d454e57ae5920f3051faad',
        type: "text/javascript",
        body: true
      },
      {
        src:'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js',
        type: "text/javascript"
      },
      {
        src:'/js/tokunboabiru.js',
        type: "text/javascript",
        body: true
      },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/css/components.css',
    '~assets/css/tokunboabiru.css',
    '~assets/css/normalize.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/dotenv'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/recaptcha'
  ],
  recaptcha: {
    hideBadge: false, // Hide badge element (v3 & v2 via size=invisible)
    siteKey: '6LdKIXohAAAAAEvZXS5V12slR60kpT8yTAgEbd62', // Site key for requests
    version: 2, // Version
    size: 'invisible' // Size: 'compact', 'normal', 'invisible' (v2)
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
