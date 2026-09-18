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
      campaign:{},
      lActivities:[],
      facilitations:{},
      resources:[]
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
      setResources(state, payload) {
        state.resources = payload
      },
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

        const globalRes = await this.$axios.$get(`${process.env.STRAPI_URL}/global?populate=*`)
        const footerRes = await this.$axios.$get(`${process.env.STRAPI_URL}/footer?populate=*`)
        const contactPageRes = await this.$axios.$get(`${process.env.STRAPI_URL}/contact-page?populate=*`)
        const addressRes = await this.$axios.$get(`${process.env.STRAPI_URL}/contact-addresses?populate=*`)
        const faqRes = await this.$axios.$get(`${process.env.STRAPI_URL}/faqs?populate=*`)
        const galleryRes = await this.$axios.$get(`${process.env.STRAPI_URL}/galleries?populate=*`)
        const programRes = await this.$axios.$get(`${process.env.STRAPI_URL}/tact-programmes?populate=*`)
        const campaignRes = await this.$axios.$get(`${process.env.STRAPI_URL}/campaign-media-kit?populate=*`)
        const lActivitiesRes = await this.$axios.$get(`${process.env.STRAPI_URL}/legislative-activities?populate=*`)
        const facilitationsRes = await this.$axios.$get(`${process.env.STRAPI_URL}/facilitations?populate=*`)
        const resourcesRes = await this.$axios.$get(`${process.env.STRAPI_URL}/resources?populate=*`)

        // Strapi v5 wraps every response as { data, meta } - unwrap before using
        const globalData = globalRes.data
        const footerData = footerRes.data
        const contactPageData = contactPageRes.data
        const addressData = addressRes.data
        const faqData = faqRes.data
        const galleryData = galleryRes.data
        const programData = programRes.data
        const campaignData = campaignRes.data
        const lActivitiesData = lActivitiesRes.data
        const facilitationsData = facilitationsRes.data
        const resourcesData = resourcesRes.data

        const nResourcesData = resourcesData.sort(function(a, b) {
          var c = new Date(a.createdAt);
          var d = new Date(b.createdAt);
          return d-c;
        });

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
        vuexContext.dispatch('setCampaign', campaignData)
        vuexContext.dispatch('setlActivities', nLActivitiesData)
        vuexContext.dispatch('setFacilitations', nfacilitationsData)
        vuexContext.dispatch('setResources', nResourcesData)
      },

      setResources(vuexContext, payload) {
        vuexContext.commit('setResources', payload)
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
