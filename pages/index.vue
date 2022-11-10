<template>
  <section class="section">
    <div class="columns">
      <img src="~assets/artist-photo.jpg" alt="タイムリープ" />
    </div>

    <div class="columns is-mobile">
      <div class="column is-0-mobile"></div>
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
      <div class="column is-0-mobile"></div>
    </div>

    <div class="columns">
      <div class="column has-text-centered">Contact</div>
      <div class="column has-text-centered">SHOWROOM</div>
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
