"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Book {
    id;
    title;
    author;
    stock;
    status;
    constructor(id, title, author, stock, status) {
        this.id = id;
        this.title = title;
        this.stock = stock;
        this.author = author;
        this.status = status;
    }
}
class Lended_book {
    member_id;
    book_id;
    due_date;
    constructor(member_id, book_id, due_date) {
        this.member_id = member_id;
        this.book_id = book_id;
        this.due_date = due_date;
    }
}
class Member {
    id;
    _name;
    contact;
    lended_books;
    status;
    constructor(id, _name, contact, lended_books, status) {
        this.id = id;
        this._name = _name;
        this.contact = contact;
        this.lended_books = [];
        this.status = status;
    }
}
class Library {
    books;
    members;
    constructor() {
        this.books = [];
        this.members = [];
    }
    add_book(book) {
        this.books.push(book);
    }
    show_books() {
        this.books.forEach(book => {
            console.log(book);
        });
    }
}
let book1 = new Book("B001", "The Great Gatsby", "F. Scott Fitzgerald", 5, "available");
let book2 = new Book("B002", "1984", "George Orwell", 3, "available");
let book3 = new Book("B003", "To Kill a Mockingbird", "Harper Lee", 2, "available");
let myLibrary = new Library();
myLibrary.add_book(book1);
myLibrary.add_book(book2);
myLibrary.add_book(book3);
myLibrary.show_books();
//# sourceMappingURL=baitap8.js.map