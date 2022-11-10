<template>
  <div class="column">
    <div class="card">
      <a :href="url">
        <div class="card-content">
          <div class="content has-text-centered">
            <b-icon :icon="icon" size="is-large" type="is-primary" />
          </div>
        </div>
        <footer class="card-footer">
          <div class="card-footer-item">
            <span>
              {{ title }}
            </span>
          </div>
        </footer>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BuefyCard',
  props: {
    title: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
}
</script>
