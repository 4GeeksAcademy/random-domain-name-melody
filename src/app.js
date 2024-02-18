/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello darling");
};

let article = ["un", "mi"];

let fullName = ["dominio", "sitio", "espacio"];

let adjective = ["genial", "asombroso", "exclusivo", "increible"];

function DomainGenerator(ar, n, ad) {
  for (let a = 0; a < ar.length; a++) {
    for (let b = 0; b < n.length; b++) {
      for (let c = 0; c < ad.length; c++) {
        let nameList = document.createTextNode(ar[a] + n[b] + ad[c] + ".com");
        let listofnames = document.getElementById("DomainList");
        let nameline = document.createElement("div");
        nameline.className = "alert alert-info";
        listofnames.appendChild(nameline);
        nameline.appendChild(nameList);
      }
    }
  }
}
document.querySelector("#buttonDomain").addEventListener("click", function() {
  DomainGenerator(article, fullName, adjective);
  document.querySelector("#buttonDomain").style.display = "none";
});
