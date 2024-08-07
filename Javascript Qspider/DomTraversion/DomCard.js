const cities = [
  {
    cityName: "New York",
    currency: "USD",
    language: "English",
  },
  {
    cityName: "Tokyo",
    currency: "JPY",
    language: "Japanese",
  },
  {
    cityName: "Paris",
    currency: "EUR",
    language: "French",
  },
  {
    cityName: "Mumbai",
    currency: "INR",
    language: "Hindi",
  },
  {
    cityName: "Mumbai",
    currency: "INR",
    language: "Hindi",
  }
];

let option = document.querySelector("section");
option.setAttribute("class", "container");

//Giving css to class container
let section1 = document.getElementsByClassName("container");
section1[0].style.height = "200%";
section1[0].style.width = "80%";
section1[0].style.border = "1px solid black";
section1[0].style.margin = "0px 100px";
section1[0].style.display = "flex";


cities.forEach((city,index) => {
  const div1 = document.createElement("div");
  div1.setAttribute("class", "card");

  div1.style.height = "250px";
  div1.style.width = "200px";
  div1.style.border = "1px solid red";
  div1.style.margin = "10px 10px";
  div1.style.boxShadow = "10px 10px 10px 0 rgba(0, 0, 0, 0.3                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      )";


  const innerDiv = document.createElement("div");
  innerDiv.setAttribute("class", "innerbox");

  innerDiv.style.height = "130px";
  innerDiv.style.width = "150px";
  innerDiv.style.border = "1px solid green";
  innerDiv.style.margin = "20px 20px";
  innerDiv.style.backgroundColor = "lightblue";
  innerDiv.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2)";

  const cityName = document.createElement("h1");
  cityName.setAttribute("class", "text");
  cityName.innerText = `City: ${cities[index].cityName}`;

  const currency = document.createElement("p");
  currency.setAttribute("class", "text");

  currency.innerText = ` Currency: ${cities[index].currency}`;
  const language = document.createElement("p");
  language.setAttribute("class", "text");

  language.innerText = `Lang: ${cities[index].language}`;
  option.appendChild(div1);
  div1.appendChild(innerDiv);
  div1.appendChild(cityName);
  div1.appendChild(currency);
  div1.appendChild(language);
});
const textStyle = document.getElementsByClassName("text");
for (let element of textStyle) {
  element.style.fontSize = "20px";

  element.style.margin = "0px 20px";
}
console.log(option);
