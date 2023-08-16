<template>
  <h1>BAZINGA!</h1>
  <OnOffButtons />
  <Fruitlist />
  <Gallery />


</template>

<script>
import OnOffButtons from './components/OnOffButtons.vue';
import Fruitlist from './components/Fruitlist.vue'
import Gallery from './components/Gallery.vue'

export default {
  components: {
    OnOffButtons,
    Fruitlist,
    Gallery
  }
}
</script>

<style scoped>
  body {
    /* won't work because style is 'scoped' */
    background-color: blanchedalmond;
  }

  h1 {
    color: red;
    font-family: fantasy;
    background-color: blanchedalmond;
  }
</style>