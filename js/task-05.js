const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

const handler = (event) => {
  if (event.currentTarget.value !== "") {
    output.textContent = event.currentTarget.value;
  } else {
    output.textContent = "Anonymous";
  }
};

input.addEventListener("input", handler);
