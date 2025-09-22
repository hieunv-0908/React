"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Rectangel {
    _width;
    _heigth;
    constructor(_width, heigth) {
        this._width = _width;
        this._heigth = heigth;
    }
    get width() {
        return this._width;
    }
    get heigth() {
        return this._heigth;
    }
    set width(value) {
        if (value >= 0) {
            this._width = value;
        }
        else {
            console.log("Số cần thay đổi nhỏ hơn 0.");
        }
    }
    set heigth(value) {
        if (value >= 0) {
            this._heigth = value;
        }
        else {
            console.log("Số cần thay đổi nhỏ hơn 0.");
        }
    }
    S() {
        return this._width * this._heigth;
    }
    V() {
        return 2 * (this._width * this._heigth);
    }
}
let rectangel = new Rectangel(5, 14);
console.log(rectangel.width, rectangel.heigth, rectangel.S(), rectangel.V());
//# sourceMappingURL=baitap5.js.map