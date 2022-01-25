//接口：是一种能力，一种约束
(() => {
    function showFullName(person) {
        return person.firstName + person.lastName;
    }
    const person = {
        firstName: "东方",
        lastName: "不败"
    };
    console.log(showFullName(person));
})();
