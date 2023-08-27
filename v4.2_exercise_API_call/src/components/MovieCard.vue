<template>
  <div class="card">
    <h3>{{ movie.title }}</h3>
    <b>Episode: {{ movie.episode_id }}</b> <br /><br />
    <!-- If showMore is true, display the entire opening crawl -->
    <div v-if="showMore">
      <div v-html="movie.opening_crawl"></div>
      <!-- Clicking this will toggle the showMore value to false -->
      <span @click="toggleShowMore" class="show-more">Show less</span>
    </div>
    <!-- If showMore is false, display only the shortText -->
    <div v-else>
      <!-- Use v-html to render HTML content -->
      <div class="fade-out" v-html="shortText"></div>
      <!-- Clicking this will toggle the showMore value to true -->
      <span @click="toggleShowMore" class="show-more">Show more</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    movie: Object
  },
  data() {
    return {
      // This data property controls whether the entire opening crawl or only the shortText is displayed
      showMore: false
    }
  },
  computed: {
    shortText() {
      // Split the opening_crawl into an array of words
      const words = this.movie.opening_crawl.split(' ')
      // Return the first 50 words as a string, followed by '...'
      return words.slice(0, 50).join(' ') + '...'
    }
  },
  methods: {
    toggleShowMore() {
      // Toggle the value of showMore
      this.showMore = !this.showMore
    }
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
.fade-out {
  position: relative;
  overflow: hidden;
  max-height: 3.4em; /* adjust this value to control the number of visible lines */
}
.fade-out::after {
  content: "";
  display: block;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 2em;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));
}
.show-more {
  color: teal;
  text-decoration: underline;
  cursor: pointer;
}
</style>
