// #1: Count the odd integers in an array

const arrayOfIntegers = [1, 4, 5, 9, 0, -1, 5];
            // using an if-statement:
// let counter = 0;
// arrayOfIntegers.forEach((integer) => {
//     const remainder = Math.abs(integer % 2);
//     if (remainder === 1) {
//         counter++;
//     }
// });
// console.log(counter);
        // solution without if-statements:
let counter = 0;
arrayOfIntegers.forEach((integer) => {
    const remainder = Math.abs(integer % 2);
    counter += remainder;
});
console.log(counter);

// #2: The weekendOrWeekday function
// const weekendOrWeekday = (inputDate) => {
//     const day = inputDate.getDay();
//     if (day === 0 || day === 6) {
//         return 'weekend';
//     }

//     return 'weekday';
//     // Or, for ternary fans:
//     // return (day === 0 || day === 6) ? 'weekend' : 'weekday';
// };
// console.log(weekendOrWeekday(new Date()));
        // solution without if-statements:
const weekendOrWeekday = (inputDate) => {
    const day = inputDate.getDay();
    return weekendOrWeekday.labels[day] ||
        weekendOrWeekday.labels['default'];
};
weekendOrWeekday.labels = {
    0: 'weekend',
    6: 'weekend',
    default: 'weekday'
};
console.log(weekendOrWeekday(new Date()));

// #3: The doubler function (here be dragons)
// const doubler = (input) => {
//     switch (typeof input) {
//         case 'number':
//             return input + input;
//         case 'string':
//             return input
//                 .split('')
//                 .map((letter) => letter + letter)
//                 .join('');
//         case 'object':
//             Object.keys(input)
//                 .map((key) => (input[key] = doubler(input[key])));
//             return input;
//         case 'function':
//             input();
//             input();
//     }
// };
// console.log(doubler(-10));
// console.log(doubler('hey'));
// console.log(doubler([5, 'hello']));
// console.log(doubler({ a: 5, b: 'hello' }));
// console.log(
//     doubler(function () {
//         console.log('call-me');
//     }),
// );
        // without a switch-statement:

const doubler = (input) => {
    return doubler.operationsByType[typeof input](input);
};
doubler.operationsByType = {
    number: (input) => input + input,
    string: (input) =>
        input
            .split('')
            .map((letter) => letter + letter)
            .join(''),
    function: (input) => {
        input();
        input();
    },
    object: (input) => {
        Object.keys(input)
            .map((key) => (input[key] = doubler(input[key])));
        return input;
    },
};
console.log(doubler(-10));
console.log(doubler('hey'));
console.log(doubler([5, 'hello']));
console.log(doubler({ a: 5, b: 'hello' }));
console.log(
    doubler(function () {
        console.log('call-me');
    }),
);