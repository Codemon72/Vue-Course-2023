<template>
  <div class="ComponentContainer">
    <h3>PasswordField Component</h3>
    <input type="password" @input="passwordChange" v-model="password" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      password: ''
    }
  },
  emits: ['thePassWordChanged'],
  methods: {
    passwordChange() {
      this.$emit('thePassWordChanged', this.password)
      // also possible without using 'v-model':
      // this.password = event.target.value
      // this.$emit('thePassWordChanged', event.target.value)
    }
  }
}
</script>

<style scoped></style>
