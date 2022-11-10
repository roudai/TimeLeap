<template>
  <div>
    <div class="columns">
      <img src="~assets/top.webp" alt="タイムリープ" />
    </div>

    <div class="main-contents">
      <div class="columns is-variable is-1-mobile is-mobile">
        <div class="column is-0-mobile"></div>
        <card title="Music" icon="music-box-multiple" url="https://linkco.re/uRn3hSfu?lang=ja"></card>
        <card title="Twitter" icon="twitter" url="https://twitter.com/timeleaaap"></card>
        <card title="YouTube" icon="youtube" url="https://www.youtube.com/channel/UC0uT6Qi6sYX0RLOWwKcK0LA"></card>
        <div class="column is-0-mobile"></div>
      </div>

      <div class="columns is-variable is-1-mobile is-mobile">
        <card-name name="あんず" image="anzu_icon" to="anzu"></card-name>
        <card-name name="るな" image="runa_icon" to="runa"></card-name>
        <card-name name="ゆり" image="yuri_icon" to="yuri"></card-name>
        <card-name name="おわり" image="owari_icon" to="owari"></card-name>
      </div>

      <div class="columns is-variable is-1-mobile is-mobile">
        <div class="column is-0-mobile"></div>
        <card title="lit.link" icon="link-plus" url="https://lit.link/httpsjiyuuujikancom"> </card>
        <card title="SHOWROOM" icon="filmstrip" url="https://www.showroom-live.com/r/827a36608516"></card>
        <card title="Base" icon="cart" url="https://jiyuuujikan.base.shop"> </card>
        <div class="column is-0-mobile"></div>
      </div>

      <div class="columns is-hidden-touch is-centered">
        <iframe
          src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Asia%2FTokyo&showTitle=0&showNav=1&showPrint=0&showCalendars=0&showTz=0&showDate=1&src=aml5dXV1amlrYW4yMDIyQGdtYWlsLmNvbQ&color=%23A79B8E"
          width="1000"
          height="800"
          frameborder="0"
          scrolling="no"
        ></iframe>
      </div>

      <div class="columns is-hidden-desktop is-centered">
        <div class="is-8 is-offset-2">
          <iframe
            src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Asia%2FTokyo&showTitle=0&showNav=1&showPrint=0&showCalendars=0&showTz=0&showDate=1&showTabs=0&mode=AGENDA&src=aml5dXV1amlrYW4yMDIyQGdtYWlsLmNvbQ&color=%23A79B8E"
            width="375"
            height="400"
          ></iframe>
        </div>
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
