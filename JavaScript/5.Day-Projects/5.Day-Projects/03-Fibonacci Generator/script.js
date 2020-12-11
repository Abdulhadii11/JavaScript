function fibonacciGen (n) {
  
    if (n===0 ) 
    {
      return [0];
    } 
    else if (n===1){
      return [0,1]
    }
    else 
    {
      let arr=[0,1]
      for (let i=2; i < n; i++){
        x=arr[i-1]+arr[i-2];
        arr.push(x);
      }
      return arr;
    }
  };
  
   console.log(fibonacciGen (0));




function fibonacciFinder (n) {
  array=fibonacciGen(n);
    return array[n-1]/array[n-2];
}
console.log(fibonacciFinder(5));



