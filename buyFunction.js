let changeAmount;

let sub = (paid, item) =>{
    let changeAmount;
    changeAmount = (paid-item)
    console.log(changeAmount);

    while (changeAmount > .001) {
        if (changeAmount >= 100) {
            console.log("$100 dollar bill ");
            changeAmount -= 100;
        } else if (changeAmount >= 50) {
            console.log("$50 dollar bill");
            changeAmount -= 50;
        } else if (changeAmount >= 20) {
            console.log("$20 dollar bill");
            changeAmount -= 20;
        } else if (changeAmount >= 10) {
            console.log("$10 dollar bill");
            changeAmount -= 10;
        } else if (changeAmount >= 5) {
            console.log("$5 dollar bill");
            changeAmount -= 5;
        } else if (changeAmount >= 1) {
            console.log("$1 dollar bill");
            changeAmount -= 1;
        } else if (changeAmount >= .25) {
            console.log("$.25 quarters");
            changeAmount -= .25;
        } else if (changeAmount >= .10) {
            console.log("$.10 dime");
            changeAmount -= .10;
        } else if (changeAmount >= .5) {
            console.log("$.05 Nickel");
            changeAmount -= .05;
        } else if (changeAmount >= .1) {
            console.log("$.01 Penny");
            changeAmount -= .01;
        } else {
            return
            //console.log("thats it");
        }

    }

}
sub(200, 27.68)