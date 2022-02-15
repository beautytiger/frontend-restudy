<template>
  <h2>toRaw和markRaw</h2>
  <h3>state: {{ state }}</h3>
  <hr>
  <button @click="testToRaw">测试toRaw</button>
  <button @click="testMarkRaw">测试MarkRaw</button>
</template>
<script lang="ts">
import { defineComponent, markRaw, reactive, toRaw } from "vue";
interface UserInfo {
  name: string;
  age: number;
  likes?: string[];
}
export default defineComponent({
  name: "App",
  setup() {
    const state = reactive<UserInfo>({
      name: "小明",
      age: 20,
    })
    const testToRaw = ()=>{
      console.log("testTo");
      const user = toRaw(state)
      user.name += "==="
      
    }
    const testMarkRaw = ()=>{
      console.log("testMark");
      // state.likes = ["1", "2", "3"]
      // state.likes[0] += "--"

      state.likes = markRaw(["1", "2", "3"])
      setInterval(()=>{
        if (state.likes) {
          state.likes[0] += "="
        }
        console.log("hello");
        
      }, 1000)
    }
    return {
      state,
      testToRaw,
      testMarkRaw
    }

  }
})

</script>