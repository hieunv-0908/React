const product = [
    {name:"A", price: 100, discount: 0.1, quantity: 2},
    {name:"B", price: 200, discount: 0.2, quantity: 1, bulk_discount: {min_quantity:2, extra_discount: 0.05}},
    {name:"C", price: 300, discount: 0, quantity: 3, bulk_discount: { min_quantity:3, extra_discount: 0.1}},
]

const getOrderSummary = (products)=>{
    let total_bill = products.reduce((acc,curr)=>acc+=curr.price * curr.quantity,0);
    let total_after_discount = Math.round(products.reduce((acc,curr)=> {
        let price = curr.price;
        let discount = curr.discount??0;
        let extra_discount = 0;
        if(curr.bulk_discount && (curr.quantity??0) >= curr.bulk_discount.min_quantity) extra_discount = curr.bulk_discount.extra_discount ?? 0;
        return acc + (price * (1-discount) * (1- extra_discount) * curr.quantity); 
    } , 0));
    console.log(total_after_discount);
    
    const bill = {total_bill: undefined,total_after_discount: undefined,details:[{name_product_buy:undefined,final_price:undefined,quantity:undefined,subtotal:undefined}]};
    product.reduce((acc,curr)=>{
        bill.total_bill = total_bill;
        bill.total_after_discount = total_after_discount;
        bill.name_product_buy = curr.name;
        
    })


} 

getOrderSummary(product)