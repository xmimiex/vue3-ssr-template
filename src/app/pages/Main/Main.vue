<template>
  <Header />
  <router-view/>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import Header from '@app/components/organisms/Header'

  export default defineComponent({
    name: 'MainPage',
    components: {
      Header,
    },
  })
</script>
