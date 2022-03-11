<template>
  <nav class="header">
    <div class="header__brand" />
    <div class="header__nav">
      <RouterLink
        class="header__link"
        :to="{ name: ROUTES.HOME }"
      >
        Home
      </RouterLink>
      <RouterLink
        class="header__link"
        :to="{ name: ROUTES.CATEGORY }"
      >
        Category
      </RouterLink>
    </div>
    <div class="header__profile" />
  </nav>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { ROUTES } from '@app/contracts/types'

  export default defineComponent({
    name: 'Header',
    components: {
    },
    setup() {
      return {
        ROUTES,
      }
    },
  })
</script>

<style lang="scss">
  $padding-header: 32px;

  .header {
    display: flex;
    position: relative;
    align-items: center;
    padding: $padding-header;

    &::after {
      content: "";
      bottom: 0;
      left: 128px;
      height: 1px;
      position: absolute;
      background-color: grey;
      width: calc(100% - 256px);
    }

    &__brand,
    &__profile {
      width: $padding-header;
      height: $padding-header;
      background-color: lightgrey;
    }

    &__brand {
      border-radius: 2px;
    }

    &__nav {
      margin-left: 48px;
    }

    &__link {
      margin-left: 16px;
      text-decoration: none;

      &:visited {
        color: $vue-grey;
      }

      &:hover {
        color: $vue-green;
      }
    }

    &__profile {
      margin-left: auto;
      border-radius: 100%;
    }
  }
</style>
