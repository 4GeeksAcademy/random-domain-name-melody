/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello darling");
};

let domainName = [];

let article = ["un", "mi"];

let fullName = ["dominio", "sitio", "espacio"];

let adjective = ["genial", "asombroso", "exclusivo", "increible"];

let web = [".es", ".com", ".net"];

/* let pronounIndex = Math.floor(Math.random() * pronoun.length);
  let nameIndex = Math.floor(Math.random() * name.length);
  let adjetiveIndex = Math.floor(Math.random() * adjective.length);
  let webIndex = Math.floor(Math.random() * web.length);

  return (
    pronoun[pronounIndex] +
    name[nameIndex] +
    adjective[adjetiveIndex] +
    web[webIndex]
  ); */
/* for (let article of articles) {
  for (let name of names) {
    for (let adjective of adjectives) {
      for (let web of webs) {
        console.log("${article}${name}${adjective}${web}");
      }
    }
  }
}
console.log(generateDomain()); */

for (let i = 0; i < article.length; i++) {
  for (let j = 0; j < fullName.length; j++) {
    for (let k = 0; k < adjective.length; k++) {
      for (let l = 0; l < web.length; l++) {
        domainName.push(
          "  " + article[i] + fullName[j] + adjective[k] + web[l]
        );
      }
    }
  }
}
console.log(domainName);

let generateDomains = () => {
  return domainName;
};

document.querySelector("#boton").addEventListener("click", function() {
  document.getElementById("listaDominios").innerHTML = generateDomains();
});
