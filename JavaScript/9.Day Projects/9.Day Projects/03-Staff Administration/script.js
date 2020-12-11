// staff.forEach(element=>{console.log(element)});

// staff.forEach(element=>{
//   element.fullName=element.firstName+" "+element.lastName});
//   console.log(staff);

staff.forEach(element=>{
  element.getFullName=function(){
      return element.firstName+" "+element.lastName}});
console.log(staff[0].getFullName());



