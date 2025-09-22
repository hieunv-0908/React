"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function partialUpdate(ob1, ob2) {
    return Object.assign(ob1, ob2);
}
console.log(partialUpdate({ name: 'Alice', age: 30, job: 'Developer' }, { age: 31 }));
console.log(partialUpdate({ name: 'Alice', age: 30, job: 'Developer' }, { name: 'Bob', job: 'Designer' }));
//# sourceMappingURL=baitap8.js.map