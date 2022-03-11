<template>
  <div class="product-page">
    <div class="product-page__img-wrapper">
      <img
        class="product-page__img"
        src="../../assets/images/placeholder.png"
      >
    </div>
    <div class="product-page__content">
      <h1 class="product-page__name">
        {{ product.name }}
      </h1>
      <div class="product-page__ref">
        Ref:&nbsp;{{ product.ref }}
      </div>
      <div class="product-page__description">
        {{ product.description }}
      </div>
      <div class="product-page__price">
        {{ product.price }}&nbsp;€
      </div>
      <button class="product-page__cta">
        Acheter
      </button>
    </div>
  </div>
</template>

<script lang="ts">
  import { useRoute } from 'vue-router'
  import { Product } from '@app/contracts/models'
  import { defineComponent, ref } from 'vue'
  import productsDataset from '@app/assets/json/products.json'

  export default defineComponent({
    name: 'ProductPage',
    setup() {

      const route = useRoute()

      const product = ref<Product|null>(
        productsDataset.find((product: Product) => product.productId === +route.params.productId) ?? null,
      )

      return {
        product,
      }
    },
  })
</script>

<style lang="scss">
  .product-page {
    display: flex;
    color: $vue-grey;
    padding: 32px 128px;

    &__img-wrapper {
      width: 70%;
      height: 500px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &__img {
      width: 350px;
    }

    &__content {
      width: 30%;
      padding: 0 32px 32px;
    }

    &__name {
      font-size: 24px;
    }

    &__ref {
      margin-top: 16px;
    }

    &__description {
      margin-top: 32px;
    }

    &__price {
      font-size: 24px;
      font-weight: bold;
      margin-top: 32px;
    }

    &__cta {
      width: 100%;
      padding: 16px;
      font-size: 18px;
      cursor: pointer;
      margin-top: 16px;
      color: $color-white;
      background-color: $vue-grey;
      border: 1px solid $vue-grey;

      &:hover {
        color: $vue-grey;
        background-color: $color-white;
      }
    }
  }
</style>
