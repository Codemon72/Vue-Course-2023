<template>
  <div>
    <h1>V2 Props</h1>
    <div class="personCardContainer">
      <PersonCard name="Louise" profession="UFC Fighter" />
      <PersonCard name="Margaret" profession="Wizard" />
      <PersonCard name="Alfons" profession="Professional VIP" />
    </div>
  </div>
</template>

<script>
import PersonCard from './components/PersonCard.vue'

export default {
  components: {
    PersonCard
  }
}
</script>

<style scoped>
.personCardContainer {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}
</style>
