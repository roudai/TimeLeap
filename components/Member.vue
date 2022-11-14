<template>
  <div class="artist">
    <nuxt-link to="/">
      <figure class="image is-2by3">
        <img :src="imagePath()" :alt="name" />
      </figure>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'BuefyCard',
  props: {
    name: {
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
  },
}
</script>
