/*
  Only students who have attended enough classes are eligible to sit an exam.

  Create a function which:
  - Accepts an array which contains all the students' names and their attendance counts

  - Returns an array containing only the names of the who have attended AT LEAST 8 classes. (bigger than 8)
*/
const attendances = [
  ["Ahmed", 8],
  ["Clement", 10],
  ["Elamin", 6],
  ["Adam", 7],
  ["Tayoa", 11],
  ["Nina", 10]
]
const findAtLeastEight=num=>num>=8


let examsit=[];
function examSitCheck(arr){
  for (let i=0;i<arr.length;i++){
    if(arr[i].find(findAtLeastEight)){
     examsit.push(arr[i]);
    }
  }
  console.log(examsit);
}
examSitCheck(attendances);



