<template>
  <div>
    <input type="text" @input="inputHandler" />
  </div>
  <div>{{ inputValue }}</div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: ''
    }
  },
  methods: {
    inputHandler(event) {
      this.inputValue = event.target.value
    }
  }
}
</script>

<style scoped></style>
