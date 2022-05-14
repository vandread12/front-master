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

function filter(predicateFn, array) {
    if (length(array) === 0) return [];
    const firstItem = head(array);
    const filteredFirst = predicateFn(firstItem) ? [firstItem] : [];
    return concat(filteredFirst, filter(predicateFn, tail(array)));
  }

greaterThanFour = filter(n => n>4, wholes)