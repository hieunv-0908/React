"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    name_employee;
    company;
    phone;
    constructor(name_employee, company, phone) {
        this.name_employee = name_employee;
        this.company = company;
        this.phone = phone;
    }
    printf_info() {
        console.log(`Name:${this.name_employee},Company:${this.company},Phone:${this.phone}`);
    }
}
let emplyee1 = new Employee("Hieu", "Rekeii Soft", "0328441049");
emplyee1.printf_info();
//# sourceMappingURL=baitap3.js.map