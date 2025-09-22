"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Circle {
    radius;
    constructor(radius) {
        this.radius = radius;
    }
    calculate_area() {
        return Math.PI * 2 * this.radius;
    }
    calculate_perimeter() {
        return Math.PI * this.radius;
    }
}
class Rectangle {
    _width;
    heigth;
    constructor(_width, heigth) {
        this._width = _width;
        this.heigth = heigth;
    }
    calculate_area() {
        return (this._width + this.heigth) * 2;
    }
    calculate_perimeter() {
        return this._width * this.heigth;
    }
}
let circle = new Circle(5);
let rectangle = new Rectangle(10, 4);
console.log(circle.calculate_area(), circle.calculate_perimeter(), rectangle.calculate_area(), rectangle.calculate_perimeter());
//# sourceMappingURL=baitap4.js.map