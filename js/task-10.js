const refs = {
  input: document.querySelector("input"),
  btnCreat: document.querySelector("button[data-create]"),
  btnDestroy: document.querySelector("button[data-destroy]"),
  boxes: document.querySelector("#boxes"),
};

// refs.input.addEventListener("input", handleInput);
refs.btnCreat.addEventListener("click", handleCreat);

// function handleInput(e) {
//   if (e.currentTarget.value >= 1 && e.currentTarget.value <= 100) {
//     amount = Number(e.currentTarget.value);
//     return amount;
//   } else {
//     return console.log("Oooops");
//   }
// }

function handleCreat(e) {
  // console.log(e.currentTarget);
  let amount = 0;
  let arr = [];

  amount = Number(refs.input.value);
  if (amount >= 1 && amount <= 100) {
    for (let i = 1; i <= amount; i += 1) {
      const boxRef = document.createElement("li");
      arr.push(boxRef);

      // refs.boxes.insertAdjacentElement("beforeend", boxRef);
    }
    creatMarkup(arr);
  } else {
    return console.log("Ooooops");
  }

  console.log(amount);
}

function creatMarkup(arrItem) {
  console.log(arrItem);
  const markup = arrItem.map((item) => {
    console.log(item);
  });
  // console.log(markup);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
