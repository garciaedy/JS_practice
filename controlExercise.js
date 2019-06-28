//  Exercise 1- Max of Two Numbers
let number = max(3,2)
console.log(number)

function max(a, b){
    return (a, b) ? a : b;
}

// Exercise 2 - Landscape or Portrait
console.log(isLandscape(800, 600))
function isLandscape(width, height){
return(width > height);

}

//3- FizzBuzz
// divisible by 3 => fizz
//divisible by 5 => buzz
//divisible by 3 n 5 fizzBuzz
// not divisible by 3 or 5  => input



// 5- Even and Odd Numbers

showNumbers(10);
function showNumbers(limit){
    for (let i = 1; i <= limit; i++){
        const message = (i % 2 ===0 ) ? 'Even ' : 'ODD';
        console.log(i, message);
    }
}