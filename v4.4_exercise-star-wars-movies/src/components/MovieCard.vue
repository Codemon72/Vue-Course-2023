<template>
  <div class="movie-card">
    <div>
      <span class="episode">Episode </span>
      <span class="episode-number">{{ convertToRoman(movieObject.episode_id) }}</span>
    </div>
    <div class="title">{{ movieObject.title }}</div>
    <button @click="selectClickHandler">SELECT</button>
  </div>
</template>

<script>
export default {
  props: {
    movieObject: {
      type: Object,
      required: true
    }
  },
  emits: ['movieSelect'],
  methods: {
    selectClickHandler() {
      this.$emit('movieSelect', this.movieObject)
    },
    convertToRoman(arabicNumeral) {
      const num = parseInt(arabicNumeral, 10)
      if (!isNaN(num)) {
        return this.toRoman(num)
      } else {
        return ''
      }
    },
    toRoman(num) {
      const romanNumerals = [
        { value: 1000, numeral: 'M' },
        { value: 900, numeral: 'CM' },
        { value: 500, numeral: 'D' },
        { value: 400, numeral: 'CD' },
        { value: 100, numeral: 'C' },
        { value: 90, numeral: 'XC' },
        { value: 50, numeral: 'L' },
        { value: 40, numeral: 'XL' },
        { value: 10, numeral: 'X' },
        { value: 9, numeral: 'IX' },
        { value: 5, numeral: 'V' },
        { value: 4, numeral: 'IV' },
        { value: 1, numeral: 'I' }
      ]

      let result = ''
      for (const numeralData of romanNumerals) {
        while (num >= numeralData.value) {
          result += numeralData.numeral
          num -= numeralData.value
        }
      }
      return result
    }
  }
}
</script>

<style scoped>
.movie-card {
  display: flex;
  flex-direction: column;
  width: 130px;
  min-height: 50px;
  background-color: white;
  padding: 1rem;
  border-radius: 6px;
}

.episode {
  font-weight: bold;
  font-size: 20px;
}
.episode-number {
  font-weight: bold;
  font-size: 25px;
}
.title {
  font-weight: bold;
  font-size: 20px;
  margin: 1rem 0;
}

button {
  background-color: lightseagreen;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s ease;
  margin-top: auto;
}

button:hover {
  background-color: teal;
}
</style>
