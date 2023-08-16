<template>
  <div class="card">
    <!-- Display the 'name' prop passed into this component. -->
    <h3>{{ name }}</h3>

    <!-- Display the 'profession' prop passed into this component. -->
    <p><b>Profession:</b> {{ profession }}</p>
  </div>
</template>

<script>
export default {
  // 'props' allows data to be passed into this component from a parent component.
  // In this case, 'name' and 'profession' data can be passed in when this component is used.
  props: ['name', 'profession']
}
</script>

<style scoped>
.card {
  width: 200px;
  min-height: 150px;
  background-color: blanchedalmond;
  box-shadow: 10px 10px 10px darkgray;
  padding: 1rem;
}
</style>
