<template>
  <h2>customRef的使用</h2>
  <input type="text" v-model="keyword">
  <p>{{ keyword }}</p>
</template>
<script lang="ts">
import { customRef, defineComponent, ref } from "vue";
//自定义防抖函数
function useDebouncedRef<T>(value:T, delay=200) {
  let timeOutId:number
  return customRef((track,triger)=>{
    return {
      get(){
        track()
        return value
      },
      set(newValue:T){
        clearTimeout(timeOutId)
        timeOutId = setTimeout(()=>{
          value = newValue
          triger()
        },delay)
      },
    }
  })
}
export default defineComponent({
  name: "App",
  setup() {
    // const keyword = ref("avc")
    const keyword = useDebouncedRef<string>("abc", 500)
    return {
      keyword
    }
  }
})

</script>