<script setup>
import { useRouter } from 'vue-router'
import { useProductStore } from '@/stores/product'

const router = useRouter()
const productStore = useProductStore()

function visualizar(id) {
  router.push(`/produto/${id}`) // template strings
}
</script>

<template>
  <h1>Listagem de produtos</h1>
  <table>
    <thead>
      <tr>
        <th>Nome</th>
        <th>Preço</th>
        <th>Ações</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in productStore.products" :key="product.id">
        <td>{{ product.id }}</td>
        <td>{{ product.name }}</td>
        <td>{{ product.price }}</td>
        <td>
          <button @click="visualizar(product.id)">Ver</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>
