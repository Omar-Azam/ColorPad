// Variables
let strip = document.querySelector(".strip");
let edit = document.querySelector(".edit-btn");
let input = document.querySelector("input");
let one = document.querySelector(".one");
let all = document.querySelector(".all");
let editor = "close";

// Array
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
  });
  strip.appendChild(button);
}

// This function creates first ten buttons
colors.forEach((color) => createButton(color));

function openAnimation() {
  input.classList.add("input-s-ani");
  input.classList.remove("input-s-ani-close");
  one.classList.add("one-ani");
  one.classList.remove("one-ani-close");
  all.classList.add("all-ani");
  all.classList.remove("all-ani-close");
  animAdd();
}

function closeAnimation() {
  input.classList.remove("input-s-ani");
  input.classList.add("input-s-ani-close");
  one.classList.remove("one-ani");
  one.classList.add("one-ani-close");
  all.classList.remove("all-ani");
  all.classList.add("all-ani-close");
  animClose();
}

function animAdd() {
  let btn = document.querySelectorAll("button");
  Array.from(btn).forEach((btn) => {
    btn.classList.add("btn-ani");
  });
}

function animClose() {
  let btn = document.querySelectorAll("button");
  Array.from(btn).forEach((btn) => {
    btn.classList.remove("btn-ani");
  });
}

// Events
window.addEventListener("keydown", (e) => {
  if (colors.length < 10) {
    if (input.value == "") {
    } else if (e.key === "Enter") {
      colors.push(input.value);
      input.value = "";
      strip.innerHTML = "";
      colors.forEach((color) => createButton(color));
      animAdd();
    }
  }
});

edit.addEventListener("click", (e) => {
  if (editor === "open") {
    closeAnimation();
    editor = "close";
  } else if (editor === "close") {
    openAnimation();
    editor = "open";
  }
});

one.addEventListener("click", (e) => {
  colors.pop();
  strip.innerHTML = "";
  colors.forEach((color) => createButton(color));
  animAdd();
});

all.addEventListener("click", (e) => {
  colors = [];
  strip.innerHTML = "";
  colors.forEach((color) => createButton(color));
});
