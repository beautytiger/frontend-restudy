<template>
  <h2>toRefs的使用</h2>
  <!-- <h3>name: {{ state.name }}</h3>
  <h3>name: {{ state.age }}</h3> -->
  <h3>name: {{ name }}</h3>
  <h3>name: {{ age }}</h3>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
export default defineComponent({
  name: "App",
  setup() {
    const state = reactive({
      name: "自来也",
      age: 47
    })
    const state2 = toRefs(state)
    console.log(state2);
    //定时器，更新数据，如果数据变化了，页面也会随之变化，就是响应式数据
    setInterval(()=>{
      state2.name.value += "-"
      console.log("...");
    }, 1000)
    return {
      ...state2,
    }
  }
})

</script>