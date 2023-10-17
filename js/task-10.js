const refs = {
  input: document.querySelector("input"),
  btnCreat: document.querySelector("button[data-create]"),
  btnDestroy: document.querySelector("button[data-destroy]"),
  boxes: document.querySelector("#boxes"),
};

refs.btnCreat.addEventListener("click", createBoxes);
refs.btnDestroy.addEventListener("click", destroyBoxes);

let amount = 0;

function createBoxes(e) {
  amount = Number(refs.input.value);
  if (amount >= 1 && amount <= 100) {
    let paramBox = 30;
    for (let i = 1; i <= amount; i += 1) {
      const box = document.createElement("div");
      box.style.width = `${paramBox}px`;
      box.style.height = `${paramBox}px`;
      box.style.backgroundColor = getRandomHexColor();
      paramBox += 10;

      refs.boxes.insertAdjacentElement("beforeend", box);
    }
  } else {
    return console.log("Ooooops");
  }
}

function destroyBoxes(e) {
  refs.boxes.innerHTML = "";
  refs.input.value = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
