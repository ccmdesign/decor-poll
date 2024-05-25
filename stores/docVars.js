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

export const useDocVarsStore = defineStore('docVars', () => {
  // Variables
  const qualificacoes = ref({
    clausula_1: {
      label: 'Pagamento à Vista',
      type: 'checkbox',
      value: true
    },
    nomeCompleto: {
      label: 'Nome Completo',
      type: 'text',
      value: 'Nome Completo',
    },
    email: {
      label: 'Email',
      type: 'text',
      value: 'Email',
    },
    telefone: {
      label: 'Telefone',
      type: 'text',
      value: 'Telefone',
    },
    endereco: {
      label: 'Endereço',
      type: 'text',
      value: 'Endereço',
    }
    
  })

  // Functions
  

  return { 
    qualificacoes
  }
})
