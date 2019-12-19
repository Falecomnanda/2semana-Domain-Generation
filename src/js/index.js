/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  console.log("Hello Rigo from the console!");

  var pronoun = ["the", "our"];
  var adj = ["great", "big"];
  var noun = ["jogger", "racoon"];

  let ul = document.querySelector("#domains");
  let a = "";
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let x = 0; x < noun.length; x++) {
        console.log(pronoun[i] + adj[j] + noun[x] + ".com");
        a += "<li>" + pronoun[i] + adj[j] + noun[x] + ".com" + "</li>";
      }
    }
  }
  ul.innerHTML = a;
};
