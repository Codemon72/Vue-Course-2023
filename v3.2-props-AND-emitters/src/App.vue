<template>
  <div class="ComponentContainer">
    <h3>App Component</h3>
    <DisplayCounter :valueToShow="counter" />
    <ButtonBox @oneOfTheButtonsWasClicked="handleIt" />
  </div>
</template>

<script>
import DisplayCounter from './components/DisplayCounter.vue'
import ButtonBox from './components/ButtonBox.vue'

export default {
  components: {
    DisplayCounter,
    ButtonBox
  },
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    handleIt(value) {
      console.log(value)
      this.counter += value
    }
  }
}
</script>

<style scoped></style>
