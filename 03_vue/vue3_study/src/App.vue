<template>
  <h2>app父级组件</h2>
  <button @click="isShow=!isShow">切换显示</button>
  <hr>
  <child v-if="isShow"/>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import Child from './components/Child.vue';
export default defineComponent({
  components: { Child },
  name: "App",
  setup() {
    const isShow = ref(true)
    return {
      isShow
    }
  }
})
</script>