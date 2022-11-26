<template>
  <div class="artist">
    <nuxt-link to="/">
      <figure class="image is-2by3">
        <img :src="imagePath()" :alt="name" />
      </figure>
    </nuxt-link>
    <div class="box has-text-centered">
      <div class="is-size-4">{{ name }}</div>
      <div>カラー：{{ color }}</div>
      <div>
        Twitter : <a :href="twitterPath()">@{{ twitter }}</a>
      </div>
      <div>
        Instagram : <a :href="instagramPath()">{{ instagram }}</a>
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
