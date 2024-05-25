<template>
  <div>
    <section class="image-selector">
      <button class="image-selector__image | unstyled" @click="logAlt(`${question.image1.label}`)">
        <img 
          :src="question.image1.src"
          :alt="question.image1.label">
      </button>
      <button class="image-selector__image | unstyled" @click="logAlt(`${question.image2.label}`)">
        <img 
          :src="question.image2.src"
          :alt="question.image2.label">
      </button>
    </section>
    <test-nav :url="question.next" />
  </div>
</template>

<script setup>
import { useTestStore } from '@/stores/testStore';
const { testData } = useTestStore();
const question = testData.question_1;


const logAlt = (altText) => {
  console.log(altText);
  testData.question_1.answer = altText;
  window.location.href = testData.question_1.next;
};
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
  
  img { 
    object-fit: cover;
    object-position: center center;
    min-height: 100%;
    min-width: 100%;
  }

}
</style>
