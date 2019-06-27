//comparison

let x =1
 //relational

 console.log(x >0);
 console.log(x >=1);
 console.log(x <1);
 console.log(x <=1);

 //equality
 console.log(x===1);
 console.log(x !==1);


 // Ternary Operator 
 
 let points = 110;
 let type = points > 100 ? 'gold' : 'silver';
 console.log(type)


//logical operator
        // logical and &&
        //Returns TRUE if both operands are TRUE
let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;

console.log(eligibleForLoan);

//logical || OR
// Returns TRUE if one of the conditions is true

let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome || goodCreditScore;

console.log('Eligible',eligibleForLoan);

//not !

let applicationRefused = !eligibleForLoan
console.log('Application Refused',eligibleForLoan)
