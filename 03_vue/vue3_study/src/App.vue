<template>
  <h2>计算属性和监视</h2>
  <fieldset>
    <legend>姓名操作</legend>
    姓氏：<input type="text" placeholder="姓氏" v-model="user.firstName"><br>
    名字：<input type="text" placeholder="名字" v-model="user.lastName">
  </fieldset>
  <fieldset>
    <legend>计算属性和监视</legend>
    姓名：<input type="text" placeholder="显示姓名" v-model="fullName1"><br>
    姓名：<input type="text" placeholder="显示姓名" v-model="fullName2"><br>
    姓名：<input type="text" placeholder="显示姓名" v-model="fullName3">
  </fieldset>
</template>
<script lang="ts">
import { computed, defineComponent, reactive, watch, ref, watchEffect} from "vue";
export default defineComponent({
  name: "App",
  setup() {
    const user = reactive({
      firstName: '东方',
      lastName: '不败'
    })
    //通过计算属性的方式，实现第一个姓名的显示
    //如果只传入一个函数，表示get

    //返回的是一个ref的对象
    const fullName1 = computed(()=>{
      return user.firstName + '_' + user.lastName
    })

    const fullName2 = computed({
      get(){
        return user.firstName + '_' + user.lastName
      },
      set(val:string){
        //console.log('....', val);
        const names = val.split("_")
        user.firstName = names[0]
        user.lastName = names[1]
      }
    })

    //监视，监视指定的数据
    const fullName3 = ref('')
    watch(user, (val)=>{
      console.log(val);
      fullName3.value = val.firstName +'_' + val.lastName
    },{immediate:true,deep:true})

    // 不需要immediate，会默认进行监视
    // watchEffect(()=>{
    //   fullName3.value = user.firstName +'_' + user.lastName
    // })

    //监视并改变数据，注意，这里需要上面的watch也启用了，因为 fullName3 需要初始化
    watchEffect(()=>{
        const names = fullName3.value.split("_")
        user.firstName = names[0]
        user.lastName = names[1]
    })

    //watch可以监视多个数据，如果是非响应式数据，需要回调式引用 ()=>
    watch([fullName3, ()=>user.firstName], ()=>{
      console.log('====');
      
    })

    return {
      user,
      fullName1,
      fullName2,
      fullName3
    }
  }
});
</script>