// Create a class Person with properties name and age. Write a method isAdult that returns true if the person is 18 or older, and false otherwise

class Person {
    name
    age

    constructor(pname, page) {
        this.name = pname
        this.age = page
    }
    isAdult() {
        if (this.age >= 18)

            return `${this.name} is Adult?: ${true}`
        else
            return `${this.name} is Adult?: ${false}`

    }
}

const p1 = new Person('allen', 19)
console.log(p1.isAdult())