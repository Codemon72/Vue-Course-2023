<template>
  <div class="ComponentContainer">
    <h4>MyButton Component</h4>
    <button @click="clickHandler">{{ buttonText }}</button>
  </div>
</template>

<script>
export default {
  props: {
    buttonText: {
      type: String,
      required: false,
      default: 'This is a button'
    }
  },
  emits: ['somebodyJustClickedTheButton'],
  methods: {
    clickHandler() {
      this.$emit('somebodyJustClickedTheButton')
    }
  }
}
</script>

<style scoped></style>
