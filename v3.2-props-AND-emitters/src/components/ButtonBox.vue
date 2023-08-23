<template>
  <div class="ComponentContainer">
    <h4>ButtonBox Component</h4>
    <div class="button-box">
      <!-- Instances of MyButton component with different labels -->
      <!-- Each button listens for its click event and calls a specific method when clicked -->
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
  // Declare the MyButton component so it can be used in the template
  components: {
    MyButton
  },

  // This component emits an event named 'oneOfTheButtonsWasClicked'
  emits: ['oneOfTheButtonsWasClicked'],

  // These methods handle the click events of the individual buttons 
  // and emit a custom event with specific values to the parent component
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
