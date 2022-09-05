(() => {

    const calcularTotal = (precios: number[]): number => {
        let total = 0;
        precios.forEach((precio) => {
            total += precio;
        });
        return total;
    }

    const total = calcularTotal([100, 200, 300, 400, 500]);
    console.log(total);

    const printTotal = (precios: number[]) => {
        const total = calcularTotal(precios);
        console.log(`El total es: ${total}`);
    }

    printTotal([100, 200, 300, 400, 500]);

})();