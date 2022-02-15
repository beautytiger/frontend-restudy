<template>
  <h2>shallowReactive和shallowRef</h2>
  <h3>m1: {{ m1 }}</h3>
  <h3>m2: {{ m2 }}</h3>
  <h3>m3: {{ m3 }}</h3>
  <h3>m4: {{ m4 }}</h3>
  <hr>
  <button @click="update">更新数据</button>
</template>
<script lang="ts">
import { defineComponent, reactive, ref, shallowReactive, shallowRef } from "vue";
export default defineComponent({
  name: "App",
  setup() {
    //深度响应式数据
    const m1 = reactive({
      name: "鸣人",
      age: 20,
      car: {
        name: "奔驰",
        color: "ref",
      }
    })
    //浅监视
    const m2 = shallowReactive({
      name: "鸣人",
      age: 20,
      car: {
        name: "奔驰",
        color: "ref",
      }
    })
    const m3 = ref({
      name: "鸣人",
      age: 20,
      car: {
        name: "奔驰",
        color: "ref",
      }
    })
    const m4 = shallowRef({
      name: "鸣人",
      age: 20,
      car: {
        name: "奔驰",
        color: "ref",
      }
    })
    console.log(m1, m2,m3,m4);
    
    const update = ()=>{
      m1.name += "..."
      m1.car.name += "]]]"
      m2.name += "..."
      m2.car.name += "]]]" //奇怪，单独操作不起作用，一起操作就能起作用
      m3.value.name += "..."
      m3.value.car.name += "]]]"
      m4.value.name += "..."
      m4.value.car.name += "]]]"
    }
    return {
      m1,
      m2,
      m3,
      m4,
      update
    }
  }
})

</script>