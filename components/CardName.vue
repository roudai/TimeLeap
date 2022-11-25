<template>
  <div class="column">
    <div class="card">
      <nuxt-link :to="to">
        <header class="card-header">
          <p class="card-header-title is-centered">{{ name }}</p>
        </header>
        <div class="card-image">
          <figure class="image is-1by1">
            <img :src="imagePath()" :alt="name" />
          </figure>
        </div>
      </nuxt-link>
    </div>
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
    color: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    to: {
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
