<template>
  <h2>Child子级组件</h2>
  <h4>msg:{{msg}}</h4>
  <button @click="update">更新数据</button>
</template>
<script lang="ts">
import { defineComponent, ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from "vue";
export default defineComponent({
  name: "Child",
  //vue2中的生命周期钩子
  beforeCreate() {
      console.log("2.x中的beforeCreate")
  },
  created() {
      console.log("2.x中的created")
  },
  beforeMount() {
      console.log("2.x中的beforeMount")
  },
  mounted() {
      console.log("2.x中的mounted")
  },
  beforeUpdate(){
      console.log("2.x中的beforeUpdate")
  },
  updated() {
      console.log("2.x中的updated")
  },
  beforeUnmount() {
      console.log("2.x中的beforeDestroy, 3.0中是beforeUnount")
  },
  unmounted() {
      console.log("2.x中的destroyed， 3.0中是unmounted")
  },
  setup (){
      console.log("3.x中的 setup")
      const msg = ref("abc")
      const update = ()=>{
          msg.value += '-'
      }
      onBeforeMount(()=>{
          console.log("3.x中的 onBeforeMount")
      })
      onMounted(()=>{
          console.log("3.x中的 onMounted")
      })
      onBeforeUpdate(()=>{
          console.log("3.x中的 onBeforeUpdate")
      })
      onUpdated(()=>{
          console.log("3.x中的 onUpdated")
      })
      onBeforeUnmount(()=>{
          console.log("3.x中的 onBeforeUnmount")
      })
      onUnmounted(()=>{
          console.log("3.x中的 onUnmounted")
      })
      return {
          msg,
          update
      }
  }
})
</script>