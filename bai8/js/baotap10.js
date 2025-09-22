"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function bai10(str) {
    let max_lenght_element;
    if (typeof str === "string") {
        let str_temp = str.split("/\s+/");
        for (let index = 0; index < str_temp.length; index++) {
            let element = str_temp[index];
            max_lenght_element = str_temp[index];
            element = [...new Set(element)].join("");
            if (element.length > max_lenght_element.length) {
                max_lenght_element = element;
            }
        }
    }
    return max_lenght_element;
}
console.log(bai10("hello world apple banana orange pumpkin cucumber"));
//# sourceMappingURL=baotap10.js.map