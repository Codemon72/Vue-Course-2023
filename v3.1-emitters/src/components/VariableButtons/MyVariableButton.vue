<template>
  <div class="ComponentContainer">
    
    <!-- A button that displays the text from the `buttonText` prop. When clicked, it calls the `clickHandler` method -->
    <button @click="clickHandler">{{ buttonText }}</button>
  </div>
</template>

<script>
export default {
  // `props` are custom attributes you can register on a component. 
  // They let you pass data from a parent component down to a child component.
  props: {
    buttonText: {
      type: String,            // Specifies the type of the prop
      required: false,         // Specifies if the prop is mandatory. If true and not provided, Vue will show a warning
      default: 'This is a button'  // Default value if the prop isn't provided
    }
  },
  // `emits` is an array that lists all the custom events this component can send up to its parent
  emits: ['somebodyJustClickedTheButton'],

  // A method defined for the component. This is the function that gets called when the button is clicked
  methods: {
    clickHandler() {
      // `$emit` sends a custom event to the parent component.
      // Here, when the button is clicked, the event `somebodyJustClickedTheButton` is emitted to inform the parent component of the action
      this.$emit('somebodyJustClickedTheButton')
    }
  }
}
</script>

<style scoped></style>
