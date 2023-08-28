<template>
  <div class="person">
    <div class="person_top">
      <img class="person_img" :src="person.img_src" alt="" />

      <div class="name_and_role">
        <div class="name">{{ person.name }}</div>
        <div class="role">{{ person.role }}</div>
      </div>
    </div>
    <div class="description">
      {{ person.description }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    person: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.person {
  padding: 1rem;
  box-shadow: 5px 5px 5px gray;
  width: 342px;
  border-radius: 6px;
}
.person_img {
  height: 7rem;
  width: 7rem;
  border-radius: 50%;
}
.name_and_role {
  margin-left: 1rem;
  font-weight: bold;
}
.person_top {
  display: flex;
  flex-wrap: wrap;
}
.name {
  font-size: large;
}
.role {
  font-size: medium;
  margin-top: 0.5rem;
}
.description {
  margin-top: 1rem;
}
</style>
