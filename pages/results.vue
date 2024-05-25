<template>
  <div>
    <h1>Results</h1>
    <p><nuxt-link to="/">Start</nuxt-link></p>
    <div class="results">
      <h2>{{ testStore.testData.name }}</h2>
      <div v-for="(question, index) in results" :key="index">
        <div class="frame">
          <img :src="question.image1.src" :alt="question.image1.label" :isChosen="question.answer === question.image1.label">
        </div>
        <div class="frame">
          <img :src="question.image2.src" :alt="question.image2.label" :isChosen="question.answer === question.image2.label">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useTestStore } from '@/stores/testStore';
const testStore = useTestStore();
const results = testStore.testData.questions;


</script>

<style lang="scss" scoped>
.results div {
  display: flex;
  width: 100%;
}

img { 
  object-fit: cover;
  object-position: center center;
  opacity: .25;
}

img[isChosen="true"] {
  opacity: 1;
}
</style>
