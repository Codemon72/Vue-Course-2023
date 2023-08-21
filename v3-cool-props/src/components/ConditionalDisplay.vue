<template>
  <div class="ComponentContainer">
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
