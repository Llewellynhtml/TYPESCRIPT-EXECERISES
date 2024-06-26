
class Person {
    name: string;
    age: number;
    private socialSecurityNumber: string;

    constructor(name: string, age: number, ssn: string) {
        this.name = name;
        this.age = age;
        this.socialSecurityNumber = ssn;
    }

    getName(): string {
        return this.name;
    }

    getAge(): number {
        return this.age;
    }
}

let person1 = new Person("Lesego", 30, "123-45-6789");

console.log("Person's Name:", person1.getName());
console.log("Person's Age:", person1.getAge());

