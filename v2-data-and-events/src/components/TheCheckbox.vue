<template>
  <div class="ComponentContainer">
    <h3>The Checkbox Component</h3>
    <input type="checkbox" v-model="isChecked"/>
    <div>The checkbox is On: {{ isChecked }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isChecked: false
    }
  }
}
</script>

<style scoped>

</style>