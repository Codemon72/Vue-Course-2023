<template>
  <div class="ComponentContainer">
    <h3>Input Value displayed in div in one Component</h3>
    <input type="text" @input="inputHandler" />
    <div>{{ inputValue }}</div>
  </div>

  <ConditionalDisplay />
  <ParentWithInput />
</template>

<script>
import ConditionalDisplay from './components/ConditionalDisplay.vue'
import ParentWithInput from './components/InputWithDisplayIn2Components/ParentWithInput.vue'

export default {
  data() {
    return {
      inputValue: ''
    }
  },
  methods: {
    inputHandler(event) {
      this.inputValue = event.target.value
    }
  },
  components: {
    ConditionalDisplay,
    ParentWithInput
  }
}
</script>

<style scoped></style>
