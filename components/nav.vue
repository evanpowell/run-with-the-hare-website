<template>
  <div>
    <ul>
      <li v-for="navElement in nav.metafields" :key="navElement.id">
        <nuxt-link :to="navElement.value">{{ navElement.title }}</nuxt-link>
      </li>  
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    nav() {
      return this.$store.getters.getNav;
    },
  },
};
</script>

<style scoped>

</style>