<template>
  <div class="ComponentContainer">
    <h4>DisplayCounter Component</h4>

    <!-- Displays the value of "valueToShow" prop -->
    <div>{{ valueToShow }}</div>
  </div>
</template>

<script>
export default {
  // "props" define the custom attributes our component accepts 
  props: {
    // "valueToShow" is a prop of type Number and it's required
    valueToShow: {
      type: Number,
      required: true
    }
  }
}
</script>

<style scoped></style>
