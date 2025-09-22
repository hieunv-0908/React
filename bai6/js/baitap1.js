"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Shape {
    _name;
    constructor(_name) {
        this._name = _name;
    }
    get name_() {
        return this._name;
    }
}
class Rectangdle extends Shape {
    _width;
    heigth;
    constructor(_width, heigth, _name) {
        super(_name ?? "Không có thông tin gì");
        this._width = _width;
        this.heigth = heigth;
    }
    get size() {
        return { width: this._width, heigth: this.heigth };
    }
}
let rectangdle = new Rectangdle(15, 20, "Hình chữ nhật");
console.log(rectangdle.size);
//# sourceMappingURL=baitap1.js.map