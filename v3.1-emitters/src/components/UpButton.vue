<template>
  <div class="ComponentContainer">
<button @click="clickHandler">UP</button>
  </div>
</template>

<script>
  export default {
    emits: ['somebodyJustClickedTheButton'],
    methods: {
      clickHandler() {
        this.$emit('somebodyJustClickedTheButton')
      }
    }
    
  }
</script>

<style scoped>

</style>