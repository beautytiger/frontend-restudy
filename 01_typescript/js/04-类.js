//ts中书写js中的类
(() => {
    class Person {
        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.fullName = firstName + '_' + lastName;
        }
    }
    const person = new Person("诸葛", "孔明");
    function showFullName(person) {
        return person.firstName + "-" + person.lastName;
    }
    console.log(showFullName(person));
})();
