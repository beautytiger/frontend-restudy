(()=>{
    //函数，封装重复使用的代码，在需要时直接调用
    //js写法，ts中也可这么写
    function add(x,y){ //求和函数
        return x+y
    }
    //匿名函数
    const add2 = function(x, y){
        return x+y
    }
    //ts写法
    function add3(x:number,y:number):number{ //求和函数
        return x+y
    }
    //匿名函数
    const add4 = function(x:number, y:number):number{
        return x+y
    }
    //函数的完整写法
    const add5:(x:number,y:number) => number = function(x:number, y:number):number {
        return x+y
    }

    //可选参数和默认参数
    const getFullName = function(first:string="欧阳", last?:string):string{
        if(last) {
            return first + last
        } else {
            return first
        }
    }
    console.log(getFullName())
    console.log(getFullName("东方"))
    console.log(getFullName("东方","不败"))

    //剩余参数
    //下面表示剩余参数放在了字符串数组中
    //要放在所有参数的最后
    function showMsg(str:string, ...args:string[]){
        console.log(str)
        console.log(args)
    }
    showMsg("a", "b", "c", "d", "e")

    //函数重载
    //重载的声明
    function myAdd(x:string, y:string):string
    function myAdd(x:number, y:number):number
    //函数名字相同，函数参数和个数不相同
    function myAdd(x:number|string, y:number|string):string|number{
        if (typeof x === "string" && typeof y === "string") {
            return x+y
        } else if (typeof x === "number" && typeof y === "number") {
            return x+y
        }
    }
    console.log(myAdd("诸葛","孔明"))
    console.log(myAdd(11,23))
    // console.log(myAdd(11,"非法")) //编辑器会报错

})()