<template>
  <div class="nav">
    <ul class="nav__list">
      <li class="nav__list-item" v-for="navElement in nav.metafields" :key="navElement.id">
        <nuxt-link class="nav__link" :to="navElement.value">{{ navElement.title }}</nuxt-link>
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
  height: $nav-height;
  background-color: $color-grey-light;
  font-size: 2.5rem;
  text-transform: uppercase;
  box-shadow: 0 2px 3px rgba($color-black, 0.2);

  &__list {
    position: absolute;
    right: 0;
    height: 100%;
    display: inline-flex;
    padding-right: 4rem;
  }

  &__list-item {
    display: block;
    height: 100%;

    &:not(:last-child) {
      padding-right: 2.5rem;
    }
  }

  &__link {
    color: $color-primary;
    text-decoration: none;
    height: 100%;
    display: flex;
    align-items: center;
    transition: .15s ease;
    backface-visibility: none;
  }

  &__list-item:hover &__link:not(.nuxt-link-exact-active) {
    transform: translateY(-2px);
    color: $color-primary-light;
  }
}

.nuxt-link-exact-active {
  font-weight: 700;
  
  &:hover {
    cursor: default;
  }
}
</style>
