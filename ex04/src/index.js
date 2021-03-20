function sumFibonacci(num){
    var fib, fib1 = 1, fib2 = 0;
    if(num < 0){
        return 0;

    }else if (num <= 1){
        return 1;
       


    }else {
        for (var i = 1; i < num; i++) {
            fib = fib1 + fib2;
            fib2 = fib1;
            fib1 = fib;

        }
        return fib;
        
    }
    
}


console.log(sumFibonacci(1));
console.log(sumFibonacci(10));
console.log(sumFibonacci(20));
console.log(sumFibonacci(4));
console.log(sumFibonacci(-5));

module.exports = sumFibonacci;