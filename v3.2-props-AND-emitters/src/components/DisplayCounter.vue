<template>
  <div class="ComponentContainer">
    <h4>DisplayCounter Component</h4>
    <div>{{ valueToShow }}</div>
  </div>
</template>

<script>
export default {
  props: {
    valueToShow: { type: Number, require: true }
  }
}
</script>

<style scoped></style>
