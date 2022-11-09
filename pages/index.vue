<template>
  <section class="section">
    <div class="columns">
      <img src="~assets/artist-photo.jpg" alt="タイムリープ" />
    </div>

    <div class="columns is-mobile">
      <card title="Music" icon="github">
        <a href="https://linkco.re/uRn3hSfu?lang=ja">Music</a>
      </card>

      <card title="YouTube" icon="cellphone-link">
        <a href="https://www.youtube.com/channel/UC0uT6Qi6sYX0RLOWwKcK0LA"
          >YouTube</a
        >
      </card>

      <card title="Base" icon="alert-decagram">
        <a href="https://jiyuuujikan.base.shop/">Base</a>
      </card>
    </div>
  </section>
</template>

<script>
import Card from '~/components/Card'

export default {
  name: 'IndexPage',
  components: {
    Card,
  },
}
</script>
