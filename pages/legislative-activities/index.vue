<template>
  <div>
    <div 
    class="section shop wf-section"
     :style="{
        backgroundColor: this.$store.state.global.SiteColor,
        backgroundImage: `url('${this.$store.state.global.SiteBannerBackground.url}')`,
      }"
    >
      <div class="container-default bursary w-container">
        <div class="bursary-hero-wrapper legislative">
          <div class="split-content bursary-hero-left">
            <h1 class="subtitle color-white">LEGISLATIVE ACTIVITIES</h1>
            <h2 class="h1-size color-white">{{this.$store.state.lActivities[0].Title}}</h2>
            <div class="inner-container-600px">
              <p class="press-p">
                {{this.$store.state.lActivities[0].HeroSummary}}
              </p>
            </div>
            <div class="_2-button-wrap mg-top-32px">
              <a
                :href="`/legislative-activities/${this.$store.state.lActivities[0].id}`"
                class="button-primary _2-buttons white w-button"
                >Read more</a
              >
            </div>
          </div>
          <div class="split-content bursary-hero-right legislative">
            <img
              class="image bursary-hero"
              :src="this.$store.state.lActivities[0].Image.url"
              height=""
              alt=""
              style="opacity: 0"
              sizes="(max-width: 767px) 87vw, (max-width: 991px) 88vw, (max-width: 1439px) 44vw, 559.796875px"
              data-w-id="b14524e7-ad0d-3dd2-6ccf-92e481f7ff38"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="narrow-section wf-section">
      <div class="container-default w-container">
        <div>
          <div
            data-w-id="cfafdf21-9180-59a7-8b91-d47c8ecfba8c"
            class="content-top title-button"
          >
            <div
              id="w-node-d04532ce-1655-8eec-3f8d-db35aee9b699-645211e3"
              class="page-submenu"
            >
            <div
            @click="filterList('All')"
                id="w-node-_5154bbd9-3b45-eded-3861-109b3f4b9529-645211e3"
                :class="[ currentTab === 'All' ? 'button-secondary w--current' : 'button-secondary' ]"
                >All</div
              >
              <div
              @click="filterList('Bills')"
                id="w-node-_5154bbd9-3b45-eded-3861-109b3f4b9529-645211e3"
                :class="[ currentTab === 'Bills' ? 'button-secondary w--current' : 'button-secondary' ]"
                >Bills</div
              >
              <div
              @click="filterList('Motions')"
                id="w-node-_29f7dfe3-a009-e7b6-dc0f-6ea5e9605895-645211e3"
                :class="[ currentTab === 'Motions' ? 'button-secondary w--current' : 'button-secondary' ]"
                >Motions</div
              >
              <div
              @click="filterList('Petitions')"
                id="w-node-_22b1f723-bf2e-29d5-8d9a-29c408127d90-645211e3"
                :class="[ currentTab === 'Petitions' ? 'button-secondary w--current' : 'button-secondary' ]"
                >Petitions</div
              >
            </div>
          </div>
          <div class="list-wrapper">
            <a
              id="w-node-a3d59d64-40bb-03ca-6f6d-6b61656d94fc-645211e3"
              :href="`/legislative-activities/${item.id}`"
              class="card blog-post-card w-inline-block"
               v-for="(item, index) in activityList"
              :key="index"
            >
              <div class="about-blog-post-wrapper">{{ item.PostDate | moment }}</div>
              <h3 class="title blog-post-card-title">
               {{item.Title}}
              </h3>
              <!-- <div>Second reading</div> -->
              <div
                data-w-id="11f9454d-f7e5-df2c-528d-edab93ca2a5e"
                class="flex mg-top-24px color-primary-1"
              >
                <div>Read more</div>
                <div class="link-arrow"></div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div
      id="w-node-a12e3150-68e5-f35a-9498-5e4ea0abbbff-645211e3"
      class="pagination"
    >
      <a href="#" class="button-primary">Next</a>
    </div>
  </div>
</template>

<script>
import HeroSection from "~/components/banner/hero-section.vue";
import FProgram from "~/components/foundation-programmes/f-program.vue";
import moment from "moment";

export default {
  name: "IndexPage",
  components: { HeroSection, FProgram },
    filters: {
    moment: function (date) {
      return moment(date).format("MMMM Do YYYY");
    },
    moment2: function (date) {
      return moment(date).format("LT");
    },
  },
  data(){
    return{
      tabClass:'button-secondary',
      activeClass:'w--current',
     currentTab:'All',
     activityList: this.$store.state.lActivities
    }
  },
  methods:{
    filterList(value){
      let newList = this.$store.state.lActivities
      if(value === 'All') {
        this.activityList = this.$store.state.lActivities
        this.currentTab = value
      }else{
     this.activityList = newList.filter((x) => {
      return x.Tags === value
     })
     this.currentTab = value
      }
    }
  },
  head() {
    return {
      htmlAttrs: {
        "data-wf-page": "628a7948752166d4645211e3",
        "data-wf-site": "61d454e57ae5920f3051faad",
      },
      title: "Legislative Activities - Senator Mukhail Adetokunbo Abiru",
      meta: [
        {
          hid: "Legislative Activities - Senator Mukhail Adetokunbo Abiru",
          name: "Legislative Activities - Senator Mukhail Adetokunbo Abiru",
          content: "Legislative Activities - Senator Mukhail Adetokunbo Abiru",
        },
      ],
    };
  },
};
</script>
