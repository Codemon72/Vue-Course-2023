<template>
  <div class="ComponentContainer">
    <h4>ButtonBox Component</h4>
    <div class="button-box">
      <MyButton buttonText="+ 10" @somebodyJustClickedTheButton="handleUpTen" />
      <MyButton buttonText="+ 1" @somebodyJustClickedTheButton="handleUp" />
      <MyButton buttonText="- 1" @somebodyJustClickedTheButton="handleDown" />
      <MyButton buttonText="- 10" @somebodyJustClickedTheButton="handleDownTen" />
    </div>
  </div>
</template>

<script>
import MyButton from './MyButton.vue'

export default {
  components: {
    MyButton
  },
  emits: ['oneOfTheButtonsWasClicked'],
  methods: {
    handleUp() {
      this.$emit('oneOfTheButtonsWasClicked', 1)
    },
    handleDown() {
      this.$emit('oneOfTheButtonsWasClicked', -1)
    },
    handleUpTen() {
      this.$emit('oneOfTheButtonsWasClicked', 10)
    },
    handleDownTen() {
      this.$emit('oneOfTheButtonsWasClicked', -10)
    }
  }
}
</script>

<style scoped>
.button-box {
  display: flex;
  gap: 1rem;
  width: 400px;
  padding: 10px;
}
</style>
