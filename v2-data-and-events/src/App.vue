<template>
  <div>
    <div>Counter: {{ counter }}</div>
    <button @click="clickHandlerUp">+1</button>
    <button @click="clickHandlerDown">-1</button>
    <button @click="clickHandlerReset">back to zero</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    clickHandlerUp() {
      this.counter += 1
    },
    clickHandlerDown() {
      this.counter -= 1
    },
    clickHandlerReset() {
      this.counter = 0
    }
  }
}
</script>

<style scoped>
button {
  margin: 1rem;
}
</style>
