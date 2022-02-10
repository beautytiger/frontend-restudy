import { ref } from 'vue';
import axios from 'axios';

//发送ajax的请求
export default function <T>(url: string) {
    const loading = ref(true)
    const data = ref<T | null>(null) //坑，数据类型会变
    const errorMsg = ref('')
    //发送请求
    axios.get(url).then((response) => {
        loading.value = false;
        data.value = response.data;
    }).catch(e => {
        loading.value = false
        errorMsg.value = e.message || "未知错误"
    })
    return {
        loading,
        data,
        errorMsg
    }
}