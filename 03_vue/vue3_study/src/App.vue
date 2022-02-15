<template>
  <h2>provide与inject</h2>
  <p>当前的颜色:{{ color }}</p>
  <hr>
  <button @click="color='red'">红色</button>
  <button @click="color='yellow'">黄色</button>
  <button @click="color='green'">绿色</button>
  <hr>
  <son />
</template>
<script lang="ts">
import { defineComponent, provide, ref } from "vue";
import Son from "./components/Son.vue";
export default defineComponent({
  components: { Son },
  name: "App",
  setup() {
    const color = ref("red")
    //提供数据
    provide('color', color)
    return {
      color
    }
  }
})

</script>