<!-- This template defines how the Card component will be displayed -->
<template>
  <div>
    <!-- Display an image with a source based on the 'imageURL' prop -->
    <img :src="imageURL" alt="Card Image">
    <!-- Display the 'name' prop as a text -->
    <div>{{ name }}</div>
  </div>
</template>

<script>
// Exporting the Card component
export default {
  // Props are used to pass data from parent components to child components
  props: ['imageURL', 'name'] // Declare the props that this component will receive
};
</script>

<!-- The 'scoped' attribute restricts styles to this component only -->
<style scoped>
div {
  border: 1px solid black;
  padding: 0.5rem; 
  margin: 0.5rem;
}
</style>
