<template>
  <div class="ComponentContainer">
    <!-- A button that listens for a click event. When clicked, it calls the `clickHandler` method -->
    <button @click="clickHandler">UP</button>
  </div>
</template>

<script>
export default {
  // `emits` is an array that lists all the custom events this component can emit to its parent
  emits: ['somebodyJustClickedTheButton'],
  // A method defined for the component. This is the function that gets called when the button is clicked
  methods: {
    clickHandler() {
      // `$emit` is a method to send a custom event to the parent component
      // Here, when the button is clicked, the event `somebodyJustClickedTheButton` is emitted
      this.$emit('somebodyJustClickedTheButton')
    }
  }
}
</script>

<style scoped></style>
