<template>
  <div class="homepage">
    <section>
      <h1>{{ name }}</h1>
      <h3>environment</h3>
    </section>
  </div>
</template>

<script lang="ts">
  import { computed, defineComponent } from 'vue'
  import useUser from '@app/stores/user'
  import useConfig from '@app/stores/config'

  export default defineComponent({
    name: 'HomePage',
    setup() {
      const user = useUser()
      const name = computed(() => user.name)

      const config = useConfig()
      const environment = config.getEnvironment

      return {
        name,
        environment,
      }
    },
  })
</script>

<style lang="scss">
  .homepage {
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
