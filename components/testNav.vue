<template>
  <nav>
    <nuxt-link :to="url">
      <base-button>{{ label }}</base-button>
    </nuxt-link>
  </nav>
</template>

<script setup>
const props = defineProps({
  url: String,
  label: {
    type: String,
    default: 'Skip'
  }
});

</script>

<style lang="scss" scoped>
nav {
  padding: var(--s-1);
  text-align: center;
}
</style>
