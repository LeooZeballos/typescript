(() => {

    let prices = [10, 20, 30, 2, 5, 8];
    prices.push(100);
    console.log('prices: ', prices);

    let product = ['T-Shirt', 100, true];
    product.push('100% cotton');
    console.log('product: ', product);

    let mixed: (number | string | boolean)[] = [10, 'Hello', true];
    mixed.push(20);
    mixed.push('World');
    mixed.push(false);
    console.log('mixed: ', mixed);

    let numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let numbers2 = numbers1.map((n) => n * 2);
    console.log('numbers: ', numbers1);
    console.log('numbers2: ', numbers2);


})();