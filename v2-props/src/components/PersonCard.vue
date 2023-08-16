<template>
  <div class="card">
    <h3>{{ name }}</h3>
    <p><span>Profession:</span> {{ profession }}</p>
  </div>
</template>

<script>
export default {
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
