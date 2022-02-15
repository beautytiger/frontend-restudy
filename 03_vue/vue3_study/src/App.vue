<template>
  <h2>toRef的使用及其特点</h2>
  <h3>state: {{ state }}</h3>
  <h3>age: {{ age }}</h3>
  <h3>money: {{ money }}</h3>
  <hr>
  <button @click="update">更新数据</button>
  <hr>
  <child :age="age"/>
</template>
<script lang="ts">
import { defineComponent, reactive, toRef, ref } from "vue";
import Child from "./components/Child.vue";
export default defineComponent({
  components: { Child },
  name: "App",
  setup() {
    const state = reactive({
      age: 5,
      money: 100
    })
    const age = toRef(state, "age")
    const money = ref(state.money)
    const update = ()=>{
      console.log("update");
      state.age += 2
      // age.value += 3
      money.value += 10
    }
    console.log(age);
    console.log(money);
    
    return {
      state,
      age,
      money,
      update
    }
  }
})

</script>