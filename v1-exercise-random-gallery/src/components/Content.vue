<template>
  <div class="content">
    <!-- Rendering a Card component for each entry in the 'cards' array -->
    <Card v-for="(card, index) in cards" :key="index" :imageURL="card.imageURL" :name="card.name" />
  </div>
</template>

<script>
// Import the 'Card' component to use it in this component
import Card from './Card.vue';

// Import the 'fetchRandomImage' function from your utility file
import { fetchRandomImage } from './UnsplashService'; 

export default {
// Register the 'Card' component to be used in this component
  components: {
    Card, 
  },

  // Data properties store and manage the component's state
  data() {
    return {
      cards: [], // Initialize an empty array to store card data
    }
  },

  // The 'created' lifecycle hook runs when the component is created
  async created() {
    // Initialize an array of names for the cards
    const names = ['Charlie', 'Alex', 'Jackie', 'Jordan'];

    // Iterate through the 'names' array to create card data
    for (const name of names) {
      // Await the result of the 'fetchRandomImage' function
      const imageURL = await fetchRandomImage();
      // Push a new card object with 'name' and 'imageURL' properties into the 'cards' array
      this.cards.push({ name, imageURL });
    }
  },
}
</script>

<style scoped>
.content {
  display: flex;
  justify-content: space-around;
}
</style>
