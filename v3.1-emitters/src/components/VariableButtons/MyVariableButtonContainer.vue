<template>
  <div class="ComponentContainer">
    <h3>ComponentContainer Component</h3>

    <!-- Displays the value of `counter` from the component's data -->
    <div>{{ counter }}</div>

    <!-- Uses the `MyVariableButton` component, passing the `buttonText` prop and listening for its custom event. -->
    <MyVariableButton buttonText="+1" @somebodyJustClickedTheButton="handleUp" />

    <!-- Similar to the above, but with different buttonText and event handling method -->
    <MyVariableButton buttonText="-1" @somebodyJustClickedTheButton="handleDown" />

    <!-- Another instance of the `MyVariableButton` component with the `reset` event handler -->
    <MyVariableButton buttonText="reset" @somebodyJustClickedTheButton="reset" />

    <!-- Here, we haven't provided a buttonText prop, so it will use whatever default is specified in `MyVariableButton` or display nothing. -->
    <MyVariableButton @somebodyJustClickedTheButton="alertButton" />
  </div>
</template>

<script>
// Importing the `MyVariableButton` component so it can be used within this component
import MyVariableButton from './MyVariableButton.vue'

export default {
  // Declaring which components are being used in this component's template
  components: {
    MyVariableButton
  },

  // `data` is a function that returns an object with properties that are reactive and can be used in the template.
  data() {
    return {
      // `counter` is a reactive property that will update in the template whenever it changes
      counter: 0
    }
  },

  methods: {
    // These methods define the actions to take when each button is clicked

    // Increment the counter
    handleUp() {
      this.counter += 1
    },

    // Decrement the counter
    handleDown() {
      this.counter -= 1
    },

    // Reset the counter to 0
    reset() {
      this.counter = 0
    },

    // Show an alert.
    alertButton() {
      alert('This is a Button! 👍')
    }
  }
}
</script>

<style scoped></style>
