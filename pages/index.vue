<template>
  <div>
    <h1>Style Assessment - Index</h1>
    <input type="text" v-model="name">
    <test-nav url="/slide-1" label="Next"/>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useTestStore } from '@/stores/testStore';

const testStore = useTestStore();
const name = ref(testStore.testData.name);

// Watch for changes in the name and update the store accordingly
watch(name, (newName) => {
  testStore.testData.name = newName;
});
</script>

<style scoped lang="scss">

</style>
