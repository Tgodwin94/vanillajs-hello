/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const excuse = document.querySelector("#excuse");

const excuses = {
  who: [
    "My dog",
    "The family Tyrannosaurus Rex",
    "A flying whale",
    "A special guest"
  ],
  action: ["peed on", "destroyed", "stared intensely at", "broke out of"],
  what: ["its cage", "my car", "our new couch", "my house"],
  when: ["today", "last night", "on Halloween", "last Tuesday"]
};

const randomElement = arr => {
  let random = arr[Math.floor(Math.random() * arr.length)];
  return random;
};

const randomExcuse = () => {
  const parts = ["who", "action", "what", "when"];
  const message = parts.map(part => randomElement(excuses[part])).join(" ");
  excuse.innerHTML = message;
};

window.onload = randomExcuse;
