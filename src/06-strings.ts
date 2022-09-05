(() => {

    let productTitle = 'T-Shirt - 100% cotton - Size M';
    console.log('productTitle: ', productTitle);

    productTitle = 'T-Shirt - 100% cotton - Size L';
    console.log('productTitle: ', productTitle);

    const productDescription = 'This is a product description';
    console.log('productDescription: ', productDescription);

    let productPrice = 100;
    let isNew = true;

    const summary = `
        title: ${productTitle}
        description: ${productDescription}
        price: ${productPrice}
        isNew: ${isNew}
    `;

    console.log('summary: ', summary);

})();