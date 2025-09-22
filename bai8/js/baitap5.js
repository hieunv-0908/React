"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function genericsFunction(arr) {
    return arr.find(element => element % 2 === 0) ?? undefined;
}
console.log(genericsFunction([1, 3, 5, 6]));
console.log(genericsFunction([1, 3, 5]));
//# sourceMappingURL=baitap5.js.map