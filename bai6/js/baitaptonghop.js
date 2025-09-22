"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    name;
    age;
    category;
    food_type;
    constructor(name, age, category, food_type) {
        this.name = name;
        this.age = age;
        this.category = category;
        this.food_type = food_type;
    }
    sound() {
        return "Âm thanh";
    }
    get_detail() {
        return ``;
    }
    feed() {
        console.log("Đớp");
    }
}
class Mamal extends Animal {
    fur_color;
    constructor(fur_color, name, age, category, food_type) {
        super(name, age, category, food_type);
        this.fur_color = fur_color;
    }
    move() {
        console.log("Đi");
    }
}
class Bird extends Animal {
    fur_color;
    constructor(fur_color, name, age, category, food_type) {
        super(name, age, category, food_type);
        this.fur_color = fur_color;
    }
    move() {
        console.log("Bay");
    }
}
class Reptile extends Animal {
    fur_color;
    constructor(fur_color, name, age, category, food_type) {
        super(name, age, category, food_type);
        this.fur_color = fur_color;
    }
    move() {
        console.log("Bò");
    }
}
//# sourceMappingURL=baitaptonghop.js.map