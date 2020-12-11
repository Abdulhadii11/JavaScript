let userName=prompt('Enter your name');
if(userName){
  console.log("Hello " + userName);
} else {
  console.log("hello");
}
let userQuestion=prompt('Enter your question');
console.log(userName+ " asked "+userQuestion)
let randomNumber=Math.floor(Math.random()*8)
let eightBall=randomNumber;
switch (eightBall){
  case 0:
    console.log("it is certain");
   break;
  case 1:
   console.log("it is decided so");
   break;
  case 2:
    console.log("reply hazy try again");
    break;
  case 3:
    console.log("do not count on it");
    break;
  case 4:
    console.log("my source say no");
    break;
  case 4:
    console.log("outlook not so good");
    break;
  case 5:
   console.log("cannot predict now");
   break;
  case 6:
    console.log("signs pint no say")
    break;
}
