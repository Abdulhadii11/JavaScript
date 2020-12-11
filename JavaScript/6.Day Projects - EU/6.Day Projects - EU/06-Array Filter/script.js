/*
  You are given a program that logs pairings between two students group
  It fails because the array `pairsById` can contain different values that break the program
  It is decided that array items which are not pairs should be filtered out
*/
var pairsByIndexRaw = [[0, 3], [1, 2], [2, 1], null, [1], false, [3, 0], "whoops"];

var students = ["Islam", "Lesley", "Harun", "Rukmini"];
var mentors = ["Daniel", "Irina", "Mozafar", "Luke"];

let checked=[];
const arrays=(arr) => { 
  for(i=0;i<arr.length;i++){
    if(Array.isArray(arr[i]) && arr[i].length>1){ checked.push(arr[i])}
  }
}

arrays(pairsByIndexRaw);

console.log(checked);


const pair=(arr1,arr2,arr3)=>{
  for(i=0;i<arr1.length;i++){
    console.log([arr2[arr1[i][0]],arr3[arr1[i][1]]])
  }
}
pair(checked,students,mentors);

