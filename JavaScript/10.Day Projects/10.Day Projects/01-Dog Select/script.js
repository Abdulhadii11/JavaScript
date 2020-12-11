const dog={
  name: "Baron",
  legs: 4 , 
  color: "white" , 
  age:5,
  bark (){
    return "woof woof" ;},
  // getDogInfo (){
  //   return `${this.name} is ${this.age} years old`
  // },
  calcAge(){
    let humanage=0;
    if(this.age>=2){
      humanage=(2*10.5)+(this.age-2)*4;
    }else if(this.age==1){
      humanage=10.5
    }
    return humanage;
   },
   getDogInfo (){
    return `My name is ${this.name}.I am ${this.calcAge()} years old old in human years which is ${this.age} years old in dog years.`
  } 
  
}
console.log(dog.getDogInfo());