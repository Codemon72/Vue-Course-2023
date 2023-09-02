<template>
  <main>
    <h1>Home!</h1>
    <h3>Choose a Pokemon:</h3>
    <!-- Display loading message if data is still loading -->
    <div v-if="isLoading">Loading...</div>
    <!-- Display list of pokemons if data has been loaded -->
    <div v-else>
      <div class="pokemon_list">
        <!-- For each pokemon in the 'pokemons' array, create a list item and a router link -->
        <!-- The 'to' attribute of the RouterLink is dynamically bound to the pokemon's name -->
        <RouterLink
          :key="pokemon.url"
          v-for="pokemon in pokemons"
          :to="`/details?name=${pokemon.name}`"
          class="list-item"
        >
          {{ capitalize(pokemon.name) }}
        </RouterLink>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      isLoading: true, // A boolean to keep track if data is still loading
      pokemons: [] // An array to store the list of pokemons
    }
  },
  async created() {
    const endpoint = `https://pokeapi.co/api/v2/pokemon`
    const response = await fetch(endpoint) // Fetch data from the API
    const result = await response.json() // Convert the response to JSON

    this.pokemons = result.results // Store the list of pokemons in the 'pokemons' data property
    this.isLoading = false // Set 'isLoading' to false as data has been loaded

    console.log(this.pokemons)
  },
  methods: {
    // A method to capitalize the first letter of a string
    capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1)
    }
  }
}
</script>

<style scoped>
.pokemon_list {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-height: 400px;
  gap: .5rem;

}
.list-item {
  list-style-type: none; /* Remove the dot */
  width: 200px;
  margin-left: 2rem;
  padding: 10px;
  background-color: #fff;
  box-shadow: 5px 5px 5px lightgray;
  border: 1px solid #ddd;
  margin-bottom: 5px;
  border-radius: 5px;
  font-weight: bold;
  font-size: 18px;
}
a {
  text-decoration: none; /* Remove the underline */
  color: black; /* Change the color to black */
}
a:active {
  color: red; /* Change the color when the link is clicked */
}
a:visited {
  color: teal; /* Change the color of visited links */
}
</style>
