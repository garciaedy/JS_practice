// let firstName = 'Edy'
// let lastName = 'Garcia'

// let greeting = `Hello, my name is ${firstName} ${lastName}`
// console.log(greeting); 

// function greeting(firstName, lastName) {
//     let message = `Hello ${firstName} ${lastName}`;
//     return message;
// }

var user = { name: 'Edy', email: "edy@example.com" };
var item = { quantity: 4, price: 15 };

var message = `Name: ${user.name}
Email: ${user.email}
-----
Total price: ${item.quantity * item.price}`;

console.log(message);