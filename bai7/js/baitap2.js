"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vahicle {
    name;
    speed;
    id;
    constructor(name, speed, id) {
        this.name = name;
        this.id = id;
        this.speed = speed;
    }
    slow_down() {
        this.speed -= 1;
    }
    speed_up() {
        this.speed += 1;
    }
    show_speed() {
        console.log(`Speed: ${this.speed}`);
    }
}
class Bicycle extends Vahicle {
    gear;
    constructor(gear, name, speed, id) {
        super(name, speed, id);
        this.gear = gear;
    }
    show_info() {
        console.log(`
            Name:${this.name}
            Speed:${this.speed}
            Id:${this.id}
            Gear:${this.gear}    
        `);
    }
}
let bcl1 = new Bicycle(4, "Xe đạp phượng hoàng", 0, "BCL001");
bcl1.speed_up();
bcl1.show_speed();
bcl1.slow_down();
bcl1.show_speed();
bcl1.show_info();
//# sourceMappingURL=baitap2.js.map