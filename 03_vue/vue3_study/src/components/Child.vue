<template>
<h2>child子级组件</h2>
<h3>msg:{{msg}}</h3>
<h3>count: {{count}}</h3>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name:"Child",
  props: ['msg'],
  //setup细节问题
  //setup是在beforecreate生命周期毁掉之前就执行了，而且额就执行一次
  //由此可以推断出，setup在执行的时候，当前的组件还没有创建出来，也就意味着，组件实例对象this根本就不能用
  //this 是undefined，就不能通过this调用data/computed/methods/props
  //数据初始化的声明周期回调
  beforeCreate(){
      console.log("before create执行了");
      
  },
  //界面渲染完毕
  mounted() {
      console.log(this);
      
  },
  setup() {
      console.log("setup执行了",this)
      const showMsg1=()=>{
          console.log("setup中的showMsg1方法");
      }
      return {
          showMsg1
          //setup 中一般都是返回一个对象，对象中的属性和方法都可以在html模板中直接使用
      }
  },
  //setup的返回值是一个对象
  //setup中的对象内部的属性和data函数中的return对象的属性都可以在html模板中使用
  //二者会进行合并
  //方法也会进行合并，如果有重名，setup优先
  data() {
      return {
          count: 10
      }
  },
  methods: {
      showMsg2() {
          console.log("methods中的showMsg2方法");
          
      }
  }
})
</script>