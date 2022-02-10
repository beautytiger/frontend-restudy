import { ref, onMounted, onBeforeUnmount } from "vue";

export default function(){
    const x = ref(-1)
    const y = ref(-1)
    //点击事件回调函数
    const clickHandler = (event:MouseEvent) => {
      x.value = event.pageX
      y.value = event.pageY
    }
    //页面加载完毕
    onMounted(()=>{
      window.addEventListener('click', clickHandler)
    })
    //页面卸载前
    onBeforeUnmount(()=>{
      window.removeEventListener('click', clickHandler)
    })
    return {
        x,
        y
        }
}