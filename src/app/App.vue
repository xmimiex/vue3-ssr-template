<template>
  <router-view/>
</template>

<script lang="ts">
  import { defineComponent, computed } from 'vue'
  import { useHead } from '@vueuse/head'
  import useSeo from '@app/stores/seo'
  import useContext from '@app/stores/context'

  export default defineComponent({
    setup() {
      const seo = useSeo()
      const context = useContext()

      useHead({
        title: computed(() => seo.title),
        htmlAttrs: {
          lang: context.language,
        },
        meta: [
          {
            name: 'description',
            content: computed(() => seo.description),
          },
        ],
      })
    },
  })
</script>
