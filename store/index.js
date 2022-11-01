import Vuex from 'vuex'


const createStore = () => {
  return new Vuex.Store({
    state: {
      global: {},
      footer: {},
      contactPage: {},
      addresses: [],
      faqs: [],
      gallery:[],
      programs:[],
      press:[],
      campaign:{},
      lActivities:[],
      facilitations:{}
    },
    getters: {
      getGlobal(state) {
        return state.global
      },
      getFooter(state) {
        return state.footer
      },
    },
    mutations: {
      setGlobal(state, payload) {
        state.global = payload
      },
      setFooter(state, payload) {
        state.footer = payload
      },
      setContactPage(state, payload) {
        state.contactPage = payload
      },
      setAddresses(state, payload) {
        state.addresses = payload
      },
      setFAQ(state, payload) {
        state.faqs = payload
      },
      setGallery(state, payload) {
        state.gallery = payload
      },
      setProgram(state, payload) {
        state.programs = payload
      },
      setPress(state, payload) {
        state.press = payload
      },
      setCampaign(state, payload) {
        state.campaign = payload
      },
      setlActivities(state, payload) {
        state.lActivities = payload
      },
      setFacilitations(state, payload) {
        state.facilitations = payload
      },
    },
    actions: {
      async nuxtServerInit(vuexContext, payload) {

        const globalData = await this.$axios.$get(`${process.env.STRAPI_URL}/global`)
        const footerData = await this.$axios.$get(`${process.env.STRAPI_URL}/footer`)
        const contactPageData = await this.$axios.$get(`${process.env.STRAPI_URL}/contact-page`)
        const addressData = await this.$axios.$get(`${process.env.STRAPI_URL}/contact-addresses`)
        const faqData = await this.$axios.$get(`${process.env.STRAPI_URL}/faqs`)
        const galleryData = await this.$axios.$get(`${process.env.STRAPI_URL}/galleries`)
        const programData = await this.$axios.$get(`${process.env.STRAPI_URL}/tact-programmes`)
        const pressData = await this.$axios.$get(`${process.env.STRAPI_URL}/presses`)
        const campaignData = await this.$axios.$get(`${process.env.STRAPI_URL}/campaign-media-kit`)
        const lActivitiesData = await this.$axios.$get(`${process.env.STRAPI_URL}/legislative-activities`)
        const facilitationsData = await this.$axios.$get(`${process.env.STRAPI_URL}/facilitations`)
        

        const nfacilitationsData = facilitationsData.sort(function(a, b) {
          var c = new Date(a.PostDate);
          var d = new Date(b.PostDate);
          return d-c;
        });

        const nGalleryData = galleryData.sort(function(a, b) {
          var c = new Date(a.PostDate);
          var d = new Date(b.PostDate);
          return d-c;
        });

        const galleryImages = galleryData.map(x => {
          return x.Images.url
        })

        const nPressData = pressData.sort(function(a, b) {
          var c = new Date(a.PressDate);
          var d = new Date(b.PressDate);
          return d-c;
        });

        const nLActivitiesData = lActivitiesData.sort(function(a, b) {
          var c = new Date(a.PostDate);
          var d = new Date(b.PostDate);
          return d-c;
        });

        vuexContext.dispatch('setGlobal', globalData)
        vuexContext.dispatch('setFooter', footerData)
        vuexContext.dispatch('setContactPage', contactPageData)
        vuexContext.dispatch('setAddresses', addressData)
        vuexContext.dispatch('setFAQ', faqData)
        vuexContext.dispatch('setGallery', nGalleryData)
        vuexContext.dispatch('setProgram', programData)
        vuexContext.dispatch('setPress', nPressData)
        vuexContext.dispatch('setCampaign', campaignData)
        vuexContext.dispatch('setlActivities', nLActivitiesData)
        vuexContext.dispatch('setFacilitations', nfacilitationsData)
      },

      setGlobal(vuexContext, payload) {
        vuexContext.commit('setGlobal', payload)
      },
      setFooter(vuexContext, payload) {
        vuexContext.commit('setFooter', payload)
      },
      setContactPage(vuexContext, payload) {
        vuexContext.commit('setContactPage', payload)
      },
      setAddresses(vuexContext, payload) {
        vuexContext.commit('setAddresses', payload)
      },
      setFAQ(vuexContext, payload) {
        vuexContext.commit('setFAQ', payload)
      },
      setGallery(vuexContext, payload) {
        vuexContext.commit('setGallery', payload)
      },
      setProgram(vuexContext, payload) {
        vuexContext.commit('setProgram', payload)
      },
      setPress(vuexContext, payload) {
        vuexContext.commit('setPress', payload)
      },
      setCampaign(vuexContext, payload) {
        vuexContext.commit('setCampaign', payload)
      },
      setlActivities(vuexContext, payload) {
        vuexContext.commit('setlActivities', payload)
      },
      setFacilitations(vuexContext, payload) {
        vuexContext.commit('setFacilitations', payload)
      },
    }
  })
}

export default createStore;
