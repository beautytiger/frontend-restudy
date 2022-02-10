<template>
  <h2>自定义hook函数</h2>
  <h3>x;{{x}}, y:{{y}}</h3>
  <h4 v-if="loading">正在加载中...</h4>
  <h4 v-else-if="errorMsg">错误信息:{{ errorMsg }}</h4>
  <ul v-else>
    <li>id:{{ data.id }}</li>
    <li>address:{{ data.address }}</li>
    <li>distance:{{ data.distance }}</li>
  </ul>
  <hr>
  <ul v-for="item in data" :key="item.id">
    <li>id:{{ item.id }}</li>
    <li>title:{{ item.title }}</li>
    <li>price:{{ item.price }}</li>
  </ul>
</template>
<script lang="ts">
import { defineComponent, watch } from "vue";
import useMousePostion from "./hooks/useMousePosition"
import useRequests from "./hooks/useRequests"

//定义接口约束对象类型
// interface AddressData{
//   id:number;
//   address:string;
//   distance:number;
// }
interface ProductData{
  id:number;
  title:string;
  price:number;
}
export default defineComponent({
  name: "App",
  //收集点击坐标
  setup(){
    const{ x, y } = useMousePostion()
    // const{loading, data, errorMsg} = useRequests<AddressData>("/data/address.json")
    const{loading, data, errorMsg} = useRequests<ProductData[]>("/data/products.json")
    watch(data, ()=>{
      if (data.value) {
        console.log(data.value.length);
      }
    })
    return {
      x,
      y,
      loading,
      data,
      errorMsg
    }
  }
})
</script>