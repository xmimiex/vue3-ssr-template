<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
})
</script>

<style scoped lang="scss">
  h3 {
    margin: 2rem 0 0;
  }

  li {
    display: inline-block;
    margin: 0 1rem;
  }

  a {
    color: #42b983;
  }
</style>
