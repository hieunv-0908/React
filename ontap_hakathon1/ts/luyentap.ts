import promptSync from "prompt-sync";
const prompt = promptSync();

// lớp khách hàng
    class Customer{
        id:number;
        name:string;
        email:string;
        shippingAddresss:string;
        constructor(id:number,name:string,email:string,shippingAddress:string) {
            this.id = id;
            this.name = name;
            this.email = email;
            this.shippingAddresss = shippingAddress;
        }
        getDetail(){
            return `ID:${this.id},Name:${this.name},Email:${this.email},Address:${this.shippingAddresss}`
        }
    }

    // lớp sản phẩm
    abstract class Product{
        id:number;
        name:string;
        price:number;
        stock:number;
        constructor(id:number,name:string,price:number,stock:number) {
            this.id = id;
            this.name = name;
            this.price = price;
            this.stock = stock;
        }
        sell(quantity: number):void{
            this.stock -= quantity;
        }
        restock(quantity: number):void{
            this.stock += quantity;
        }
        abstract getProductInfo(): string;
        abstract getShippingCost(distance: number): number;
        abstract getCategory(): string;
    }

    // lớp sản phẩm con
    class ElectronicsProduct extends Product{
        warrantyPeriod:number;
        shippingCost:number = 50000;
        constructor(id:number,name:string,price:number,stock:number,warrantyPeriod:number) {
            super(id,name,price,stock);
            this.warrantyPeriod = warrantyPeriod;
        }
        getProductInfo(): string {
            return `ID:${this.id},Name:${this.name}Price:${this.price}Stock:${this.stock}WarrantyPeriod:${this.warrantyPeriod}`
        }
        getShippingCost(distance: number): number {
            return this.shippingCost;
        }
        getCategory(): string {
            return this.name;
        }
    }

    class ClothingProduct extends Product{
        size:string;
        color:string;
        shippingCost:number = 25000;
        constructor(id:number,name:string,price:number,stock:number,size:string,color:string) {
            super(id,name,price,stock);
            this.size = size;
            this.color = color;
        }
        
        getProductInfo(): string {
            return `ID:${this.id},Name:${this.name}Price:${this.price}Stock:${this.stock}Size:${this.size},Color:${this.color}`
        }
        getShippingCost(distance: number): number {
            return this.shippingCost;
        }
        getCategory(): string {
            return this.name;
        }
    }

    // lớp đơn hàng
    class Order{
        orderId:number;
        customer:Customer;
        products:{product:Product,quantity:number}[] = [];
        totalAmount:number;
        constructor(orderId:number,customer:Customer,totalAmount:number) {
            this.orderId = orderId;
            this.customer = customer,
            this.totalAmount = totalAmount;
        }
        getDetails():string{
            return `Id:${this.orderId},Customer:${this.customer}Product:${this.products}Total amount:${this.totalAmount}`
        }
    }

    // lớp của hàng
    class Store{
        products: Product[] = [];
        customers: Customer[] = [];
        orders: Order[] = [];
        addProduct(product: Product): void{
            this.products.push(product);
        }
        addCustomer(name: string, email: string, address: string):void{
            this.customers.push(new Customer(this.customers.length === 0 ? 1 : this.customers.length +1,name,email,address));
        }
        createOrder(customerId: number, productQuantities: { productId: number, quantity: number }[]): Order | null{
            let customer = this.customers.find(c=>c.id === customerId);
            if(!customer){
                return null;
            }
            let oderedProduct:{product:Product,quantity:number}[] = [];
            let total = 0;
            for (const element of productQuantities) {
                let product = this.products.find(p=>p.id === element.productId);
                if(product){
                    oderedProduct.push({product,quantity:element.quantity})
                    total += element.quantity * product.price;
                    product.stock -= element.quantity;
                }
            }
            let new_product = new Order(this.orders.length ? this.orders.length + 1 : 0,customer,total);
            new_product.products = oderedProduct;
            this.orders.push(new_product);
            return new_product;
        }
        cacelOrder(orderId: number):void{
            for (let i:number = 0; i < this.orders.length;i++) {
                if(this.orders[i]?.orderId === orderId){
                    this.orders[i]?.products.forEach(p=>{
                        for (const element of this.products) {
                            if(element.id === p.product.id){
                                element.stock += p.quantity;
                            }
                        }
                    })
                    this.orders.splice(i,1);
                    break;
                }
            }
        }
        listAvailableProducts(): void{
            let productPrint:Product[] = this.products.filter(p=>p.stock > 0);
            productPrint.forEach(p=>console.log(p))
        }
        listCustomerOrders(customerId: number): void{
            let orderMemberList:Order[] = this.orders.filter(o=>o.customer.id === customerId);
            orderMemberList.forEach(oml=>console.log(oml))
        }
        calculateTotalRevenue(): number{
            return this.orders.reduce((acc,os)=>{
              return acc += os.totalAmount;
            },0)
        }
    }


while(true){
    let choice = prompt(`
Chọn chức năng:
1. Thêm sản phẩm
2. Tạo đơn hàng
3. Hủy đơn hàng
4. Xem sản phẩm
5. Xem đơn hàng
0. Thoát`);
    switch (choice) {
        case "1":
            
            break;
        case "2":    
            
            break;
        case "3":
            
            break;
        case "4":
            
            break;
        case "0":
            break;
        default:
            break;
    }
    if(choice === "0") break;
}