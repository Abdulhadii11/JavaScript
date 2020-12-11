let doorImage1 = document.getElementById("door_a");
let doorImage2 = document.getElementById('door_b');
let doorImage3 = document.getElementById('door_c');
let flyDoorPath = "./findfly.png";
let oceanDoorPath = "./ocean.png";
let forestDoorPath = "./forest.png";

let numClosedDoors = 3;
randomFindDoorGenerator = () => {
let findDoor = Math.floor(Math.random()*numClosedDoors);
if(findDoor === 0){
  openDoor1 = flyDoorPath;
  openDoor2 = oceanDoorPath;
  openDoor3 = forestDoorPath;
}else if(findDoor === 1){
  openDoor2 = oceanDoorPath;
  openDoor3 = forestDoorPath;
  openDoor1 = flyDoorPath;
}else{
  openDoor3 = forestDoorPath;
  openDoor1 = flyDoorPath;
  openDoor2 = oceanDoorPath;
}
}

let openDoor1;
let openDoor2;
let openDoor3;


doorImage1.onclick = function(){
doorImage1.src = flyDoorPath;
}

doorImage2.onclick = function(){
  doorImage2.src = oceanDoorPath;
}

doorImage3.onclick = function(){
  doorImage3.src = forestDoorPath;
}

