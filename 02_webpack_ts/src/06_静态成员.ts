(()=>{
    //在类中通过static修饰的属性或方法，就是静态属性或方法
    //在使用时，是通过 类.成员 的方式来调用的
    class Person {
        static name1:string = "杀手"
        //构造函数无法通过static进行修饰
        constructor() {
            // this.name1 = name
        }
        static sayHi(){
            console.log("萨瓦迪卡")
        }
    }
    const person:Person = new Person()
    // console.log(person.name1)
    // person.sayHi()
    console.log(Person.name1)
    Person.name1 = "冷静"
    console.log(Person.name1)
    Person.sayHi()

    //抽象类
    //抽象类包含抽象方法，也可以包含实例方法
    //抽象类不能被实例化，是为了让子类进行实例化
    abstract class Animal{
        //抽象属性是没有必要的
        // abstract name:string = "小汪"
        //抽象方法
        abstract eat()
        //实例方法
        run() {
            console.log(`run()`)
        }
    }
    // const ani:Animal = new Animal()  //错误的
    class Dog extends Animal {
        name: string
        constructor() {
            super()
            this.name = "小明"
        }
        //重新实现抽象类中的方法
        eat(){
            console.log("狗在吃")
        }
    }
    const dog:Dog = new Dog()
    dog.eat()
    console.log(dog)
})()