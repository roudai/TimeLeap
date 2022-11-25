<template>
  <div class="artist">
    <nuxt-link to="/#main_area">
      <figure class="image is-2by3">
        <img :src="imagePath()" :alt="name" />
      </figure>
      <div class="box has-text-centered">
        <div class="is-size-4">{{ name }}</div>
        <div>担当カラー：{{ color }}</div>
      </div>
    </nuxt-link>
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
