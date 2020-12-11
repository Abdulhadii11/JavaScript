const team={
  _position:{
    center:[],
    forward:[],
    guard:[]
  },
  get center(){
    return this.center;
  },
  get forward(){
    return this.forward;
  },
  get guard(){
    return this.guard;
  },
  get position(){
    return{
      center:this.center,
      forward:this.forward,
      guard:this.guard
    }
  },
  set center(rol){
    this._position.center=rol;
  },
  set forward(rol){
    this._position.forward=rol;
  },
  set guard(rol){
    this._position.guard=rol;
  },
  addPlayerToPosition(positionName,playerName,playerPoint=0){
     const player={
       name:playerName,
       point:playerPoint
     }
     this._position[positionName].push(player);
  },
  getRandomPlayerFromPosition(positionName){
    const position=this._position[positionName];
    const rndPlayer=Math.floor(Math.random()*position.length);
    return position[rndPlayer];
  },
  generateRandomTeam(){
    const rndcenter=this.getRandomPlayerFromPosition('center');
    const rndforward=this.getRandomPlayerFromPosition('forward');
    const rndguard=this.getRandomPlayerFromPosition('guard');
​
    return [rndcenter,rndforward,rndguard];
  }
  
};
​
team.addPlayerToPosition('guard','Bill Russell',90);
team.addPlayerToPosition('guard','Wilt Chamberlain',95);
team.addPlayerToPosition('guard','Tim Duncan',86);
​
team.addPlayerToPosition('center','Michael Jordan',50);
team.addPlayerToPosition('center',' LeBron James',90);
team.addPlayerToPosition('center','Magic Johnson',80);
​
team.addPlayerToPosition('forward','Kareem Abdul-Jabbar',75);
team.addPlayerToPosition('forward','Kobe Bryant',80);
team.addPlayerToPosition('forward','Shaquille O\'Neal',60);
​
console.log(team.generateRandomTeam());