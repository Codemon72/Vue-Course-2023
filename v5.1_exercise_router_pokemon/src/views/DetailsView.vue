<template>
  <h2 v-if="isLoading" class="isLoading">Loading...</h2>
  <main v-else>
    <div class="component_card">
      <h2>{{ pokemon.name.toUpperCase() }}</h2>
      <img
        :src="pokemon.sprites.other['official-artwork'].front_default"
        :alt="pokemon.name"
        class="image pokemon_detail"
      />
      <div class="pokemon_detail">
        <strong>Weight: </strong><span>{{ pokemon.weight }} kg</span>
      </div>
      <div class="pokemon_detail">
        <strong>Abilities:</strong>
        <br />
        {{ pokemon.abilities.map((ability) => ability.ability.name).join(', ') }}
      </div>
      <div v-if="pokemon.held_items && pokemon.held_items.length > 0" class="pokemon_detail">
        <strong>Held Items:</strong>
        <br />
        {{ pokemon.held_items.map(item => item.item.name).join(', ') }}
      </div>
      <div class="pokemon_detail">
        <strong>Type:</strong>
        <br />
        {{ pokemon.types.map((type) => type.type.name).join(', ') }}
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      isLoading: true,
      pokemon: {} // The fetched pokemon data will be stored here
    }
  },
  async created() {
    //  `this.$route` is an object that contains information about the current route. This object includes several properties such as `path`, `params`, `query`, etc.
    // For example, if the URL is http://example.com/?name=pikachu, then this.$route.query will be { name: 'pikachu' }.

    const pokemonName = this.$route.query.name // Get the pokemon name from the URL query string 'name'
    const endpoint = `https://pokeapi.co/api/v2/pokemon/${pokemonName}` // Construct the API endpoint

    const response = await fetch(endpoint) // Fetch the data from the API
    const result = await response.json() // Convert the response to JSON

    this.pokemon = result // Store the fetched data
    this.isLoading = false // Set the loading flag to false
  }
}
</script>

<style scoped>
.isLoading {
  margin: 2rem;
}
.image {
  width: 250px;
}
.component_card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 5px 5px 10px gray;
  background-color: #fff;
  max-width: 400px;
  margin: 0 auto;
}
.pokemon_detail {
  margin-bottom: 1rem;
}
</style>
