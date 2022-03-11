<template>
  <ul class="category-page">
    <li
      :key="product.productId"
      v-for="product in products"
    >
      <ProductCard :product="product" />
    </li>
  </ul>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import { Product } from '@app/contracts/models'
  import productsDataset from '@app/assets/json/products.json'
  import ProductCard from '@app/components/molecules/ProductCard'

  export default defineComponent({
    name: 'CategoryPage',
    components: {
      ProductCard,
    },
    setup() {

      const products = ref<Product[]>(productsDataset)

      return {
        products,
      }
    },
  })
</script>

<style lang="scss">
  .category-page {
    gap: 32px;
    display: grid;
    color: $vue-grey;
    padding: 32px 128px;
    grid-template-columns: repeat(4, 1fr);
  }
</style>
