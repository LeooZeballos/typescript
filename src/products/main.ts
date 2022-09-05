import { addProduct, calcStock, products } from "./product.service";

addProduct({
    title: "T-Shirt",
    createdAt: new Date(1999, 1, 1),
    stock: 10,
    size: "XL"
});

addProduct({
    title: "Pants",
    createdAt: new Date(1999, 1, 1),
    stock: 10,
    size: "L"
});

console.log(products);
console.log(calcStock());
