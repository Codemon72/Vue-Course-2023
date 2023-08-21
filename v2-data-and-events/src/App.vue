<template>
  <div class="ComponentContainer">
    <div>Counter: {{ counter }}</div>
    <button @click="clickHandlerUp">+1</button>
    <button @click="clickHandlerDown">-1</button>
    <button @click="clickHandlerReset">back to zero</button>
  </div>
  <TheCheckbox />
  <CheckBoxWithCounter />
</template>

<script>
import TheCheckbox from './components/TheCheckbox.vue'
import CheckBoxWithCounter from './components/CheckBoxWithCounter.vue'

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
  },
  components: {
    TheCheckbox,
    CheckBoxWithCounter
  }
}
</script>

<style scoped></style>
