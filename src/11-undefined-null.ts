(() => {

    // let myNumber: number = undefined;
    // let myString: string = null;

    let myNull: null = null;
    let myUndefined: undefined = undefined;

    let myNumber: number | null = 123;
    myNumber = null;

    function hi(name: string | null) {
        let message = `Hi`;
        message += " " + name?.toLowerCase();
        console.log(message);
    }

    hi('Ricardo');
    hi(null);

})();