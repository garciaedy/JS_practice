
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