"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vehicle {
    name_vehicle;
    year;
    company;
    constructor(name_vehicle, year, company) {
        this.name_vehicle = name_vehicle;
        this.year = year;
        this.company = company;
    }
}
let toyota_vios = new Vehicle("Toyota Vios", 2022, "sedan_B");
let Mazda_CX_5 = new Vehicle("Mazda_CX_5", 2012, "SUV");
console.log(toyota_vios.name_vehicle, toyota_vios.year, toyota_vios.company);
console.log(Mazda_CX_5.name_vehicle, Mazda_CX_5.year, Mazda_CX_5.company);
//# sourceMappingURL=baitap1.js.map