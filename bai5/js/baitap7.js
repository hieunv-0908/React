"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function processInput(input) {
    if (typeof input === "boolean") {
        return input;
    }
    if (typeof input === "number") {
        return input ** 2;
    }
    if ([...input].every(number => /[0-9]/.test(number))) {
        return Number(input) ** 2;
    }
    else {
        let count = 0;
        [...input].forEach((char) => {
            if (/[a-zA-Z]/.test(char))
                count++;
        });
        return count;
    }
}
console.log(processInput("123"));
//# sourceMappingURL=baitap7.js.map