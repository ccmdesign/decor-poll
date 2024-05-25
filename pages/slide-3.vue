<template>
  <div>
    <image-selector :question="question" />
    <test-nav url="/" />
  </div>
</template>

<script setup>
import { useTestStore } from '@/stores/testStore';
const { testData } = useTestStore();
const question = testData.questions[2];
</script>

<style scoped lang="scss">

</style>
