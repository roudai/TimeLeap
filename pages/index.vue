<template>
  <div>
    <div class="columns">
      <img src="~assets/top.webp" alt="タイムリープ" />
    </div>

    <div class="main-contents">
      <div class="columns is-variable is-1-mobile is-mobile">
        <div class="column is-0-mobile"></div>
        <card title="Music" icon="music-box-multiple" url="https://linkco.re/uRn3hSfu?lang=ja"> </card>
        <card title="Twitter" icon="twitter" url="https://twitter.com/timeleaaap"> </card>
        <card title="YouTube" icon="youtube" url="https://www.youtube.com/channel/UC0uT6Qi6sYX0RLOWwKcK0LA"></card>
        <div class="column is-0-mobile"></div>
      </div>

      <div class="columns is-variable is-1-mobile is-mobile">
        <div class="column is-0-mobile"></div>
        <card title="lit.link" icon="link-plus" url="https://lit.link/httpsjiyuuujikancom"> </card>
        <card title="SHOWROOM" icon="filmstrip" url="https://www.showroom-live.com/r/827a36608516"></card>
        <card title="Base" icon="cart" url="https://jiyuuujikan.base.shop"> </card>
        <div class="column is-0-mobile"></div>
      </div>
    </div>
  </div>
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

<style>
.main-contents {
  position: relative;
  top: -50px;
}
</style>
