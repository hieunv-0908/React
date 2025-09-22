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
    register_member(member) {
        this.members.push(member);
    }
    block_member(id_search) {
        if (!this.members.length) {
            return `Không có thành viên nào trong danh sách thành viên cả`;
        }
        else {
            this.members.forEach(member => {
                if (member.id === id_search) {
                    if (!member.status) {
                        member.status = true;
                    }
                    else {
                        member.status = false;
                    }
                    return `Đã thay đổi thành công.`;
                }
            });
        }
        return `Không tìm thấy id trong danh sách thành viên.`;
    }
    show_members() {
        this.members.forEach(member => {
            console.log(member);
        });
    }
}
let book1 = new Book("B001", "The Great Gatsby", "F. Scott Fitzgerald", 5, "available");
let book2 = new Book("B002", "1984", "George Orwell", 3, "available");
let book3 = new Book("B003", "To Kill a Mockingbird", "Harper Lee", 2, "available");
let member1 = new Member("M001", "Nguyễn Văn A", "a.nguyen@example.com", [], true);
let member2 = new Member("M002", "Trần Thị B", "b.tran@example.com", [], true);
let member3 = new Member("M003", "Lê Văn C", "c.le@example.com", [], false);
let member4 = new Member("M004", "Phạm Thị D", "d.pham@example.com", [], true);
let member5 = new Member("M005", "Hoàng Văn E", "e.hoang@example.com", [], true);
let myLibrary = new Library();
myLibrary.add_book(book1);
myLibrary.add_book(book2);
myLibrary.add_book(book3);
myLibrary.register_member(member1);
myLibrary.register_member(member2);
myLibrary.register_member(member3);
myLibrary.register_member(member4);
myLibrary.register_member(member5);
myLibrary.block_member("M003");
myLibrary.show_books();
myLibrary.show_members();
//# sourceMappingURL=baitap9.js.map