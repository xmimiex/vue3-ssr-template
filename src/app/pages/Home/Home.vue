<template>
  <div class="home-page">
    <header class="header">
      <LocaleSwitcher/>
    </header>
    <section>
      <h1>{{ name }}</h1>
      <h3>{{ $t('environment', { value: environment }) }}</h3>

      <h4>{{ $t('i18nIntroduction') }}</h4>
      <p>{{ $d(new Date(), 'short') }}</p>
      <p>{{ $n(100, 'currency') }}</p>

      <img
        alt="ashkan forouzani"
        class="image"
        src="../../assets/ashkan-forouzani-m0l9NBCivuk-unsplash.jpg"
        width="640"
        height="427">

      <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    </section>
  </div>
</template>

<script lang="ts">
  import { computed, defineComponent } from 'vue'
  import HelloWorld from '@app/components/atoms/HelloWorld'
  import LocaleSwitcher from '@app/components/atoms/LocaleSwitcher'
  import useUser from '@app/stores/user'
  import useConfig from '@app/stores/config'
  import isServerSide from '@app/utils/context'

  export default defineComponent({
    name: 'HomePage',
    components: {
      HelloWorld,
      LocaleSwitcher,
    },
    setup() {
      const user = useUser()
      const name = computed(() => user.name)

      const config = useConfig()
      const environment = computed(() => config.context.environment)

      if (isServerSide()) {
        user.$patch({ name: 'Robin' })
      }

      return {
        name,
        environment,
      }
    },
  })
</script>

<style lang="scss">
  .home-page {
    color: $color-standard-1;
    text-align: center;

    .header {
      position: fixed;
    }

    .image {
      max-width: 100%;
      height: auto;
    }
  }
</style>
