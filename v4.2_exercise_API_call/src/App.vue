<template>
  <h1>Basic API Call</h1>
  <div v-if="isLoading">Loading...</div>
  <div v-else>
    <div class="flex">
      <MovieCard v-for="movie in movies" :movie="movie" />
    </div>
  </div>
</template>

<script>
import MovieCard from './components/MovieCard.vue'

export default {
  components: {
    MovieCard
  },
  data() {
    return {
      isLoading: true,
      movies: []
    }
  },
  async created() {
    const response = await fetch('https://swapi.dev/api/films')
    const result = await response.json()

    this.movies = result.results
    this.isLoading = false

    console.log(this.movies)
  }
}
</script>

<style scoped>
.flex {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>
