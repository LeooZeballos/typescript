(() => {

    type Sizes = 'S' | 'M' | 'L' | 'XL';

    const createProductToJson = (
        title: string,
        createdAt: Date,
        stock: number,
        size?: Sizes
    ) => {
        return {
            title,
            createdAt,
            stock,
            size
        };
    }

    const product1 = createProductToJson('T-shirt', new Date(), 10, 'XL');
    console.log(product1);
    console.log(product1.title);
    console.log(product1.createdAt);
    console.log(product1.stock);
    console.log(product1.size);


    const product2 = createProductToJson('Pant', new Date(), 10);
    console.log(product2);
    console.log(product2.title);
    console.log(product2.createdAt);
    console.log(product2.stock);
    console.log(product2.size);


})();