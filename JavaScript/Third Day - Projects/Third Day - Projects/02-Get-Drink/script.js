let money=99;
let price=9;

function calcBottles(money,price,){
return Math.floor(money/price);
}
console.log(calcBottles(100,9));

let spentMoney=calcBottles(100,9)*price;
console.log(spentMoney);


function calcChange(money,spentMoney){
  return money-spentMoney;
}
console.log(calcChange(money,spentMoney));

function getDrink(numberOfBottle){
  return money-numberOfBottle*price;
  
}
console.log(getDrink(5));