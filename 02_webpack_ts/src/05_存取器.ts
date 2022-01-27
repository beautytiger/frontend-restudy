(()=>{
    //控制对成员的访问，getter, setter

    class Person {
        first : string
        last: string
        constructor(first:string,last:string){
            this.first = first
            this.last = last
        }
        get fullName(){
            console.log("在getter中")
            return `${this.first}-${this.last}`
        }
        set fullName(val:string){
            console.log("在setter中")
            let names = val.split("-")
            this.first = names[0]
            this.last = names[1]
        }
    }
    const person:Person = new Person("东方", "不败")
    console.log(person)
    console.log(person.fullName)
    person.fullName = "诸葛-孔明"
    console.log(person)
    console.log(person.fullName)
})()