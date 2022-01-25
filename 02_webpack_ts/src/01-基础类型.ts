//基础类型
(()=>{
    console.log("测试")
    //布尔类型
    let flag:boolean = true
    flag = false
    // flag = 10
    console.log(flag)
    //数字
    let a1: number = 10 // 十进制
    let a2: number = 0b1010  // 二进制
    let a3: number = 0o12 // 八进制
    let a4: number = 0xa // 十六进制
    // a1 = "haha"
    console.log(a1, a2, a3, a4)
    //字符串
    let str1:string = "窗前明月光"
    let str2:string = "疑是地上霜"
    let str3:string = '举头望明月'
    let str4:string = '低头思故乡'
    console.log(`${str1},${str2},${str3},${str4}`)
    // str4 = 10 // ts中变量需要遵循类型的声明，否则会报错
    //数字与字符串拼接
    let str5:string = "我的钱："
    let num:number = 500
    console.log(str5+num)
    let u:undefined = undefined
    let n:null = null
    // undefined 和 null 都可以作为其他类型的子类型
    console.log(u, n)
    let num2:number = undefined
    num2 = null
    console.log(num2)
    //数组
    //数组定义后，里面的数据类型必须和定义数组的类型是一致的，否则会出错
    let arr1:number[] = [1, 2, 3, 4]
    let arr2:Array<number> = [10, 20, 30, 40]
    console.log(arr1, arr2)

    //元组
    //类型和数据的个数一开始就限定了
    let arr3:[string, number, boolean] = ['abcdef', 1.12345, true]
    console.log(arr3)
    console.log(arr3[0].split(''))
    console.log(arr3[1].toFixed(2))

    //枚举
    enum Color {
        red, //0
        green, //1
        blue //2
    }
    let color:Color = Color.red
    console.log(color)
    console.log(Color.red, Color.green, Color.blue)
    console.log(Color[1]) // string

    enum Gender {
        男, //可以是中文
        女
    }
    console.log(Gender.男)

    // any类型
    let str6:any = 100
    console.log(str6)
    str6 = "abc"
    console.log(str6)
    //数组个数，类型不确定时，可以用any
    let arr4:any[] = [100, "abc", true]
    console.log(arr4)

    //void类型
    function showMsg():void {
        console.log("只要功夫深,铁杵磨成针")
        // return undefined
        return null
    }
    console.log(showMsg())
    console.log('-------------------------------')
    //

})()