<template>
  <div class="ComponentContainer">
    <h3>SubmitButton Component</h3>
    <button :disabled="!enableButton">Submit</button>
  </div>
</template>

<script>
export default {
  props: {
    enableButton: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style scoped></style>
