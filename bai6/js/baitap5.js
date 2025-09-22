"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vahicle {
    speed;
    constructor() {
        this.speed = 0;
    }
    speed_up() {
        return this.speed += 2;
    }
    slow_down() {
        return this.speed -= 2;
    }
    stop() {
        return this.speed = 0;
    }
}
let motobyce = new Vahicle;
console.log(motobyce.speed_up(), motobyce.slow_down(), motobyce.stop());
//# sourceMappingURL=baitap5.js.map