<template>
  <div class="container">
    <input type="range" min="0" max="100" v-model="value" @input="updateValue" class="slider" />
    <input type="text" v-model="value" @input="updateValue" class="value" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 0
    }
  },
  emits: ['sliderValue'],
  methods: {
    updateValue() {
      // Remove non-numeric characters from the enteredValue using a regular expression
      const numericValue = this.value.replace(/\D/g, '')

      // Update the value to reflect the cleaned value
      this.value = numericValue

      // prevent entering numbers <0 and >100
      if (this.value > 100) {
        this.value = 100
      } else if (this.value < 0) {
        this.value = 0
      }
      this.$emit('sliderValue', this.value)
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}
input[type='range'].slider {
  accent-color: #4abf94;
}
/* .slider {
  -webkit-appearance: none;
  width: 100%;
  height: 10px;
  border-radius: 5px;
  background: #d3d3d3;
  outline: none;
  margin-right: 10px;
}
.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #4abf94;
  cursor: pointer;
}
.slider::-moz-range-thumb {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #4abf94;
  cursor: pointer;
} */
.value {
  font-size: 1.3em;
  background-color: #fff;
  margin-left: 1rem;
  padding: 5px;
  border-radius: 6px;
  height: 1.5rem;
  width: 3rem;
  text-align: end;
}
</style>
