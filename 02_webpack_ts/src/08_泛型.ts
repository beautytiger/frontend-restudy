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

    //泛型接口
    interface IBaseCRUD<T>{
        data:Array<T>
        add:(t:T)=>T
        getUserId:(id,number)=>T
    }
    class User {
        id?:number
        name:string
        age:number
        constructor(name:string, age:number) {
            this.name = name
            this.age = age
        }
    }
    class UserCRUD implements IBaseCRUD<User>{
        data:Array<User>=[]
        add(user:User):User{
            user.id = Date.now()+Math.random()
            this.data.push(user)
            return user
        }
        getUserId(id:number):User{
            return this.data.find(user=>user.id===id)
        }
    }
    //实例化添加用户信息的类
    const userCRUD:UserCRUD = new UserCRUD()
    userCRUD.add(new User("tom", 10))
    userCRUD.add(new User("jack", 13))
    userCRUD.add(new User("lucy", 14))
    const {id} = userCRUD.add(new User("lily", 16))
    userCRUD.add(new User("bill", 18))
    console.log(userCRUD.data)
    const user = userCRUD.getUserId(id)
    console.log(user)

    //泛型类
    class GenericNumber<T>{
        defaultValue:T
        add:(x:T, y:T) => T
    }
    const g1:GenericNumber<number> = new GenericNumber<number>()
    g1.defaultValue = 100
    g1.add = function (x, y) {return x+ y}
    console.log(g1.add(10, 20))
    const g2:GenericNumber<string> = new GenericNumber<string>()
    g2.defaultValue = "abc"
    g2.add = function (x, y) {
        return x+ y
    }
    console.log(g2.add("abc", "123"))

    //泛型约束
    interface ILength{
        length:number
    }
    function getLength<T extends ILength>(x: T):number {
        return x.length
    }
    console.log(getLength<string>("what are you doing"))
    // console.log(getLength<number>(999)) 
})()
