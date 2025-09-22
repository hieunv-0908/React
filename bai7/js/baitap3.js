"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    name;
    constructor(name) {
        this.name = name;
    }
    printName() {
        console.log(`Name:${this.name}`);
    }
}
class Cat extends Animal {
    constructor(name) {
        super(name);
    }
    makeNoise() {
        console.log(`Meow`);
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    makeNoise() {
        console.log(`Gaauu`);
    }
}
let cat1 = new Cat("Loki");
let dog1 = new Dog("Jonh");
cat1.printName();
cat1.makeNoise();
dog1.printName();
dog1.makeNoise();
//# sourceMappingURL=baitap3.js.map