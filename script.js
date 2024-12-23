// Variables
let strip = document.querySelector(".strip");
let edit = document.querySelector(".edit-btn");
let input = document.querySelector("input");
let one = document.querySelector(".one");
let all = document.querySelector(".all");
let editor = "close";
let colors = [
  "Teal",
  "Violet",
  "Silver",
  "Magenta",
  "Red",
  "Purple",
  "Cyan",
  "Black",
  "Orange",
  "Pink",
];

// Functions
function createButton(text) {
  const button = document.createElement("button");
  button.innerText = text;
  button.addEventListener("click", (e) => {
    document.body.style.backgroundColor = text.toLowerCase();
    console.log(text);
  });
  strip.appendChild(button);
}
colors.forEach((color) => createButton(color));
window.addEventListener("keydown", (e) => {});
function openAnimation() {
  input.classList.add("input-s-ani");
  input.classList.remove("input-s-ani-close");
  one.classList.add("one-ani");
  one.classList.remove("one-ani-close");
  all.classList.add("all-ani");
  all.classList.remove("all-ani-close");
}
function closeAnimation() {
  input.classList.remove("input-s-ani");
  input.classList.add("input-s-ani-close");
  one.classList.remove("one-ani");
  one.classList.add("one-ani-close");
  all.classList.remove("all-ani");
  all.classList.add("all-ani-close");
}

// Events
if (colors.length < 10) {
  if (input.value == "") {
  } else if (e.key === "Enter") {
    colors.push(input.value);
    input.value = "";
    strip.innerHTML = "";
    colors.forEach((color) => createButton(color));
  }
}
edit.addEventListener("click", (e) => {
  if (editor === "open") {
    closeAnimation();
    editor = "close";
  } else if (editor === "close") {
    openAnimation();
    editor = "open";
  }
  one.addEventListener("click", (e) => {
    colors.pop();
    strip.innerHTML = "";
    colors.forEach((color) => createButton(color));
  });
  all.addEventListener("click", (e) => {
    colors = [];
    strip.innerHTML = "";
    colors.forEach((color) => createButton(color));
  });
});
