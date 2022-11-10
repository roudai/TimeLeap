<template>
  <div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand container column is-6">
        <a class="navbar-item" href="/">
          <img src="~assets/logo.webp" alt="Buefy" height="50" />
        </a>
      </div>
    </nav>

    <section class="main-content">
      <div class="container">
        <Nuxt />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' },
        },
        {
          title: 'Inspire',
          icon: 'lightbulb',
          to: { name: 'inspire' },
        },
      ],
    }
  },
}
</script>

<style>
.navbar-item {
  padding: 0;
}
.navbar-item img {
  max-height: 2.5em;
}
</style>
