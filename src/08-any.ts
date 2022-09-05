(() => {

    // back to javascript?
    let myDynamicVar: any;

    myDynamicVar = 10;
    myDynamicVar = 'Hello';
    myDynamicVar = true;
    myDynamicVar = [1, 2, 3, 4, 5];
    myDynamicVar = { name: 'John', age: 30 };
    myDynamicVar = function (a: number, b: number) {
        return a + b;
    }

    console.log('myDynamicVar: ', myDynamicVar);

    myDynamicVar = 'Hello';
    const rta = (myDynamicVar as string).toUpperCase();
    console.log('rta: ', rta);

    myDynamicVar = 10;
    const rta2 = (<number>myDynamicVar).toFixed(2);
    console.log('rta2: ', rta2);


})();