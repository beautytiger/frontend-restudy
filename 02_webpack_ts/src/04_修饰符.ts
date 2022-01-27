(()=>{
    //readonly是一个关键字，对类中的属性成员进行修饰，修饰后，该属性成员，就不能在外部被随意修改了
    //构造函数中可以对只读的属性成员进行修改
    class Person{
        readonly name:string="默认值"
        constructor(name:string) {
            this.name = name;
        }
        sayHi(){
            console.log("靠你七娃",this.name)
            // this.name = "大扁扁"
        }
    }
    const p:Person = new Person("小甜甜")
    console.log(p)
    console.log(p.name)
    // p.name = "大扁扁"
    console.log(p)
    console.log(p.name)
    //修饰构造函数的参数
    class Person1{
        //一旦使用readonly修饰后，类中就有了一个对应的属性成员，外部也无法修改该值
        //public，private，protected 同样如此
        constructor(readonly name:string="大头") {
        }
        sayHi(){
            console.log("靠你七娃",this.name)
            // this.name = "大扁扁"
        }
    }
    const p1:Person1 = new Person1()
    console.log(p1)
    console.log(p1.name)
    // p.name = "大扁扁"
    console.log(p1)
    console.log(p1.name)
})()