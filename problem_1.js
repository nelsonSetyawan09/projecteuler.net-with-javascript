function multiples3And5(num){
    let result = 0;
    for (let i=1; i<num; i++){
        if(i%3==0 || i%5==0) result +=i;
    }
    return result;
}

console.log(multiples3And5(1000));  // 233168
