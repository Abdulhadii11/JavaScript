//Transform a string into an array and fix it!

let quote = "Some body can write code that a very well designed code machines can understand. Good programmers write code that humans can understand.” – Martin Fowler. Agile Software Design";

favoriteQuote=quote.split(" ")
console.log(favoriteQuote);

let lengthQoute = favoriteQuote.length;
console.log(lengthQoute);

favoriteQuote.push("Development","ThoughtWorks","Inc.")
console.log(favoriteQuote);

favoriteQuote.splice(1,1,"fool")
console.log(favoriteQuote);

favoriteQuote.shift();
console.log(favoriteQuote);

favoriteQuote.unshift("Any");
console.log(favoriteQuote);

favoriteQuote.splice(7,5,"computer")
console.log(favoriteQuote);


console.log(favoriteQuote.join(" "));




