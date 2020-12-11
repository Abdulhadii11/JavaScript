//Choose a random color
const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple'];

 let button1 = document.getElementById('button1');
 button1.onclick = function () {
   document.body.style.backgroundColor=colors[Math.floor(Math.random()*6)];
 }

 let hex = ["A", "B", "C", "D", "E", "F",0,1,2,3,4,5,6,7,8,9]
 let button2 = document.getElementById('button2');
 button2.onclick = function () {
   let hexcolor=["#"];
   for(let i=0;i<6;i++){
     let colorIndex = Math.floor(Math.random()*16);
          hexcolor.push(hex[colorIndex]);
   }
   let myColor= hexcolor.join("");
   document.body.style.backgroundColor =myColor;
   document.querySelector('h1').innerHTML=""+hexcolor.join("");
 }
