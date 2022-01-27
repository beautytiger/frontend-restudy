<template>
  <h2>setup和ref的基本使用</h2>
  <h3>{{count}}</h3>
  <button @click="updateCount">更新数据</button>
</template>

<script lang="ts">
import { defineComponent,ref } from 'vue';
export default defineComponent({
  name: 'App',
  //页面打开后，可以直接看到一个数据，点击按钮后，数据发生变化

  //vue2的实现
  // data() {
  //   return {
  //     count: 0
  //   }
  // },
  // methods: {
  //   updateCount() {
  //     this.count++
  //   }
  // }

  //vue3的实现方式
  //setup是组合api的入口
  setup() {
    // let count = 0 // 此数据不是响应式数据，数据变化，页面无法跟着渲染
    const count = ref(0)
    console.log(count)
    function updateCount() {
      console.log("更新数据")
      // count++
      count.value++
    }
    //返回一个对象
    return {
      count,
      updateCount
    }
  }
});
</script>
