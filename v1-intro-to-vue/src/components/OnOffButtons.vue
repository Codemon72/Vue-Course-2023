<template>
    <button>ON</button>
    <button>OFF</button>
</template>

<style scoped>
button {
  background-color: salmon;
  padding: 10px 20px;
  border: dashed 5px;
  border-radius: 20px;
  box-shadow: 10px 10px 10px aliceblue;
} 
button:active {
  transform: translate(5px 5px);
  box-shadow: none;
}
</style>