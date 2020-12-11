/*
  I am new to London and would like to know what transport I can take to different famous locations.
  An array with London locations, and the forms of transport you can take to get there, have been provided.

  Return an array of where I can go if I only want to use a specific mode of transport.

  NOTE: only the names should be returned, not the means of transport.
*/
const londonLocations = [
  ["Angel", "tube", "bus"],
  ["Greenwich", "bus", "river boat", "dlr", "air line", "tube"],
  ["London Bridge", "tube", "river boat"],
  ["Tower Bridge", "tube", "bus"],
]


const findingTransportation = str => str === "bus"

let locations=[];
function whereToGo(arr){
  for(i=0;i<arr.length;i++){
    if(arr[i].find(findingTransportation)) {
      locations.push(arr[i][0]);
  }
}
console.log(locations)
}
whereToGo(londonLocations);