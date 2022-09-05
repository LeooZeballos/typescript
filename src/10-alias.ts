(() => {

    type UserID = number | string | boolean;
    let userId: UserID;

    function greeting(userId: UserID) {
        if (typeof userId === 'number') {
            console.log(`Hello ${userId}`);
        } else if (typeof userId === 'string') {
            console.log(`Hello ${userId.toUpperCase()}`);
        } else {
            console.log(`Hello ${userId}`);
        }
    }


    // Literal types
    type Sizes = 'S' | 'M' | 'L' | 'XL';
    let shirtSize: Sizes;

    shirtSize = 'S';
    shirtSize = 'M';
    shirtSize = 'L';
    shirtSize = 'XL';


})();