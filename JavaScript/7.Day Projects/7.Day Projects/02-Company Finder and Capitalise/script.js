// STEP-1
// Filter out companies which have more than one 'o' without the filter method

const firms = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon, Oppo"
let lFirms=firms.split(",");
let last=[];

const sameLetter=arr=>{
  for(let i=0;i<arr.length;i++){
    counter=0;
    for( let j=0;j< arr[i].length;j++){
      if(arr[i][j].toLowerCase() === "o"){
        counter++;
        if(counter === 2){
          last.push(arr[i]);
        }
      }
    }
  }
}
// console.log(lFirms);
sameLetter(lFirms);
// console.log(last);







//STEP-2

 loremIpsum = "Contrary to popular belief, Lorem Ipsum is not simply random text. it has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.a.32 and 1.a.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. this book is a treatise on the theory of ethics, very popular during the Renaissance. the first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.a.32"





 const capitalizeFirstLetter = str => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
​
const makingCapital = arr => {
  const newArr = arr.split(" ");
    for (let i = 0; i < newArr.length - 1; i++) {
      console.log(newArr[i]);
//       if (newArr[i][newArr[i].length - 1] === ".") {
//         newArr[i + 1] = capitalizeFirstLetter(newArr[i + 1]);
//       }
//     }
//   return newArr.join(" ")
// }
// ​
// console.log(makingCapital(loremIpsum));