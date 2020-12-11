console.log(Object.keys(users));
console.log(Object.values(users));
console.log(Object.keys(users).length);

let max = 0;
let name = "";
for (property in users) {
    if (users[property]["skills"].length > max) {
      max = users[property]["skills"].length;
      name = `${property}: ${users[property]["skills"]}`
    }
  }
  console.log(name);


let counter=0;
  for (property in users) {
    if (users[property].points>=50) {
      counter++;
    }
  }
  console.log(counter);

  for(property in users){
    if(users[property]['skills'].includes('MongoDB'&& 'Express' &&'React'&& 'Node')){
      console.log(`${[property]}`);
    }
    }

  users.Abdulhadi={
    email: 'abdulhadi@gmail.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 30,
    isLoggedIn: false,
    points: 35
  }


 users.info = function (name) {
   return `${name} is ${this[name].age}.He knows ${this[name].skills}`;
  }

  console.log(users.info('Alex'))
  