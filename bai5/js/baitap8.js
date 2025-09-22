"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Product {
    id;
    _name;
    price;
    constructor(id, _name, price) {
        this.id = id;
        this._name = _name;
        this.price = price;
    }
}
class Order_item {
    product;
    quantity;
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }
}
class Order {
    order_id;
    customer_name;
    items;
    note;
    constructor(order_id, customer_name, note) {
        this.order_id = order_id;
        this.customer_name = customer_name;
        this.items = [];
        this.note = note ?? "";
    }
}
function calculateOrderTotal(order) {
    return order.items.reduce((acc, item) => {
        let product_total_price = item.quantity * item.product.price;
        return acc + product_total_price;
    }, 0);
}
function printOrder(order) {
    console.log(`
        Đơn hàng: ${order.order_id}    
        Khách hàng ${order.customer_name}
        Sản phẩm:
        ${order.items.map(item => `-${item.product._name} X ${item.quantity} --> ${item.quantity * item.product.price}`).join("\n        ")}
        Tổng Cộng :${calculateOrderTotal(order)}
        ${(order.note) ? `Ghi chú: ${order.note}` : ``}
    `);
}
let product1 = new Product("A01", "Áo sơ mi", 250);
let product2 = new Product("A02", "Quần tây", 400);
let order_item1 = new Order_item(product1, 2);
let order_item2 = new Order_item(product2, 1);
let order1 = new Order("#ORD001", "Nguyễn Văn A", "Cho một gáo nước mưa");
order1.items.push(order_item1);
order1.items.push(order_item2);
printOrder(order1);
//# sourceMappingURL=baitap8.js.map