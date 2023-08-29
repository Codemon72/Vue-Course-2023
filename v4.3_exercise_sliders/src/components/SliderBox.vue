<template>
  <div class="SliderBox">
    <SliderSingle @sliderValue="adjustSliderValue1" />
    <SliderSingle @sliderValue="adjustSliderValue2" />
    <SliderSingle @sliderValue="adjustSliderValue3" />
    <SliderSingle @sliderValue="adjustSliderValue4" />
    <SliderSingle @sliderValue="adjustSliderValue5" />
    <div class="total">Total: {{ total }} / 500</div>
  </div>
</template>

<script>
import SliderSingle from './SliderSingle.vue'

export default {
  components: {
    SliderSingle
  },
  methods: {
    adjustSliderValue1(value) {
      this.sliderValue1 = value
      this.adjustTotal()
    },
    adjustSliderValue2(value) {
      this.sliderValue2 = value
      this.adjustTotal()
    },
    adjustSliderValue3(value) {
      this.sliderValue3 = value
      this.adjustTotal()
    },
    adjustSliderValue4(value) {
      this.sliderValue4 = value
      this.adjustTotal()
    },
    adjustSliderValue5(value) {
      this.sliderValue5 = value
      this.adjustTotal()
    },
    adjustTotal() {
      this.total =
        Number(this.sliderValue1) +
        Number(this.sliderValue2) +
        Number(this.sliderValue3) +
        Number(this.sliderValue4) +
        Number(this.sliderValue5)
    }
  },
  data() {
    return {
      sliderValue1: 0,
      sliderValue2: 0,
      sliderValue3: 0,
      sliderValue4: 0,
      sliderValue5: 0,
      total: 0
    }
  }
}
</script>

<style scoped>
.SliderBox {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #efefef;
  height: 355px;
  width: 555px;
  border-radius: 6px;
}
.total {
  margin-top: 1rem;
  font-size: 1.5em;
}
</style>
