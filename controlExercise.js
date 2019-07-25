//  Exercise 1- Max of Two Numbers
let number = max(3,2)
console.log(number)

function max(a, b){
    return (a, b) ? a : b;
}
// Reverse a number
function reverse_a_number(n) {
    n = n + "";
    return n.split("").reverse().join("");
}
console.log(reverse_a_number(32243));

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

//  Generate a random hexadecimal color

const random_hex_color_code = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
};

// Round a number to a specified amount of digits
console.log(random_hex_color_code())

const round = (n, decimals = 0) => Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`);

console.log(round(1.005, 2));
console.log(round(1.05, 2));
console.log(round(1.0005, 2));

// Reverse the order of the characters in the string
const reverseString = str => [...str].reverse().join('');

console.log(reverseString('php'));
console.log(reverseString('foobar'));

// Write a JavaScript program that takes a predicate and array, like Array.filter(), but only keeps x if pred(x) === false.

const reject = (pred, array) => array.filter((...args) => !pred(...args));

console.log(reject(x => x % 2 === 0, [1, 2, 3, 4, 5]));

console.log(reject(word => word.length > 4, ['Apple', 'Pear', 'Kiwi', 'Banana']));

// Write a JavaScript function that checks whether a passed string is palindrome or not? 

function check_Palindrome(str_entry) {
    // Change the string into lower case and remove  all non-alphanumeric characters
    var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '');
    var ccount = 0;
    // Check whether the string is empty or not
    if (cstr === "") {
        console.log("Nothing found!");
        return false;
    }
    // Check if the length of the string is even or odd 
    if ((cstr.length) % 2 === 0) {
        ccount = (cstr.length) / 2;
    } else {
        // If the length of the string is 1 then it becomes a palindrome
        if (cstr.length === 1) {
            console.log("Entry is a palindrome.");
            return true;
        } else {
            // If the length of the string is odd ignore middle character
            ccount = (cstr.length - 1) / 2;
        }
    }
    // Loop through to check the first character to the last character and then move next
    for (var x = 0; x < ccount; x++) {
        // Compare characters and drop them if they do not match 
        if (cstr[x] != cstr.slice(-1 - x)[0]) {
            console.log("Entry is not a palindrome.");
            return false;
        }
    }
    console.log("The entry is a palindrome.");
    return true;
}
check_Palindrome('madam');
check_Palindrome('nurses run');
check_Palindrome('fox');
            // or
function paliCheck(str) {

    // removes spaces in the string 
    let str1 = str.replace(/\s/g, '');

    // reverses string 
    let str2 = str1.split('').reverse().join('');

    // compares original and reversed string
    let result = str1 == str2 ? console.log(str + ' is a palindrome') : console.log(str + ' is not a palindrome')
}

paliCheck("madam");
paliCheck("airplane");
paliCheck("nurses run");
paliCheck("mom");
paliCheck("race car");
// or
function checkPal(word) {
    if (typeof word === "string")
        return word.toLowerCase() === word.toLowerCase().split("").reverse().join("");
    else {
        return "Please enter a string."
    }
}

console.log(checkPal("Racecar"));
/* true */
console.log(checkPal("racecar"));
/* true */
console.log(checkPal("race"));
/* false*/
console.log(checkPal(12345));
/* Please enter a string.*/

//or
function palindrome(str) {
    str = str.replace(' ', '');
    return str === str.split('').reverse().join('');
}

// Write a JavaScript function that generates all combinations of a string.
// Example string: 'dog' 

function combinaciones(str) {
    let final = [];
    str.split('').forEach((e, i) => {
        let idx = i + 1;
        while (str.length >= idx) {
            final.push(str.slice(i, idx));
            idx++;
        }
    });
    return final.join(',');
}

console.log(combinaciones('dog'));
        // or

function substrings(str1) {
    var array1 = [];
    for (var x = 0, y = 1; x < str1.length; x++ , y++) {
        array1[x] = str1.substring(x, y);
    }
    var combi = [];
    var temp = "";
    var slent = Math.pow(2, array1.length);

    for (var i = 0; i < slent; i++) {
        temp = "";
        for (var j = 0; j < array1.length; j++) {
            if ((i & Math.pow(2, j))) {
                temp += array1[j];
            }
        }
        if (temp !== "") {
            combi.push(temp);
        }
    }
    console.log(combi.join("\n"));
}

substrings("dog");

// Write a JavaScript function that returns a passed string with letters in alphabetical order.
// Example string: 'webmaster' 

function ordenarStr(str) {
    return str.split('').sort().join('');
}
// OR
function alphabet_order(str) {
    return str.split('').sort().join('');
}
console.log(alphabet_order("webmaster"));


// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
// Example string: 'the quick brown fox'
// Expected Output: 'The Quick Brown Fox '
function uppercase(str) {
    var array1 = str.split(' ');
    var newarray1 = [];

    for (var x = 0; x < array1.length; x++) {
        newarray1.push(array1[x].charAt(0).toUpperCase() + array1[x].slice(1));
    }
    return newarray1.join(' ');
}
console.log(uppercase("the quick brown fox"));
// OR

function capitalizze(str) {
    let strs = str.split(' ');
    return strs.map(e => {
        return e.charAt(0).toUpperCase() + e.slice(1);
    }).join(' ');
}