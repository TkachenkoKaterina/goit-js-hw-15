const btnDecr = document.querySelector('button[data-action="decrement"]');
// console.log(btnDecr.dataset.action);
const btnIncr = document.querySelector('button[data-action="increment"]');
// console.log(btnIncr.dataset.action);
const text = document.querySelector("#value");

let counterValue = 0;

const handleClick = (e) => {
  if (e.currentTarget.getAttribute("data-action") === "increment") {
    counterValue += 1;
    text.textContent = counterValue;
  } else if (e.currentTarget.getAttribute("data-action") === "decrement") {
    counterValue -= 1;
    text.textContent = counterValue;
  }
};

btnDecr.addEventListener("click", handleClick);
btnIncr.addEventListener("click", handleClick);

// const handleClickDecr = () => {
//   counterValue -= 1;
//   text.textContent = counterValue;
// };

// const handleClickIncr = () => {
//   counterValue += 1;
//   text.textContent = counterValue;
// };
