// create variables containing strings
const quote1='Beware of what you become in pursuit of what you want. - Jim Rohn'
const quote2='It\'s not what happens to you, but how you react to it that matters. - Epictetus';
const quote3='The best revenge is massive success. - Frank Sinatra';
const quote4='You miss 100% of the shots you don\'t take. - Wayne Gretzy';
const quote5='Resentment is like drinking poison and waiting for your enemies to die. - Nelson Mandela';
const quote6='Do not take life too seriously. You will not get out alive. - Elbert Hubbard';
//Use an array to hold the value of the quotes

let quotes=[quote1,quote2,quote3,quote4,quote5,quote6];
console.log(quotes);

const sort=quotes.sort();
console.log(sort);

function random(arr){
  let random= Math.floor(Math.random()*quotes.length)
  return (arr[random]);
}
random(quotes);

const days=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
function getDay(){
  const quotess=random(quotes);
  const day=random(days);
  return `Today is ${day} and todays quote is ${quotess}`
}

console.log(getDay());
