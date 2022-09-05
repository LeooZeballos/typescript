(() => {
    let productPrice = 100;
    productPrice = 200;
    console.log(productPrice);

    let customerAge: number = 20;
    console.log(customerAge);
    customerAge += 1;
    console.log(customerAge);

    let productInStock: number;
    productInStock = 10;
    console.log('productInStock: ', productInStock);

    if (productInStock > 10) {
        console.log('Is greater than 10');
    } else {
        console.log('Is less than 10');
    }

    let discount = parseInt('150');
    console.log('discount: ', discount);

    if (discount <= 200) {
        console.log('Apply');
    } else {
        console.log('Not apply');
    }

    let hex = 0xfff;
    console.log('hex: ', hex);
    let bin = 0b1010;
    console.log('bin: ', bin);

})();
