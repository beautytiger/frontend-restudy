//类型注解

(()=>{
    function showMsg(str:string){
        return "123," + str
    }
    let msg = "abc"
    // let msg = [10, 11, 12]
    console.log(showMsg(msg))
})()