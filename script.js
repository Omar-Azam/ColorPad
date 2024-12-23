let strip = document.querySelector(".strip");
let edit = document.querySelector(".edit-btn");
let input = document.querySelector("input");
let one = document.querySelector(".one");
let all = document.querySelector(".all");
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
window.addEventListener("keydown", (e) => {
  if (colors.length < 10) {
    if (input.value == "") {
    } else if (e.key === "Enter") {
      colors.push(input.value);
      input.value = "";
      strip.innerHTML = "";
      colors.forEach((color) => createButton(color));
    }
  }
});
edit.addEventListener("click", (e) => {
  input.classList.toggle("hide");
  one.classList.toggle("hide");
  one.classList.toggle("one-ani");
  all.classList.toggle("hide");
  all.classList.toggle("all-ani");
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
