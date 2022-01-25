//接口：是一种能力，一种约束

(()=>{
    //定义一个接口
    interface IPerson {
        firstName: string
        lastName: string
    }

    function showFullName(person:IPerson) {
        return person.firstName + person.lastName
    }
    const person = {
        firstName:"东方",
        lastName:"不败"
    }
    console.log(showFullName(person))
})()