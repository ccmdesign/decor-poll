import { defineStore } from 'pinia'

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application

// Example from PINIA documentation
// export const useCounterStore = defineStore('counter', () => {
//   const count = ref(0)
//   const name = ref('Eduardo')
//   const doubleCount = computed(() => count.value * 2)
//   function increment() {
//     count.value++
//   }

//   return { count, name, doubleCount, increment }
// })

export const useTestStore = defineStore('testStore', () => {
  // Variables
  const testData = ref({
    "question_1": {
      image1: {
        src: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=3243&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        label: 'Cat'
      },
      image2: {
        src: 'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?q=80&w=3388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        label: 'Dog'
      },
      answer: '',
      next: '/slide-2'
    },
    question_2: {
      image1: {
        src: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?q=80&w=2877&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        label: 'Chicken'
      },
      image2: {
        src: 'https://images.unsplash.com/photo-1559253664-ca249d4608c6?q=80&w=2937&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        label: 'Frog'
      },
      answer: '',
      next: '/slide-3'
    },
    question_3: {
      image1: {
        src: 'https://images.unsplash.com/photo-1575550959106-5a7defe28b56?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        label: 'Lion'
      },
      image2: {
        src: 'https://images.unsplash.com/photo-1543946207-39bd91e70ca7?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        label: 'Elk'
      },
      answer: '',
      next: '/'
    },
  })

  // Functions
  

  return { 
    testData
  }
})
