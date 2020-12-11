let drums = document.querySelectorAll(".drum");
let order = ["w","a","s","d","j","k","l"]
for( let i = 0; i < order.length; i++)
drums[i].onclick = function () {
  new Audio("sounds/tom-"+order[i]+".mp3").play();
}
document.onkeypress = function (e) {
  let tmp;
  if (e.code === 'KeyW') {
    tmp = 'w';
  } else if (e.code === 'KeyA') {
    tmp = 'a';
  } else if (e.code === 'KeyS') {
    tmp = 's';
  } else if (e.code === 'KeyD') {
    tmp = 'd';
  } else if (e.code === 'KeyJ') {
    tmp = 'j';
  } else if (e.code === 'KeyK') {
    tmp = 'k';
  } else if (e.code === 'KeyL') {
    tmp = 'l';
  }

  let audio = new Audio('sounds/tom-' + tmp + '.mp3');
  audio.play();
}

