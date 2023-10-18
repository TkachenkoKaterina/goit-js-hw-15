const refs = {
  input: document.querySelector("input"),
  btnCreat: document.querySelector("button[data-create]"),
  btnDestroy: document.querySelector("button[data-destroy]"),
  boxes: document.querySelector("#boxes"),
};

refs.btnCreat.addEventListener("click", onCreate);
refs.btnDestroy.addEventListener("click", onDestroy);
refs.input.addEventListener("blur", handleInput);

function onCreate() {
  const amount = handleInput();
  console.log(amount);
  createBoxes(amount);
}

function onDestroy() {
  destroyBoxes();
}

function handleInput() {
  return Number(refs.input.value);
}

function createBoxes(amount) {
  if (amount >= 1 && amount <= 100) {
    let paramBox = 30;
    refs.boxes.innerHTML = "";
    for (let i = 1; i <= amount; i += 1) {
      const box = document.createElement("div");
      box.style.width = `${paramBox}px`;
      box.style.height = `${paramBox}px`;
      box.style.backgroundColor = getRandomHexColor();
      paramBox += 10;
      refs.boxes.appendChild(box);
    }
  } else {
    alert("Ooooops, Введіть будь ласка значення від 1 до 100 😃");
  }
}

function destroyBoxes() {
  refs.boxes.innerHTML = "";
  refs.input.value = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}
