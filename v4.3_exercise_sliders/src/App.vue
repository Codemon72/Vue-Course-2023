<template>
  <h1>Exercise Sliders</h1>
  <div class="sliderBoxContainer">
    <SliderBox />
  </div>
</template>

<script>
import SliderBox from './components/SliderBox.vue'
export default {
  components: {
    SliderBox
  }
}
</script>

<style scoped>
.sliderBoxContainer {
  display: flex;
  justify-content: center;
  align-items: center;
}</style>
