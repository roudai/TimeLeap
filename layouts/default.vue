<template>
  <div class="has-background-white-bis main-content columns ml-0 mr-0">
    <div class="container column is-8 pl-0 pr-0">
      <nav-bar></nav-bar>
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
  width: 70%;
  max-width: 500px;
  margin: auto;
  position: absolute;
  top: 30px;
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
