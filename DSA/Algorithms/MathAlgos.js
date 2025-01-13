//////////////////Fibonacci Sequence//////////////O(n)
// function fib(n){
//     let fi = [0,1]
//     for(let i=2;i<n;i++){
//         fi[i]=fi[i-1]+fi[i-2]
//     }
//     return fi
// }
// console.log(fib(7))

/////////////////Factorial of a number////////////O(n)
// function factorial(n){
//     let output=1
//     for(let i=2;i<=n;i++){
//         output*=i
//     }
//     return output
// }
// console.log(factorial(4))

///////////////Prime number/////////////////////O(n)
// function prime(n){
//     if(n<=1){
//         return false
//     }
//     for(let i =2;i<Math.sqrt(n);i++){
//         if(n%i===0){
//             return false
//         }
//     }
//     return true
// }
// console.log(prime(1))
// console.log(prime(5))
// console.log(prime(4))

///////////////Power of 2/////////////////////O(log n)
// function powerOf2(n){
//     if(n<1){
//         return false
//     }
//     while(n>1){
//         if(n%2!==0){
//             return false
//         }
//         n = n/2
//     }
//     return true
// }

///////////Bitwise power of 2////////////
// function isPowerOf2Bitwise(n){
//     if(n<1){
//         return false
//     }
//     return (n & (n-1)) === 0
// }
// console.log(isPowerOf2Bitwise(5))