
// if (age>=18){
//   console.log("You can drink beer");
// } else {
//   console.log("You can drink juice");
// }
// age=20;
let johnAge = 25;
let firstName = 'John';
if (johnAge>=18) {
  console.log("You can drink a beer.");
} else {
  console.log("You can drink a juice");
}
switch (true) {
  case johnAge < 13:
    console.log(firstName + " is a boy.");
    break;
  case johnAge>13 && johnAge<20:
    console.log(firstName + " is a teenager.");
    break;
  case johnAge>20 && johnAge<30:
    console.log(firstName + " is a young man.");
    break;
  default:
    console.log (firstName + " is a man.");
}
