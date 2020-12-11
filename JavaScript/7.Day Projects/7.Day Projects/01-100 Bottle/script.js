
let numberOfBottles = prompt('How many bottles?');
let x= prompt('how many x?')



// while(numberOfBottles>0){                
//   console.log(numberOfBottles  +' bottle of milk on the Wall. Take one down, pass it around.')
//   numberOfBottles--;
// }


const functnTimes = (numberOfBottles,x) => {
  while (numberOfBottles > 0) {
    console.log(`${numberOfBottles} bottle of milk on the Wall. Take one down, pass it around.`);
    numberOfBottles -= x;
  }}
  functnTimes(numberOfBottles,x);