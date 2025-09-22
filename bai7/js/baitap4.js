"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    name;
    constructor(name) {
        this.name = name;
    }
    displayInfo() {
        console.log(`Name:${this.name}`);
    }
}
class Student extends Person {
    id;
    constructor(id, name) {
        super(name);
        this.id = id;
    }
    displayInfo() {
        console.log(`Name:${this.name} ID:${this.id}`);
    }
}
class Teacher extends Person {
    subject;
    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }
    displayInfo() {
        console.log(`Name:${this.name},Subject:${this.subject}`);
    }
}
let st1 = new Student("ST001", "Nguyễn Văn A");
let tc1 = new Teacher("Math", "Nguyễn Thị B");
st1.displayInfo();
tc1.displayInfo();
//# sourceMappingURL=baitap4.js.map