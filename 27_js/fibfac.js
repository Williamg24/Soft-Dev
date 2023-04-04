// Team Phantom Tollbooth :: William Guo, Craig CHen
// SoftDev pd2
// K27 -- Basic functions in JavaScript
// 2023-04-04t
// --------------------------------------------------


// as a duo...
// pair programming style,
// implement a fact and fib fxn


//Do whatever you think is needed. Think: S I M P L E.   Think: S M A R T.

function fact(n) {
    if (n == 0){
        return 1;
    }
    return (n * fact(n-1))
}

// fact testcases
console.log(fact(1)) //"...should be  1"
console.log(fact(2)) //...should be  2"
console.log(fact(3)) //"...should be  6"
console.log(fact(4)) //"...should be  24"
console.log(fact(5)) //"...should be  120")

function fib(n) {
    if (n == 0){
        return 0;
    }
    if (n == 1){
        return 1;
    }
    return fib(n - 1) + fib(n - 2);
}

// fib testcases
console.log(fib(0)) //"...should be  0"
console.log(fib(1)) //;"...should be  1"
console.log(fib(2)) //;"...should be  1"
console.log(fib(3)) //;"...should be  2"
console.log(fib(4)) //;"...should be  3"