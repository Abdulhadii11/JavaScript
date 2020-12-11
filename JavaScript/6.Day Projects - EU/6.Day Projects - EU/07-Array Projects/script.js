
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

// function getCountry1(arr) {
//   const getCount = (item) => item.slice(0, 3).toUpperCase();
//   const getLength = (item) => item.length;
//   const newArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     newArray.push([arr[i],
//     arr.map(getCount)[i],
//     arr.map(getLength)[i]]);
//   }
//   return newArray;
// }
// console.log(getCountry1(countries));





// Add "-" after every even number
const numbers = "315469781318158";
const oneOne=numbers.split('')

for(i=0;i<oneOne.length;i++){
    if(oneOne[i]%2===0){ oneOne.splice(i+1,0,'-');}
  }


console.log(oneOne.join(''));





// Find odd numbers
 var arr = [5, 24, 122, 625, 3125, 15625];
 const getDivide = arr.filter(num => num % 5 == 0);

console.log(getDivide);