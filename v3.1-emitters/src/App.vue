<template>
  <div class="ComponentContainer">
    <div>{{ counter }}</div>

    <UpButton @somebodyJustClickedTheButton="handleIt" />
  </div>
</template>

<script>
import UpButton from './components/UpButton.vue'
export default {
  components: {
    UpButton
  },
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    handleIt() {
      this.counter += 1
    }
  }
}
</script>

<style scoped></style>
