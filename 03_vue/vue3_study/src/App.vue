<template>
<h2>App父级组件</h2>
<h3>msg:{{msg}}</h3>
<button @click="msg += '==='">更新数据</button>
<hr>
<child :msg="msg" @fn="fn"/>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
//引入子级组件
import Child from './components/Child.vue'
export default defineComponent({
  components: { Child },
  name:"App",
  setup() {
    const msg = ref("what are you doing")
    function fn (content:string){
      msg.value += content
    }
    return {msg,fn}
  }
})
</script>