<template>
  <div class="card">
    <h3>{{ movie.title }}</h3>
    <b>Episode: {{ movie.episode_id }}</b> <br /><br />
    <div v-if="showMore">
      <div v-html="movie.opening_crawl"></div>
      <span @click="toggleShowMore" class="show-more">Show less</span>
    </div>
    <div v-else>
      <div class="fade-out" v-html="shortText"></div>
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
      showMore: false
    }
  },
  computed: {
    shortText() {
      const words = this.movie.opening_crawl.split(' ')
      return words.slice(0, 50).join(' ') + '...'
    }
  },
  methods: {
    toggleShowMore() {
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
