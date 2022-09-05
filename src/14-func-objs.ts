(() => {

    type Sizes = 'S' | 'M' | 'L' | 'XL';
    type Product = {
        title: string,
        createdAt: Date,
        stock: number,
        size?: Sizes
    }

    const login = (data: {email: string, password: number}) => {
        return {
            email: data.email,
            password: data.password
        };
    }

    login({email: 'me@example.com', password: 123456});

    const products: any[] = [];

    const addProduct = (data: Product) => {
        products.push(data);
    }

    addProduct({
        title: 'T-Shirt',
        createdAt: new Date(1999, 1, 1),
        stock: 10,
        size: 'XL'
    });

    console.log(products);

})();