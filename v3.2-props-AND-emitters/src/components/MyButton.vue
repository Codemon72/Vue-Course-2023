<template>
  <div class="ComponentContainer">
    <h4>MyButton Component</h4>

    <!-- Button that displays the "buttonText" prop's value and listens for the click event -->
    <button @click="clickHandler">{{ buttonText }}</button>
  </div>
</template>

<script>
export default {
  // "props" define the custom attributes the component accepts 
  props: {
    buttonText: {
      type: String,
      required: false,
      default: 'This is a button'
    }
  },

  // This component emits an event named 'somebodyJustClickedTheButton'
  emits: ['somebodyJustClickedTheButton'],
  methods: {
    clickHandler() {
      this.$emit('somebodyJustClickedTheButton')
    }
  }
}
</script>

<style scoped></style>
