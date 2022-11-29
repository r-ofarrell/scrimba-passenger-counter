let count = 0;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");


function increment() {
  count += 1;
  countEl.textContent = count;
}

function save() {
  let countSeparator = count + " - ";
  saveEl.textContent += countSeparator;
  countEl.textContent = 0;
  count = 0;
}
