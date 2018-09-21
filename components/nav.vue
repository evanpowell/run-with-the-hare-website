<template>
  <div class="nav">
    <ul class="nav__list">
      <li class="nav__list-item" v-for="navElement in nav.metafields" :key="navElement.id">
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

<style lang="scss">
@import '~/assets/styles/variables.scss';

.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 5rem;
  background-color: $color-primary;

  &__list {
    display: inline-flex;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    padding-right: 5rem;
  }

  &__list-item {
    display: block;

    &:not(:last-child) {
      padding-right: 1rem;
    }
    
    & a {
      color: $color-white;
      text-decoration: none;
    }
  }
}
</style>
