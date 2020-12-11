class Media {
  constructor(title,type){
    this._title=title;
    this._isCheckedout=false;
    this._ratings=[];
    this._type=type;
  }
  get title (){
    return this._title;
  }
  get isCheckedout (){
    return this._isCheckedout;
  }
  get ratings (){
    return this._ratings;
  }
  get type(){
    return this._type;
  }
  set isCheckedout (value){
    this._isCheckedout=value;
  }

  toggleCheckOutStatus(){
    if(this._isCheckedout){
      return this._isCheckedout = false;
    }else{
     return this._isCheckedout = true;
    }
  }

  getAverageRating(){
    let totalRating=0;
    for(let i=0;i<this._ratings.length;i++){
      totalRating=totalRating+this._ratings[i]
    }
    return totalRating/this._ratings.length;
   }

   addRating(value){
     if(value>0 && value <=10){
      return this._ratings.push();
     }
   }
}

class Book extends Media{
  constructor(author,title,pages,type){
    super(title,type);
    this._author=author;
    this._pages=pages;
  }
  get author(){
    return this.author;
  }
  get pages(){
    return this.pages;
  }
}

class Movie extends Media{
  constructor (title,director,runTime,type){
    super(title,type);
    this._director=director;
    this._runTime=runTime
  }
  get director(){
    return this._director;
  }
  get runTime(){
    return this._runTime;
  }
}

const historyOfViolence = new Book('Édouard Louis','History of Violence',224,'history');
console.log(historyOfViolence);
console.log(historyOfViolence.toggleCheckOutStatus());
console.log(historyOfViolence.isCheckedout);

console.log(historyOfViolence.addRating(5));
console.log(historyOfViolence.getAverageRating());

const bloodSport = new Movie('Blood Sport','Jean-Claude Van Damme',122,'action')

console.log(bloodSport);
console.log(bloodSport.toggleCheckOutStatus());
console.log(bloodSport.isCheckedout);

console.log(bloodSport.addRating(5));
console.log(bloodSport.getAverageRating());


class CD extends Media{
  constructor(title,type,artist,duration){
    super(title,type);
    this._artist =artist;
    this._songs=[];
    this._duration= duration;
  }
  get artist(){
    return this._artist;
  }
  get songs(){
    return this._songs;
  }
  get duration(){
    return this._duration;
  }
  addSong(value){
    return this._songs.push(value);
  }

  shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }
}


class Catalog{
  constructor(){
    this._allMedias=[];
  }
  addMedia(value){
    return this._allMedias.push(value);
  }
}

const CD1=new CD('myCD','romance','Mario',60)
CD1.addSong('abc xyz');
CD1.addSong('abc xyz');
CD1.addSong('abc xyz');

const catalog1=new Catalog();
catalog1.addMedia(historyOfViolence);
catalog1.addMedia(bloodSport);
catalog1.addMedia(CD1);
console.log(catalog1)

document.querySelector("#submit_btn").onclick=function(){
  
}


//CHALLANGE PART
let submitBtn = document.getElementById('submit_btn')
let mediaSelect = document.getElementById('mediaTypeSelect')
let titleMedia = document.getElementById('titleOfMedia')
let typeMedia = document.getElementById('typeOfMedia')
let creatorMedia = document.getElementById('creatorOfMedia')
let durationMedia = document.getElementById('durationOfMedia')
let ratings = document.getElementsByClassName('ratingsOfMedia')
let catalogLib = document.getElementById('catalogLibrary')
submitBtn.onclick = ()=>{
  console.log('hello')
  let constructor = mediaSelect.value === "Book" ? Book : mediaSelect.value === "Movie" ? Movie :mediaSelect.value === "CD" ? CD :"";
  let newMedia = new constructor(titleMedia.value, typeMedia.value, creatorMedia.value, durationMedia.value)
  newMedia.addraiting(ratings[0].value);
  newMedia.addraiting(ratings[1].value);
  newMedia.addraiting(ratings[2].value);
  newMedia.addraiting(ratings[3].value);
  catalogLibrary.addMedia(newMedia);
  let result=[];
  catalogLibrary.myCatalog.forEach(elem => result.push(elem.title));
  console.log(catalogLibrary.myCatalog);
  return catalogLib.innerHTML = result.join(" <br> ");