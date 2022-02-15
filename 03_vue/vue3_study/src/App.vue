<template>
  <h2>ref获取页面中的元素</h2>
  <input type="text" ref="inputRef">
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
export default defineComponent({
  name: "App",
  setup() {
    //默认是空的，页面加载完毕，说明组件已经存在，获取文本框元素
    const inputRef = ref<HTMLElement | null>(null)
    onMounted(()=>{
      inputRef.value && inputRef.value.focus() //自动获取焦点
    })
    return {
      inputRef,
    }
  }
})

</script>