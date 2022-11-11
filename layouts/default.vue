<template>
  <div class="has-background-white-bis">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand container">
        <a class="navbar-item" href="/">
          <img src="~assets/logo.webp" alt="タイムリープ" height="50" />
        </a>
      </div>
    </nav>

    <div class="container">
      <Nuxt />
    </div>
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
.navbar-item img {
  max-height: 2.5em;
}
.artist {
  width: 80%;
  max-width: 500px;
  margin: auto;
  position: absolute;
  top: 50px;
  bottom: 50px;
  left: 0;
  right: 0;
}
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s;
}
.page-enter,
.page-leave-active {
  opacity: 0;
}
</style>
