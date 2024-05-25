<template>
  <div>
    <image-selector :question="question" />
    <test-nav :url="question.next" />
  </div>
</template>

<script setup>
import { useTestStore } from '@/stores/testStore';
const { testData } = useTestStore();
const question = testData.questions[0];

</script>

<style scoped lang="scss">

</style>
