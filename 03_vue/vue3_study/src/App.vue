<template>
  <h2>响应式数据的判断</h2>
  <p>当前的颜色:{{ color }}</p>
  <hr>
  <button @click="color='red'">红色</button>
  <button @click="color='yellow'">黄色</button>
  <button @click="color='green'">绿色</button>
  <hr>
  <son />
</template>
<script lang="ts">
import { defineComponent, provide, ref,isRef,reactive,isReactive,readonly,isReadonly, isProxy } from "vue";
import Son from "./components/Son.vue";
export default defineComponent({
  components: { Son },
  name: "App",
  setup() {
    const color = ref("red")
    //提供数据
    provide('color', color)
    console.log(isRef(ref({})));
    console.log(isReactive(reactive({})));
    console.log(isReadonly(readonly({})));
    console.log(isProxy(readonly({})));
    console.log(isProxy(reactive({})));
    return {
      color
    }
  }
})

</script>