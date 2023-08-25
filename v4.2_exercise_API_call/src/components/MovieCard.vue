<template>
  <div class="card">
    <h3>{{ movie.title }}</h3>
    <bold>Episode: {{ movie.episode_id }}</bold> <br><br>
    <div>{{ movie.opening_crawl }}</div>

  </div>
</template>

<script>
  export default {
    props: {
      movie: Object
    }
    
  }
</script>

<style scoped>
.card {
  min-height: 100px;
  width: 250px;
  border-radius: 6px;
  border: 1px solid black;
  box-shadow: 5px 5px 10px gray;
  padding: 1rem;
}

</style>