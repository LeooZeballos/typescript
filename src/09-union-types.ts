(() => {

    let myDynamicVar: string | number;

    myDynamicVar = 10;
    myDynamicVar = 'Hello';

    function showVar(myVar: string | number) {
        if (typeof myVar === 'number') {
            console.log(myVar.toFixed(2));
        } else {
            console.log(myVar.toUpperCase());
        }
    }

    showVar(10);
    showVar('Hello');

})();