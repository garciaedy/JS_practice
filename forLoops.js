
// prime numbers 

// for(let i = 1; i <= 20; i++){
//     if (i % 2 == 0){
//         console.log(i + "even")
//     }else if (i % 3 == 0){
//         console.log("odd" +i);
//     }else{
//         console.log('prime' +'' + i)
//     }
// }
                    // or
function isPrime(num) {
    let test = 2;
    while (test < num) {
        if (num % (test) == 0)
            return false;
        test++;
    }
    return true;

}
//even numbers 
// for(counter=0; counter <=100; counter++){
//     if(counter % 3==0){
//         console.log(counter);
//     }
// }

            // OR
    for (var x = 0; x <= 15; x++) {
        if (x === 0) {
            console.log(x + " is even");
        }
        else if (x % 2 === 0) {
            console.log(x + " is even");
        }
        else {
            console.log(x + " is odd");
        }
    }

//triangle Loop

// var triangle = '#';
// for (var i =0; i < 11; i++){
//     console.log(triangle += '#');
// }

//counter 1-10
// for (let counter = 0; counter < 10; counter ++){
//     console.log(counter);
// }

// for(var i=1; i<=7; i++){
//     for(var j=1; j<=1; j++){
//         console.log(j)
//     }
// }

for(let counter=0; counter<10; counter++){
    console.log("hello");
    if(counter ===1){
        
        console.log("this is one");
    }
}

// Fizz BUZZ
for (var x = 0; x <= 15; x++) {
    if (x === 0) {
        console.log(x + " is even");
    }

    else if (x % 2 === 0) {
        console.log(x + " is even");
    }
    else {
        console.log(x + " is odd");
    }
}

// Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double the absolute difference.

function difference(n) {
    if (n <= 13)
        return 13 - n;
    else
        return (n - 13) * 2;
}
console.log(difference(32))
console.log(difference(11))

// ES6 Version
function difference(n) {
    if (n <= 13)
        return 13 - n;
    else
        return (n - 13) * 2;
}
console.log(difference(32))
console.log(difference(11))
        // OR
function newDif(n) {
    return (n <= 13) ? 13 - n : (n - 13) * 2;
}

console.log(newDif(33))
console.log(newDif(9))

// Write a JavaScript program check if a given positive number is a multiple of 3 or a multiple of 7.
function test37(x) {
    if (x % 3 == 0 || x % 7 == 0) {
        return true;
    }
    else {
        return false;
    }
}

console.log(test37(12));
console.log(test37(14));
console.log(test37(10));
console.log(test37(11));