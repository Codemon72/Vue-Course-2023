<template>
  <h1>Password Check</h1>
  <div class="ComponentContainer">
    <h3>App Component</h3>
    <PasswordField @thePassWordChanged="handlePasswordChange" />
    <div class="adviseText">
      <div v-if="!passwordIsValid">password should have between 8 and 14 characters</div>
    </div>
    <SubmitButton :enableButton="passwordIsValid" />
  </div>
</template>

<script>
import PasswordField from './components/PasswordField.vue'
import SubmitButton from './components/SubmitButton.vue'

export default {
  components: {
    PasswordField,
    SubmitButton
  },
  data() {
    return {
      passwordIsValid: false
    }
  },
  methods: {
    handlePasswordChange(password) {
      if (password.length >= 8 && password.length <= 14) {
        this.passwordIsValid = true
      } else {
        this.passwordIsValid = false
      }
    }
  }
}
</script>

<style scoped>
.adviseText {
  min-height: 20px;
}
</style>
