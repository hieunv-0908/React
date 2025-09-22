"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    id;
    age;
    email;
    constructor(id, age, email) {
        this.id = id;
        this.age = age;
        this.email = email;
    }
}
let student_list = [];
function add_student(student_list) {
    let id = student_list.length + 1;
    let age = 16;
    let email = "bak@gmail.com";
    let student = new Student(id, age, email);
    student_list.push(student);
}
function display_students(student_list) {
    student_list.forEach((student) => console.log(`ID:${student.id},Age:${student.age},Email:${student.email}`));
}
add_student(student_list);
add_student(student_list);
add_student(student_list);
display_students(student_list);
//# sourceMappingURL=baitap2.js.map