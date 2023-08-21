<template>
  <div class="ComponentContainer">
    <h3>Parent with Input Field</h3>
    <input type="text" @input="inputHandler" />

    <ChildWithDisplay :displayText="inputValue" />
  </div>
</template>

<script>
import ChildWithDisplay from './ChildWithDisplay.vue'
export default {
  components: {
    ChildWithDisplay
  },
  data() {
    return {
      inputValue: ''
    }
  },
  methods : {
    inputHandler(event) {
      this.inputValue = event.target.value
    }
  }
}
</script>

<style scoped></style>
