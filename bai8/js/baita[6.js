"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function findElement(input, value) {
    return input.find(element => element === value) ?? undefined;
}
console.log(findElement([1, 3, 5, 6], 3));
console.log(findElement([1, 3, 5], 6));
//# sourceMappingURL=baita%5B6.js.map