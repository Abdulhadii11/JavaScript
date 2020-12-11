const companies= [
  {name: "Company One", category: "Finance", start: 1981, end: 2004},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const xyz=arr=>{
  for(let i=0;i<arr.length;i++){
  console.log(arr[i]);
}
}
// xyz(companies)

const name=(arr)=>{
return arr.forEach(Object=>console.log(Object.name));
}
// name(companies);

companies.push({name:'xyz',category:'techno',start:1990, end:2020});
console.log(companies);

const category=companies.filter(function(company){
  if(company.category==="Retail"){
    return true;
  }
});
console.log(category);

const year=companies.filter(function(company){
  if(company.start>=1980 && company.start<1990){
    return true;
  }
});
console.log(year);

const tenYear=companies.filter(function(company){
  if(company.end-company.start>=10){
    return true;
  }
})
console.log(tenYear);

const allNames=companies.map(function(company){
  return company.name;
});
console.log(allNames);

const allNamess=companies.map(function(company){
  return `${company.name} ${company.start} ${company.end}`;
});
console.log(allNamess);

const startYears=companies.sort(function(a,b){
 return a.start-b.start;
});
console.log(startYears);


console.log(companies.reduce((a,b)=>a+(b.end-b.start),0));

