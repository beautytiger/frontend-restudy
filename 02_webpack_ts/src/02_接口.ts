(()=>{
    //接口
    //接口是类型，规范，规则，能力，约束
    interface IPerson {
        readonly id:number
        name:string
        age:number
        sex?:string
    }
    const person:IPerson={
        id:1,
        name:"小甜甜",
        age:18,
        // sex: "女"
    }
    console.log(person)
    // person.id=100
    person.sex="女"
    console.log(person)

    //函数类型
    //通过接口的方式，作为函数的类型来使用
    interface ISearchFunc{
        //定义一个调用签名
        //查找子字符串
        (source:string, subString:string):boolean
    }
    const searchString:ISearchFunc = function(source:string, subString:string):boolean {
        return source.search(subString) > -1
    }
    console.log(searchString("哈哈，我变帅了", "变帅"))

    //类类型
    //定义一个接口
    interface IFly{
        fly()
    }
    //定义一个类，这个类的类型就是上面定义的接口
    //可以理解为，接口约束了类
    //类可以实现一个接口，也可以实现多个接口
    class Person implements IFly,ISwim{
        fly() {
            console.log("我会飞了")
        }
        swim() {
            console.log("我会游泳")
        }
    }
    const p = new Person
    p.fly()
    p.swim()
    interface ISwim{
        swim()
    }
    //接口可以继承其他的多个接口
    interface IFlyAndSwim extends IFly,ISwim {}
    class Person2 implements IFlyAndSwim {
        fly() {
            console.log("我会飞了2")
        }
        swim() {
            console.log("我会游泳2")
        }
    }
    const p2 = new Person2
    p2.fly()
    p2.swim()
    //接口和接口之间叫继承 extends
    //类和接口之间叫实现 implements
})()