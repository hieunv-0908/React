"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vahicle {
    name_vahicle;
    year;
    company;
    id;
    constructor(name_vahicle, year, company) {
        this.name_vahicle = name_vahicle;
        this.year = year;
        this.company = company;
        this.id = `B24DTCN${Math.floor(Math.random() * (500 - 100) + 100)}`;
    }
}
let vahicle = new Vahicle("Honda Civic", 2021, "Honda");
// console.log(vahicle.id, vahicle.name_vahicle, vahicle.company, vahicle.year);
// vẫn có thể in được nhưng year với company trong quá trình viết xuất hiện báo lỗi do khôgn thể truy cập ở ngoài do nó là protected và private
//# sourceMappingURL=baitap4.js.map