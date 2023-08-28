<template>
  <div>
    <ul>
      <AmazingPerson v-for="person in amazingPeeps" :person="person" :key="person.name" />
    </ul>
  </div>
</template>

<script>
import AmazingPerson from './AmazingPerson.vue'

const amazingPeeps = [
  {
    name: 'Batman',
    role: 'Badass Vigilante',
    img_src: 'https://mixed-news.com/en/wp-content/uploads/2022/11/Batman-Arkham-VR-1200x675.jpg',
    description: 'He roams the streets of Gotham...'
  },
  {
    name: 'Boyan Slat',
    role: 'Badass Engineer',
    img_src: '/images/Boyan.jpg',
    description: 'Young dutch inventor and entrepreneur, CEO of Ocean Cleanup.'
  },
  {
    name: 'Alan Savory',
    role: 'Persistent Problem Solver',
    img_src: 'https://www.agriculture.com/thmb/eVOCUlnXnqIy2WJ0QbRu2k_LLGw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/allan-savory-9b13936838374bf4b6e23abae5eaca8c.jpg',
    description: 'Clifford Allan Redin Savory is a Zimbabwean livestock farmer and president of the Savory Institute. He originated holistic management and gave a very inspiring Ted Talk about it.'
  }
]

export default {
  components: {
    AmazingPerson
  },
  data() {
    return { amazingPeeps }
  }
}
</script>

<style scoped>
ul {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
}
</style>
