<template>
  <div class="ComponentContainer">
    <h3>Child with Display</h3>
    <div v-if="displayText">{{ displayText }}</div>
    <div v-else>Please write something here</div>
  </div>
</template>

<script>
export default {
  // simple way to declare props for max 4 props
  // props: ['displayText']

  // the good way to declare props and best if nothing more is to declare than type: String
  // props: {
  //   displayText: String
  // }

  // or more sophisticated and best practice
  props: {
    displayText: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped></style>
