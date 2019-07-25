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

for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i + " FizzBuzz");
    }
    else if (i % 3 === 0) {
        console.log(i + " Fizz");
    }
    else if (i % 5 === 0) {
        console.log(i + " Buzz");
    }
    else {
        console.log(i);
    }
}

// 5- Even and Odd Numbers

showNumbers(10);
function showNumbers(limit){
    for (let i = 1; i <= limit; i++){
        const message = (i % 2 ===0 ) ? 'Even ' : 'ODD';
        console.log(i, message);
    }
}

// Average grade

var students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];

var Avgmarks = 0;

for (var i = 0; i < students.length; i++) {
    Avgmarks += students[i][1];
    var avg = (Avgmarks / students.length);
}

console.log("Average grade: " + (Avgmarks) / students.length);

if (avg < 60) {
    console.log("Grade : F");
}
else if (avg < 70) {
    console.log("Grade : D");
}
else if (avg < 80) {
    console.log("Grade : C");
} else if (avg < 90) {
    console.log("Grade : B");
} else if (avg < 100) {
    console.log("Grade : A");
}

// triangle 
for (let i = "*"; i.length < 6; i += "*") console.log(i);