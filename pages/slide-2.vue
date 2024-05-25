<template>
  <div>
    <image-selector :question="question" />
    <test-nav url="/slide-3" />
  </div>
</template>

<script setup>
import { useTestStore } from '@/stores/testStore';
const { testData } = useTestStore();
const question = testData.questions[1];
</script>

<style scoped lang="scss">

</style>
