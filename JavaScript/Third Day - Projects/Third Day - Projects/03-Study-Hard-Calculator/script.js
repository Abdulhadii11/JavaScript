function getStudyHours(day){
  if (day === 'monday') {
  return 3;
}else if( day === 'tuesday'){
  return 8;
}else if( day === 'wednesday'){
  return 5;
}else if( day === 'thursday'){
  return 7;
}else if( day === 'friday'){
  return 6;
}else if( day === 'saturday'){
  return 10;
}else if( day === 'sunday'){
  return 10;
}else { return "there is no such day"}
  }
function getActualStudyHours(){
  return getStudyHours('monday')+getStudyHours('tuesday')+getStudyHours('wednesday')+getStudyHours('thursday')+getStudyHours('friday')+getStudyHours('saturday')+getStudyHours('sunday');
}
function getIdealStudyHours(){
  const idealHours=5;
  return idealHours*7;
}
function calculateStudyDebt(){
  let actualStudyHours=getActualStudyHours();
  let idealStudyHours=getIdealStudyHours();
  if (actualStudyHours === idealStudyHours) {
    console.log('Keep it Up');
  } else if (actualStudyHours > idealStudyHours) {
    console.log('Great');
  } else {
    console.log(console.log('You got ' + (idealStudyHours - actualStudyHours) + ' hour(s) less study than you needed this week. Create some empty time to study.'));
  }  
}
calculateStudyDebt();


  console.log(getStudyHours('tuesday'));
  console.log(getActualStudyHours()); 
  console.log(getIdealStudyHours()); 