<template>
  <section class="container">
    <div>
      <h1>Run with the Hare</h1>
      <h2>Home Page</h2>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    home() {
      return this.$store.getters.getPage('home');
    },
  },
};
</script>

<style>
</style>

