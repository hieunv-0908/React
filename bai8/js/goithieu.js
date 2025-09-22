"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// =======================
// Lesson 02 – Generic Function
// =======================
function identity(value) {
    return value;
}
let num = identity(5); // T = number
let str = identity("Hello"); // T = string
console.log("Generic Function:", num, str);
// =======================
// Lesson 03 – Generic Class
// =======================
class Box {
    content;
    constructor(value) {
        this.content = value;
    }
    getContent() {
        return this.content;
    }
}
let numberBox = new Box(123);
let stringBox = new Box("Hello");
console.log("Generic Class:", numberBox.getContent(), stringBox.getContent());
let point = { first: 10, second: 20 };
let userPair = { first: "Alice", second: 25 };
console.log("Generic Interface:", point, userPair);
function logLength(value) {
    console.log("Length is:", value.length);
}
logLength("Hello"); // string có length
logLength([1, 2, 3]); // array có length
// logLength(123);         // ❌ number không có length
// =======================
// Lesson 06 – Generic Built-in
// =======================
// Array<T>
let numbers = [1, 2, 3];
// Promise<T>
function getData() {
    return Promise.resolve("Hello from Promise");
}
let partialUser = { name: "Alice" };
// Readonly<T>
let readonlyUser = { name: "Bob", age: 30 };
// readonlyUser.age = 31; // ❌ Không thể gán lại
console.log("Generic Built-in:", numbers, partialUser, readonlyUser);
getData().then(data => console.log("Promise Data:", data));
//# sourceMappingURL=goithieu.js.map