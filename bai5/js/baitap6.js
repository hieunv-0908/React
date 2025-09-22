"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Book {
    title;
    author;
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
}
class Library {
    books;
    constructor(books) {
        this.books = books;
    }
}
let book1 = new Book("Những ngôi sao xa xôi", "Lê Minh Khuê");
let book2 = new Book("Lão Hạc", "Nam Cao");
let book3 = new Book("Chí Phèo", "Nam Cao");
let book4 = new Book("Lửa thiêng", "Huy Cận");
let book5 = new Book("Kinh cầu tự", "Huy Cận");
let library1 = new Library([]);
library1.books.push(book1);
library1.books.push(book2);
library1.books.push(book3);
library1.books.push(book4);
library1.books.push(book5);
library1.books.forEach((book) => console.log(book));
//# sourceMappingURL=baitap6.js.map