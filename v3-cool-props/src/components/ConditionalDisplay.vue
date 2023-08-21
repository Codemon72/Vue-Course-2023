<template>
  <div class="ComponentContainer">
    <h3>Conditional Display</h3>
    <input type="text" @input="inputHandler" />
    <div v-if="inputValue">{{ inputValue }}</div>
    <div v-else>Please write something here</div>
  </div>
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
