function isPrime(number) {
    if (number <= 1) {
      return "not a prime number";
    } 
    for (let i = 2; i <= number/2; i++) {
      if (number % i == 0) {
        return "not a prime number";
      }
    }
    return "is a prime number";
  }

function fibonacciSum(number) {
    if (number <= 0) {
      return 0;
    }
    let fibSeries = [0, 1];
    let sum = 1;
    for (let i = 2; i <= number; i++) {
      fibSeries[i] = fibSeries[i - 1] + fibSeries[i - 2];
      sum += fibSeries[i];
    }
    return sum;
  }


function countEvenOddZero(arr) {
    let evenCount = 0;
    let oddCount = 0;
    let zeroCount = 0;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 0) {
        zeroCount++;
      } else if (arr[i] % 2 === 0) {
        evenCount++;
      } else {
        oddCount++;
      }
    }
    return {
      even: evenCount,
      odd: oddCount,
      zero: zeroCount
    };
}

function functionGenerator(choice){
    switch(choice){
        case "isPrime":return["prime number is ",isPrime]
        case "fibonacciSum":return["fibonacci series is ",fibonacciSum]
        case "countEvenOddZero":return["odd and even ",countEvenOddZero]
        default:return["invalid",null]
    }
}

let[message, checkPrime]=functionGenerator('isPrime') 
let x= checkPrime (7) 
console.log(x)

let[mess, checkFibo]=functionGenerator('fibonacciSum') 
let y= checkFibo (7) 
console.log(y)

let[m, checkCount]=functionGenerator('countEvenOddZero') 
let z= checkCount ([1,2,3,0,0,3,4,0])
console.log(z)
