
// let scoreJohn = (189 + 120 + 103) / 3;
// let scoreMike = (129 + 94 + 123) / 3;

// function score(scoreJohn, scoreMike){
// if (scoreJohn > scoreMike) {
//     console.log('John\'s team wins with ' + scoreJohn + ' points');
// } else if (scoreMike > scoreJohn) {
//     console.log('Mike\'s team wins with ' + scoreMike + ' points');
// } else {
//     console.log('There is a draw');
// }
// }
// console.log(score(scoreJohn, scoreMike));
// let scoreMary = (97 + 134 + 105) / 3;

// console.log(scoreJohn, scoreMike, scoreMary);

// if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
//     console.log('John\'s team wins with ' + scoreJohn + ' points');
// } else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
//     console.log('Mike\'s team wins with ' + scoreMike + ' points');
// } else if (scoreMary > scoreJohn && scoreMary > scoreMike) {
//     console.log('Mary\'s team wins with ' + scoreMary + ' points');
// } else {
//     console.log('There is a draw');
// }

const scoreJohn=[10,20,30];
const scoreMike=[20,32,42];
const scoreMary=[40,12,63];
function avrg(arr){
    average = 0;
     for (let i = 0; i < arr.length; i++){
     average += arr[i];
  }
  return Math.floor(average/arr.length);}

  
function xyz(avrJohn,avrMike,avrMary) {
  if (avrJohn > avrMike && avrJohn > avrMary) {
    console.log('John\'s team wins with ' +avrJohn + ' points');
} else if (avrMike > avrJohn && avrMike> avrMary) {
    console.log('Mike\'s team wins with ' + avrMike + ' points');
} else if (avrMary > avrJohn && avrMary > avrMike) {
    console.log('Mary\'s team wins with ' + avrMary + ' points');
} else {
    console.log('There is a draw');
}}
xyz(avrg(scoreJohn),avrg(scoreMary),avrg(scoreMike));



