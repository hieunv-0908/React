"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Book {
    id;
    title;
    author;
    year;
    constructor(id, title, author, year) {
        this.id = id;
        this.author = author;
        this.title = title;
        this.year = year;
    }
}
class Lybrary {
    books = [];
    addBook(book) {
        this.books.push(book);
    }
    getBook(id) {
        return this.books.find(book => book.id === id);
    }
    removeBook(id) {
        this.books = this.books.filter(book => book.id !== id);
    }
    updateBook(id, updatedBook) {
        for (const index in this.books) {
            if (this.books[index]?.id === id) {
                this.books[index] = updatedBook;
            }
        }
    }
    listBooks() {
        return this.books;
    }
    findBooksByTitleOrAuthor(searchTerm) {
        return this.books.filter(book => book.title.includes(searchTerm) || book.author.includes(searchTerm));
    }
    getTotalBooks() {
        return this.books.length;
    }
    findBooksByYear(year) {
        return this.books.filter(book => book.year === year);
    }
}
let library = new Lybrary();
// Thêm sách
library.addBook(new Book(1, "Clean Code", "Robert C. Martin", 2008));
library.addBook(new Book(2, "The Pragmatic Programmer", "Andrew Hunt", 1999));
library.addBook(new Book(3, "Refactoring", "Martin Fowler", 1999));
console.log("📚 Danh sách sách ban đầu:");
console.log(library.listBooks());
// Lấy sách theo ID
console.log("\n🔍 Lấy sách ID = 1:");
console.log(library.getBook(1));
// Tìm sách theo tiêu đề hoặc tác giả
console.log("\n🔍 Tìm 'Martin':");
console.log(library.findBooksByTitleOrAuthor("Martin"));
// Tìm sách theo năm xuất bản
console.log("\n📅 Sách xuất bản năm 1999:");
console.log(library.findBooksByYear(1999));
// Cập nhật sách
library.updateBook(1, new Book(1, "Clean Code (Updated)", "Robert C. Martin", 2008));
console.log("\n✏️ Sau khi cập nhật sách ID=1:");
console.log(library.listBooks());
// Xoá sách
library.removeBook(2);
console.log("\n🗑️ Sau khi xoá sách ID=2:");
console.log(library.listBooks());
// Tổng số sách
console.log("\n📊 Tổng số sách:");
console.log(library.getTotalBooks());
//# sourceMappingURL=baitaptonghop.js.map