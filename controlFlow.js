//hour if the hour is 6am and 12pm good morning 
//if it is between 12pm and 6pm good afternoon 
//structure
    // if(condition){
    // statement
    // }else if{
    //     (anotherCondition)
    // }else if(yetAnotherConditon)
    // statement
    // else
    // statement

    let hour = 10;

    if(hour >=6 && hour < 12)
        console.log('Good Morning');
    else if(hour >= 12 && hour <18)
        console.log('good afternoon');
    else 
    console.log('Good Evening');    

    //For loops

    for (let i =0; i <=5; i++ ){
        console.log('Hello World', i)
    }

for (let i = 0; i <= 5; i++) {
    if (i %2 !==0) console.log(i)
}
//reverse 
for (let p = 5; p >= 1; p--) {
    if (p % 2 !== 0) console.log(p)
}

//while loop have to declare variable

let e = 0;
while(e <= 10){
    if (e % 2 !== 0) console.log(e)
    e++;
}

//do while loops

let w = 0;
do {
    if(w % 2 !== 0) console.log(w)
    w++
}while(w <=15);

//for in loop

const person ={
    name: 'Peter',
    age: 23,
    favoriteColor: 'Red',
    food: 'Seafood'
};
for(let key in person)
console.log(key, person[key])

const colors = ['red', 'green','blue'];
// for (let index in colors)
// console.log(index, colors[index]);
        //OR
for (let color of colors)
console.log(color);

