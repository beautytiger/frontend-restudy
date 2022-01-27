<template>
  <div>我又回来了</div>
  <h1>{{ number }}</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  //组合api中第一个要使用的函数
  setup() {
    console.log("我来了")
    const number = 10
    return {
      number
    }
  }
});
</script>

<style>

</style>
