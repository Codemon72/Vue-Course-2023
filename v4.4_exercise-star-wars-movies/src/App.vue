<template>
  <section class="main-section">
    <div>
      <MovieList @movieSelect="movieSelectHandler" />
    </div>
    <div>
      <MovieDetails :movieObject="selectedMovie" />
    </div>
  </section>
</template>

<script>
import MovieList from './components/MovieList.vue'
import MovieDetails from './components/MovieDetails.vue'

export default {
  components: {
    MovieList,
    MovieDetails
  },
  data() {
    return {
      selectedMovie: undefined
    }
  },
  methods: {
    movieSelectHandler(movieObject) {
      this.selectedMovie = movieObject
    }
  }
}
</script>

<style scoped>
.main-section {
  display: flex;
  gap: 2rem;
  margin: 2rem auto;
  width: 1050px;
}

.main-section > div {
  background-color: lightseagreen;
  width: 500px;
  min-height: 600px;
  padding: 2rem;
  border-radius: 1rem;
}
</style>
