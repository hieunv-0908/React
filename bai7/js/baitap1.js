"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    _name;
    _company;
    _phone;
    constructor(_name, _company, _phone) {
        this._name = _name;
        this._company = _company;
        this._phone = _phone;
    }
    print_info() {
        console.log(`Name:${this._name} Company:${this._company} Phone:${this._phone}`);
    }
}
class Manager extends Employee {
    _team_size;
    constructor(_team_size, _name, _company, _phone) {
        super(_name, _company, _phone);
        this._team_size = _team_size;
    }
    print_info() {
        console.log(`Team Size:${this._team_size}`);
    }
}
let e1 = new Employee("An", "ABC Corp", "0123456789");
e1.print_info();
let m1 = new Manager(5, "Bình", "ABC Corp", "0987654321");
m1.print_info();
//# sourceMappingURL=baitap1.js.map