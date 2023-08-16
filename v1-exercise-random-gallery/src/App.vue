<template>
  <HeaderComponent />
  <Content />
  <FooterComponent />

</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import Content from './components/Content.vue'
import FooterComponent from './components/FooterComponent.vue'

export default {
  components: {
    HeaderComponent,
    Content,
    FooterComponent
  }
}

</script>

<style scoped>
main {
  display: flex;
}
</style>