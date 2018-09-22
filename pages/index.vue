<template>
  <section class="container">
    <div>
      <h1>Run with the Hare</h1>
      <p>Welcome to our website! We are Run with the Hare, a traditional Irish music trio based out of Austin, Texas</p>
      <h3 style="color: orangered;">This site is currently under construction. Please check back later! :)</h3>
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

<style lang="scss" scoped>
  .container {
    text-align: center;
    margin-top: 5rem;
  }
</style>

