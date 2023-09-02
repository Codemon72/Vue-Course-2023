<template>
  <header>
    <nav>
      <RouterLink class="nav-item" to="/">Home</RouterLink>
      <!-- <RouterLink class="nav-item" to="/details">Details</RouterLink> -->
    </nav>
  </header>
</template>

<script></script>

<style scoped>
header {
  padding: 2rem;
  background-color: #fff;
}
.nav-item {
  padding: 1rem;
  background-color: teal;
  color: white;
  border-radius: 1rem;
  width: 2rem;
  text-decoration: none; /* Remove the underline */
}
a {
  
  color: black; /* Change the color to black */
}
</style>
