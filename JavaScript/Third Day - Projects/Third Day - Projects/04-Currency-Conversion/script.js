function convertToUSD(pound){
return pound*1.4;
}

function convertToBRL(pound){
return 0.99*pound*5.7;
}

function abc(currency,pound){
  if(currency==='USD'){
   return convertToUSD(pound);
  }else if(currency==='BRL'){ 
    return convertToBRL(pound);
  }
}

console.log(abc('USD',60));
console.log(abc('BRL',60));
console.log(convertToUSD(10));
console.log(convertToBRL(100));