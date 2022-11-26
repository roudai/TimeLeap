<template>
  <div class="artist">
    <nuxt-link to="/">
      <figure class="image is-2by3">
        <img :src="imagePath()" :alt="name" />
      </figure>
    </nuxt-link>
    <div class="box has-text-centered">
      <div class="is-size-4">{{ name }}</div>
      <div>{{ color }}</div>
      <div>
        <img class="icon twitter" src="@/assets/twitter.png" alt="twitter" /><a :href="twitterPath()">@{{ twitter }}</a>
      </div>
      <div>
        <img class="icon instagram" src="@/assets/instagram.png" alt="twitter" />
        <a :href="instagramPath()">{{ instagram }}</a>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    twitter: {
      type: String,
      required: true,
    },
    instagram: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  methods: {
    imagePath() {
      return require(`@/assets/${this.image}.webp`)
    },
    twitterPath() {
      return 'https://twitter.com/' + `${this.twitter}`
    },
    instagramPath() {
      return 'https://www.instagram.com/' + `${this.instagram}`
    },
  },
}
</script>

<style>
.icon {
  height: auto;
  width: 1rem;
}
.twitter {
  margin-bottom: -0.1rem;
}
.instagram {
  margin-bottom: -0.2rem;
}
</style>
