/*
  You are given a list of some London street names.
  

  Write a function that will return all street names which contain 'Lane' in their name.
*/

const arrStreets=["Abchurch Lane", "Adam's Court", "Addle Hill", "Addle Lane", "Alban Highwalk"];

function getLanes(query){
  return arrStreets.filter(function(el){
    return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
  })

}
console.log(getLanes('lane'));