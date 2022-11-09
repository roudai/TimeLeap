<template>
  <div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand container column">
        <a class="navbar-item" href="/">
          <img src="~assets/logo.jpg" alt="Buefy" height="50" />
        </a>

        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="menu"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="menu" class="navbar-menu">
        <div id="menu" class="navbar-menu container column">
          <div class="navbar-end">
            <a class="navbar-item m-5"
              ><nuxt-link to="/anzu">あんず</nuxt-link></a
            >
            <a class="navbar-item m-5"
              ><nuxt-link to="/runa">るな</nuxt-link></a
            >
            <a class="navbar-item m-5"
              ><nuxt-link to="/yuri">ゆり</nuxt-link></a
            >
            <a class="navbar-item m-5"
              ><nuxt-link to="/owari">おわり</nuxt-link></a
            >
          </div>
        </div>
      </div>
    </nav>

    <section class="main-content columns">
      <div class="container column is-10">
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
  max-height: 3em;
}
</style>
