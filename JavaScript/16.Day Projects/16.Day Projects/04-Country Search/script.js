// Selecting page elements
const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");
const countryInput = document.querySelector("#countrySearch");

// const getCountry = country => {
//   const url = "https://restcountries.eu/rest/v2/name/";
  
//   const request = new XMLHttpRequest();
//   request.responseType = "json";
  
//   request.onreadystatechange = () => {
//     if (request.readyState === XMLHttpRequest.DONE) {
//       const [data] = request.response;
//       renderCountry(data);
//     }
//   }
  
//   const xxx = url + country;
  
//   request.open("GET", xxx);
//   request.send();
// };
​
// btn.addEventListener("click", displayResults);
​
​
const getCountry = country => {
  const url = "https://restcountries.eu/rest/v2/name/";
  const alpha = "https://restcountries.eu/rest/v2/name/";
​
  const request = new XMLHttpRequest();
​
  request.addEventListener("load", function() {
    const [data] = JSON.parse(this.responseText);
    renderCountry(data);
​
    // console.log(data);
​
    const neighbour = data.borders[0];
​
    if (!neighbour) {
      return 
    }
​
    const request2 = new XMLHttpRequest();
    
    request2.addEventListener("load", function() {
      const [data] = JSON.parse(this.responseText);
      renderCountry(data, "neighbour");
  
      });
​
      request2.open("GET", alpha + neighbour);
      request2.send();
​
  });
​
  request.open("GET", url + country);
  request.send();
};
​
btn.addEventListener("click", displayResults);