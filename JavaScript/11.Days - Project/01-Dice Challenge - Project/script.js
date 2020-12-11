function generate(){
  return(Math.floor(Math.random() * 6) + 1);
}

let startButton = document.querySelector('#start');
let dice1=document.querySelector('#dice_A');
let dice2=document.querySelector('#dice_B');


startButton.onclick=function(){
  let randomNum1 = generate();
  let randomNum2 =generate();
  dice1.src = "images/dice"+ randomNum1 + ".png";
  dice2.src = "images/dice"+ randomNum2 + ".png";

  if(randomNum1>randomNum2){
    document.getElementById('player_1').style.fontWeight='normal';
    document.getElementById('player_1').style.color='';
    document.getElementById('player_2').style.fontWeight='normal';
    document.getElementById('player_2').style.color='';
    document.querySelector('h1').innerHTML="Player1 WinS!!!";
    document.getElementById('player_1').style.fontWeight='bold';
    document.getElementById('player_1').style.color='red';

  }else if(randomNum2>randomNum1){
    document.getElementById('player_1').style.fontWeight='normal';
    document.getElementById('player_1').style.color='';
    document.getElementById('player_2').style.fontWeight='normal';
    document.getElementById('player_2').style.color='';
    document.querySelector('h1').innerHTML = "Player2 Wins!!!";
    document.getElementById('player_2').style.fontWeight='bold';
    document.getElementById('player_2').style.color='red';
  }else{
    document.getElementById('player_1').style.fontWeight='normal';
    document.getElementById('player_1').style.color='';
    document.querySelector('h1').innerHTML = "No Winner!!!"
  }
}




