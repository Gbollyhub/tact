<template>
<div class="page-wrapper">
  <Navigation/>
  <Nuxt />  
  <Footer/>
</div>

</template>

<script>
import Navigation from '~/components/navigation/navigation.vue'
import Footer from '~/components/footer/footer.vue'
export default {
  components: {
    Navigation,
    Footer
}
}
</script>Header