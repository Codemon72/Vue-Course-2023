<template>
  <div class="ComponentContainer">
    <h3>Child with Display</h3>
    <div v-if="displayText">{{ displayText }}</div>
    <div v-else>Please write something here</div>
  </div>
</template>

<script>
export default {
  props: ['displayText']
}
</script>

<style scoped></style>
