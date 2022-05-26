<template>
  <RouterLink
    class="product-card"
    :to="{ name: ROUTES.PRODUCT, params: { productId: product.productId } }"
  >
    <div class="product-card__img-wrapper">
      <img
        class="product-card__img"
        src="../../../assets/images/placeholder.png"
        :alt="product.name"
      >
    </div>
    <div class="product-card__content">
      <h1 class="product-card__name">
        {{ product.name }}
      </h1>
      <div class="product-card__description">
        {{ product.description }}
      </div>
      <div class="product-card__price">
        {{ product.price }}&nbsp;€
      </div>
    </div>
  </RouterLink>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { ROUTES } from '@app/contracts/types'

  export default defineComponent({
    name: 'ProductCard',
    props: {
      product: { type: Object, required: true },
    },
    setup() {

      return {
        ROUTES,
      }
    },
  })
</script>

<style lang="scss">
  .product-card {
    $self: &;

    display: flex;
    cursor: pointer;
    color: $vue-grey;
    text-decoration: none;
    flex-direction: column;
    border: 1px solid lightgrey;
    transition: box-shadow linear 0.2s;

    &:hover {
      box-shadow: 0 0 16px rgba($vue-grey, 0.2);

      #{ $self }__name {
        color: $vue-green;
      }
    }

    &__img-wrapper {
      height: 300px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &__img {
      width: 150px;
    }

    &__content {
      padding: 0 16px 32px;
    }

    &__name,
    &__price,
    &__description {
      margin-top: 16px;
      text-align: center;
    }

    &__name {
      font-weight: bold;
    }

    &__price {
      margin-top: 32px;
      font-weight: bold;
    }
  }
</style>
