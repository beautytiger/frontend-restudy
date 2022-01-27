(()=>{
    //类，可以理解为模板，通过模板实例化对象
    class Person{
        name:string
        age:number
        gender:string

        constructor(name:string, age:number, gender:string="女") {
            this.name = name
            this.age = age
            this.gender = gender
        }
        sayHi(str:string) {
            console.log(`大家好，我是${this.name}，今年${this.age}岁了，是个${this.gender}孩子,`, str)
        }
    }
    const person = new Person("佐助", 18)
    person.sayHi("哈哈")

    //类继承
    //继承：类与类之间的关系
    //基类，父类，超类
    //子类，派生类
    class Student extends Person {
        constructor(name:string="小明", age:number=18, gender:string="男") {
            //调用父类的构造方法
            super(name, age, gender)
        }
        sayHi(){
            console.log("我是学生类中的方法")
            super.sayHi("你是谁")
        }
    }
    const p2 = new Student()
    p2.sayHi()

    //多态
    //父类型的引用指向了子类型的对象，不同类型的对象，针对相同的方法，产生了不同的行为
    class Animal {
        name:string
        constructor(name: string){
            this.name = name
        }
        run(distance:number=0) {
            console.log(this.name, `跑了${distance}米`)
        }
    }
    class Dog extends Animal {
        constructor(name:string) {
            super(name)
        }
        run(distance:number=100) {
            console.log(`狗跑了${distance}米`)
        }
    }
    class Pig extends Animal {
        constructor(name:string) {
            super(name)
        }
        run(distance:number=50) {
            console.log(`猪跑了${distance}米`)
        }
    }
    const ani:Animal = new Animal("动物")
    ani.run(30)
    const dog:Dog = new Dog("大黄")
    dog.run()
    const pig:Pig = new Pig("八戒")
    pig.run()
    //使用父类类型创建子类对象
    const dog1:Animal = new Dog("小黄")
    dog1.run()
    const pig1:Animal = new Pig("小猪")
    pig1.run()
    function showRun(ani:Animal) {
        ani.run(77)
    }
    showRun(dog1)
    showRun(pig1)
    console.log('-------------------------------')

    //成员修饰符
    //默认为public，代表任何位置都可以访问类成员
    //private, 私有变量，外部无法访问该成员,子类中也是无法访问的
    //protected，外部不可以访问，子类可以访问
    class Human{
        name:string //都默认为public
        // private name:string
        // protected name:string

        constructor(name:string,) {
            this.name = name
        }
        eat() {
            console.log("真好吃", this.name)
        }
    }
    class Teacher extends Human {
        constructor(name:string) {
            super(name)
        }
        play() {
            console.log(this.name, "就喜欢玩")
        }
    }
    const h = new Human("大蛇丸")
    console.log(h.name)
    h.eat()
})()