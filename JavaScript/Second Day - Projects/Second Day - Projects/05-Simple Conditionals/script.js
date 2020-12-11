/*A code which give grade students according to theirs scores
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F
*/
let score = Number(prompt('From 0 to 100 enter your score :'));
if (score <= 100 && score >= 80) {
  alert('Your score "A"');
} else if (score <= 79 && score >= 70) {
  alert('Your score "B"');
} else if (score <= 69 && score >= 60) {
  alert('Your score "C"');
} else if (score <= 59 && score >= 50) {
  alert('Your score "D"');
} else if (score <= 49 && score >= 0) {
  alert('Your score "F"');
} else {
  alert('You must 0-100 between score');
}
/*
Check Season 
Check if the season is Autumn, Winter, Spring or Summer.
*/