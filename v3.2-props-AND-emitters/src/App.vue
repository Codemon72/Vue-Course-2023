<template>
  <div class="ComponentContainer">
    <h3>App Component</h3>

    <!-- DisplayCounter component showing the current value of "counter" -->
    <!-- ":valueToShow" is a prop passed to the DisplayCounter component -->
    <DisplayCounter :valueToShow="counter" />

    <!-- ButtonBox component emits an event when any button inside it is clicked -->
    <!-- "@oneOfTheButtonsWasClicked" listens for that event and calls "handleIt" method -->
    <ButtonBox @oneOfTheButtonsWasClicked="handleIt" />
  </div>
</template>

<script>
import DisplayCounter from './components/DisplayCounter.vue'
import ButtonBox from './components/ButtonBox.vue'

export default {
  // Declaring the imported components so they can be used in the template
  components: {
    DisplayCounter,
    ButtonBox
  },

  // `data` function returns an object with reactive properties
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    // Method to handle the event emitted by the ButtonBox component
    // Adjusts the counter based on the emitted value
    handleIt(value) {
      // console.log(value)
      this.counter += value
    }
  }
}
</script>

<style scoped></style>
