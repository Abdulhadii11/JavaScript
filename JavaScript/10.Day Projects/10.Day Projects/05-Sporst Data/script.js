const team={
  _player:[
    {
      firstName:'Bill',
      lastName:'Russell',
      age:45
    },{
      firstName:'Wilt',
      lastName:'Chamberlain',
      age:25
    },{
      firstName:'Tim',
      lastName:'Duncan',
      age:26
    }
  ],
  _games:[
    {
      opponent:'Lakers',
      teamPoint:42,
      opponentPonints:27
    },
    {
      opponent:'Hits',
      teamPoint:51,
      opponentPonints:37
    },
    {
      opponent:'Shine',
      teamPoint:42,
      opponentPonints:47
    }
  ],
​
  get player(){
    return this._player;
  },
  get games(){
    return this._games;
  },
  set player(oyuncular){
    this._player=oyuncular;
  },
  set games(oyun){
    this._games=oyun;
  },
  addPlayer(name,surName,playerage){
    player={
      firstName:name,
      lastName:surName,
      age:playerage
    }
    this._player.push(player);
  },
  addGame(oppanantName,teampoint,oppanentPoint){
    game={
      opponent:oppanantName,
      teamPoint:teampoint,
      opponentPonints:oppanentPoint
    }
    this._games.push(game);
  }
}
team.addPlayer('Steph','Curry',28);
team.addPlayer('Lisa','Laslie',44);
team.addPlayer('Bugs','Bunny',76);
team.addGame('Titans',100,98);
​
console.log(team);
