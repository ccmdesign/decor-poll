<template>
  <section class="image-selector" :question="question">
    <button class="image-selector__image | unstyled" @click="logAlt(question.image1.label)">
      <img 
        :src="question.image1.src"
        :alt="question.image1.label">
    </button>
    <button class="image-selector__image | unstyled" @click="logAlt(question.image2.label)">
      <img 
        :src="question.image2.src"
        :alt="question.image2.label">
    </button>
  </section>
</template>

<script setup>
import { defineProps } from 'vue'
import { useRouter } from 'vue-router';
import { useTestStore } from '@/stores/testStore';

const testStore = useTestStore();
const router = useRouter();
const props = defineProps({
  question: Object
});

const logAlt = (altText) => {
  console.log(altText);
  testStore.setAnswer(props.question.id, altText);
  router.push(props.question.next);
};

</script>

<style lang="scss" scoped>
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
