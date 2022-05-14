function Greet(name){
    console.log(`hello ${name }buddy`)
}

function RecursiveFibonacci(n){
    if(n===0)return 0;
    if(n===1) return 1;
    return RecursiveFibonacci(n-2) + RecursiveFibonacci(n-1)
}

function recursiveFactorial(n) {
    if (n === 0) return 1;
    return n * recursiveFactorial(n - 1);
  }

  function isEven(n) {
    // TODO your code goes here
    return(n%2 === 0)
  }