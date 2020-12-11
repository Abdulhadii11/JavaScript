function calculateTips(bill){
  if(bill<50){
    return bill*0.2;
  }else if(bill<200){
    return bill*0.15;
  }else {return bill*0.1}
}
console.log(calculateTips(300));

function getTotalTips(){
  let totalTips=calculateTips(124)+calculateTips(48)+calculateTips(75)+calculateTips(278);
return totalTips;
}
console.log(getTotalTips());

function budgetDust(){
  return 750-getTotalTips()-(124+48+75+268);
}
 console.log(budgetDust());


function warn(){
  return 700*0.2>=budgetDust ? "Hold on":"Still OK"
}
console.log(warn());