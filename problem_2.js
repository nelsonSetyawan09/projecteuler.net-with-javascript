function fibonacciNumber(){
    let j = 1;
    let k = 2;
    let result = 0;
    while( k<4000000){
        [j,k] = [k, j+k];
        if(k%2==0){
            result +=k;
        }
    }
    return result;
}

console.log(fibonacciNumber())  // 4613730  4613732
