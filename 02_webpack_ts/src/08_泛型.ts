(()=>{
    //在定义函数，接口，类的时候，不能预先确定要使用的数据类型，而是在使用函数，接口，类的时候才能确定数据的类型
    function getArr(value:number, count:number):number[]{
        const arr:number[] = []
        for (let i=0;i<count;i++) {
            arr.push(value)
        }
        return arr
    }
    const arr = getArr(100.123, 5)
    console.log(arr)
    //定义一个函数，同上，只不过传入字符串类型
    function getArr1(value:string, count:number):string[]{
        const arr:string[] = []
        for (let i=0;i<count;i++) {
            arr.push(value)
        }
        return arr
    }
    const arr1 = getArr1("abc", 5)
    console.log(arr1)

    //可以传入任意类型的数据，返回的是该类型的数组
    function getArr2(value:any, count:any):any[]{
        const arr:any[] = []
        for (let i=0;i<count;i++) {
            arr.push(value)
        }
        return arr
    }
    const arr2 = getArr2(true, 5)
    console.log(arr2)
    // console.log(arr2[0].toFixed(2)) //此处是没有只能提示的

    //泛型
    function getArr3<T>(value:T, count:number):T[]{
        const arr:T[] = []
        //或者
        // const arr:Array<T>
        for (let i=0;i<count;i++) {
            arr.push(value)
        }
        return arr
    }
    const arr3 = getArr3<number>(23, 2)
    console.log(arr3[0].toFixed(2))
    console.log(arr3)
    const arr4 = getArr3<string>("sdf", 3)
    console.log(arr4[0].split(""))
    console.log(arr4)

    //多个泛型参数的函数
    function getMsg<K,V>(value1:K, value2:V):[K,V]{
        return [value1, value2]
    }
    const a1 = getMsg<string, number>("python", 99)
    console.log(a1[0].split(""), a1[1].toFixed(2))
})()