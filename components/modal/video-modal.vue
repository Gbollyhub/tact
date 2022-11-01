<template>
  <div class="modal">
    <h2 @click="closeModal" style="color:white;cursor:pointer;position:absolute;top:3%;right:3%">X</h2>
    <iframe
      width="768"
      height="432"
      :src="url"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    
  </div>
</template>


<script>
export default {
props:['url'],
methods: {
  closeModal(){
    this.$emit('closeModal', false)
  }
}
}

</script>

<style scoped>
.modal {
    position: fixed;
    z-index:9999;
    height: 100vh;
    width: 100%;
    background: rgba(0, 0, 0, 0.806);
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>