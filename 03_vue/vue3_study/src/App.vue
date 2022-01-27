<template>
<h2>reactive的使用</h2>
<h3>名字{{user.name}}</h3>
<h3>年龄{{user.age}}</h3>
<h3>媳妇{{user.wife}}</h3>
<hr>
<button @click="updateUser">更新数据</button>
</template>

<script lang="ts">
import { defineComponent,reactive,ref } from 'vue';
export default defineComponent({
  name: 'App',
  setup() {
    const obj = {
      name: "小明",
      age: 20,
      wife: {
        name:"小甜甜",
        age:18,
        cars:["奔驰", "宝马", "奥迪"]
      }
    }
    const user = reactive (obj)
    const updateUser = ()=>{
      //直接使用目标对象的方式来更新目标对象中的成员值，是不行的
      // obj.name += "--"
      //只能使用代理对象的方式
      user.name += "--"
      user.age +=1
      user.wife.name += "--"
      user.wife.age += 2
      user.wife.cars[0] += "-"
    }
    return {
      user,
      updateUser
    }
  }
});
</script>
