"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    _name;
    _id;
    constructor(_name, id) {
        this._name = _name;
        this._id = id;
    }
    get id() {
        return this._id;
    }
}
let list_students = [];
class class_room {
    students_class_room;
    constructor() {
        this.students_class_room = [];
    }
    show_student() {
        this.students_class_room.forEach(student => {
            console.log(student);
        });
    }
    add_student(name_add, id_add) {
        this.students_class_room.push(new Student(name_add, id_add));
    }
    filter_student(search_id_student) {
        this.students_class_room.forEach(student => {
            if (student.id === search_id_student)
                console.log(student);
        });
    }
    add_student_class() {
        if (!list_students.length) {
            console.log("Danh sách toàn học sinh không còn học sinh nào");
        }
        else {
            this.students_class_room.push(list_students.pop());
        }
    }
}
const s1 = new Student("An", "S001");
const s2 = new Student("Bình", "S002");
const s3 = new Student("Chi", "S003");
const s4 = new Student("Dũng", "S004");
const s5 = new Student("Hà", "S005");
const s6 = new Student("Khôi", "S006");
list_students.push(s1, s2, s3, s4, s5, s6);
const roomA = new class_room();
const roomB = new class_room();
roomA.add_student("Dũng", "S004");
roomA.add_student("Hà", "S005");
roomA.add_student("Chi", "S003");
roomB.add_student("An", "S001");
roomB.add_student("Bình", "S002");
roomB.add_student("Khôi", "S006");
//# sourceMappingURL=baitap6.js.map