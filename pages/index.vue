<template>
  <div>
    <figure class="image is-3by2">
      <img src="~assets/top.webp" alt="タイムリープアーティスト写真" />
    </figure>

    <div class="main-contents m-3">
      <div class="columns is-variable is-1-mobile is-mobile">
        <div class="column"></div>
        <card title="Music" icon="music-box-multiple" url="https://linkco.re/uRn3hSfu?lang=ja"></card>
        <card title="Twitter" icon="twitter" url="https://twitter.com/timeleaaap"></card>
        <card title="YouTube" icon="youtube" url="https://www.youtube.com/channel/UC0uT6Qi6sYX0RLOWwKcK0LA"></card>
        <div class="column"></div>
      </div>

      <div class="columns is-variable is-1-mobile is-mobile">
        <div class="column"></div>
        <card-name name="あんず" image="anzu_icon" to="anzu"></card-name>
        <card-name name="おわり" image="owari_icon" to="owari"></card-name>
        <div class="column"></div>
      </div>

      <div class="columns is-variable is-1-mobile is-mobile">
        <div class="column"></div>
        <card title="lit.link" icon="link-plus" url="https://lit.link/httpsjiyuuujikancom"> </card>
        <card title="SHOWROOM" icon="filmstrip" url="https://www.showroom-live.com/r/827a36608516"></card>
        <card title="Base" icon="cart" url="https://jiyuuujikan.base.shop"> </card>
        <div class="column"></div>
      </div>

      <!-- <figure class="image m-3">
        <img src="~assets/audition.webp" alt="オーディション" />
      </figure>

      <div class="card-image has-text-centered mb-3">
        <h5>公式LINE</h5>
        <figure class="image is-96x96 is-inline-block">
          <img src="~assets/line.webp" alt="LINE" />
        </figure>
      </div> -->

      <div class="google-cal has-text-centered">
        <iframe
          src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Asia%2FTokyo&showTitle=0&showNav=1&showPrint=0&showCalendars=0&showTz=0&showDate=1&src=aml5dXV1amlrYW4yMDIyQGdtYWlsLmNvbQ&color=%23A79B8E"
          title="タイムリープスケジュール"
          width="1000"
          height="600"
          frameborder="0"
          scrolling="no"
        ></iframe>
      </div>

      <div class="has-text-centered m-3">
        <button class="button is-primary is-outlined is-medium">
          <b-icon icon="email" size="is-medium" type="is-primary" />
          <Mailto mail="info@jiyuuujikan.com">Contact</Mailto>
        </button>
      </div>
    </div>
  </div>
</template>

<script></script>

<style>
.main-contents {
  position: relative;
  top: -50px;
}

.google-cal iframe {
  width: 100%;
  max-width: 1000px;
  height: 400px;
}

@media (min-width: 750px) {
  .google-cal iframe {
    height: 600px;
  }
}
</style>
