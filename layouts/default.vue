<template>
  <div>
    <app-nav/>
    <div class="main">
      <nuxt/>
    </div>
  </div>
</template>

<script>
import AppNav from '~/components/nav.vue';

export default {
  components: {
    AppNav,
  },
  computed: {
    header() {
      return this.$store.getters.getHeader;
    }
  },
  head() {
    return {
      title: this.header.site_title,
      link: [
        { rel: 'icon', type: 'image/x-icon', href: this.header.favicon.url },
      ],
    };
  },
};
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 62.5%;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-size: 1.6rem;
}

.main {
  margin-top: 5rem;
}
</style>

