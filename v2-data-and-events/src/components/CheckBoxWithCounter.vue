<template>
  <div class="ComponentContainer">
    <h3>Counter with Checkbox Component</h3>
    <!-- Checkbox to toggle between counters -->
    <div class="toggle">
      <input type="checkbox" v-model="useSecondCounter" id="useSecondCounter" />
      <label for="useSecondCounter">Use Second Counter</label>
    </div>

    <!-- Display both counters -->
    <div>
      Counter 1: <span class="value">{{ counter1 }}</span>
    </div>
    <div>
      Counter 2: <span class="value">{{ counter2 }}</span>
    </div>

    <!-- Buttons to manipulate the active counter -->
    <div>
      <button @click="increment">+1</button>
      <button @click="decrement">-1</button>
      <button @click="reset">back to zero</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      useSecondCounter: false, // State to determine which counter is active
      counter1: 0, // First internal counter
      counter2: 0 // Second internal counter
    }
  },
  methods: {
    increment() {
      if (this.useSecondCounter) {
        this.counter2 += 1
      } else {
        this.counter1 += 1
      }
    },
    decrement() {
      if (this.useSecondCounter) {
        this.counter2 -= 1
      } else {
        this.counter1 -= 1
      }
    },
    reset() {
      if (this.useSecondCounter) {
        this.counter2 = 0
      } else {
        this.counter1 = 0
      }
    }
  }
}
</script>

<style scoped>
.toggle {
  margin-bottom: 1rem;
}
</style>
