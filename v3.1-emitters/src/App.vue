<template>
  <h1>V3.1 Emitters</h1>
  <div class="ComponentContainer">

    <!-- Displaying the value of `counter` from the component's data -->
    <div>{{ counter }}</div>

    <!-- Using the `MyButton` component. When `somebodyJustClickedTheButton` event is emitted from `MyButton`, the `handleIt` method is called -->
    <MyButton @somebodyJustClickedTheButton="handleIt" />

  </div>

  <!-- Using another component `MyVariableButtonContainer` without any custom handling for its events (inside the App component) -->
  <MyVariableButtonContainer />
</template>

<script>
// Importing other Vue components to use within this component
import MyButton from './components/MyButton.vue'
import MyVariableButtonContainer from './components/VariableButtons/MyVariableButtonContainer.vue'

export default {
  // Declaring the components that are used in this component's template
  components: {
    MyButton,
    MyVariableButtonContainer
  },
  // `data` is a function that returns the reactive data object for the component
  data() {
    return {
      // `counter` is a reactive property which changes will be reflected in the template
      counter: 0
    }
  },
  methods: {
    // This method will be called when the `somebodyJustClickedTheButton` event is emitted by the `MyButton` component
    handleIt() {
      this.counter += 1
    }
  }
}
</script>

<style scoped></style>
