"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function flatten(input, result = []) {
    for (let index = 0; index < input.length; index++) {
        let item = input[index];
        if (Array.isArray(item)) {
            flatten(item, result);
        }
        else if (item !== undefined) {
            result.push(item);
        }
    }
    return result;
}
console.log(flatten([1, [2, [3, 4], 5], 6]));
//# sourceMappingURL=baitap9.js.map