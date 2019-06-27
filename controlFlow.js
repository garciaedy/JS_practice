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

    