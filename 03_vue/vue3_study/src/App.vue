<template>
  <h2>readonly和shallowreadonly</h2>
  <h3>state: {{ state2 }}</h3>
  <hr>
  <button @click="update">更新</button>
</template>
<script lang="ts">
import { defineComponent, reactive, readonly, shallowReadonly } from "vue";
export default defineComponent({
  name: "App",
  setup() {
    const state = reactive({
      name: "佐助",
      age: 20,
      car: {
        name: "benz",
        color: "yellow"
      }
    })
    const state2 = readonly(state)
    const state3 = shallowReadonly(state)
    const update = ()=>{
      console.log("测试")
      // state2.name += "+++"
      // state2.car.name += "+++"
      // state3.name += "+++"
      state3.car.name += "+++"
    }
    return {
      state2,
      update
    }
  }
})

</script>