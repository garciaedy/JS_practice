// prime numbers 

for(let i = 1; i <= 20; i++){
    if (i % 2 == 0){
        console.log(i + "even")
    }else if (i % 3 == 0){
        console.log("odd" +i);
    }else{
        console.log('prime' +'' + i)
    }
}