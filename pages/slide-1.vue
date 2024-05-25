<template>
  <div>
    <section class="image-selector">
      <button class="image-selector__image | unstyled">
        <img src="https://images.unsplash.com/photo-1715967142234-547de15379c7?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
      </button>
      <button class="image-selector__image | unstyled">
        <img src="https://images.unsplash.com/photo-1715619044226-b693312ffb9b?q=80&w=3331&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
      </button>
    </section>
    <test-nav url="/" />
  </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
.unstyled {
  appearance: none;
  border: 0;
  padding: 0;
  margin: 0;
}

.image-selector {
  display: flex;
  flex-direction: column;
  height: calc(100svh - 60px);
}

.image-selector__image {
  flex: 1;
  overflow: hidden;

}
</style>
