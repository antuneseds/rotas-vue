import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', () => {
  const products = ref([
    { id: 1, name: 'Salgado Frito', price: 4.5, qty: 100 },
    { id: 2, name: 'Pão de Batata', price: 5.5, qty: 50 },
    { id: 3, name: 'Pão de Queijo', price: 2, qty: 70 },
    { id: 4, name: 'Bolo de chocolate', price: 5, qty: 60 }
  ])
  return { products }
})
