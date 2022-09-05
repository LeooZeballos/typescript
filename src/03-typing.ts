// Type inference
let myProductName = 'Product 1';
console.log(myProductName.toLowerCase());
// myProductName = 100; // Error - Type '100' is not assignable to type 'string'

let myProductPrice = 100;
console.log(myProductPrice.toFixed(2));
// myProductPrice = 'Product 1'; // Error - Type 'string' is not assignable to type 'number'.

const myProductStock = 10;
console.log(myProductStock.toFixed(2));
// myProductStock = 20; // Error - Cannot assign to 'myProductStock' because it is a constant or a read-only property.

// Explicit typing
let myProductName2: string = 'Product 2';
let myProductPrice2: number = 200;