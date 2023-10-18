const refs = {
  input: document.querySelector("#font-size-control"),
  span: document.querySelector("#text"),
};

const initialFontSize = refs.input.value;
refs.span.style.fontSize = `${initialFontSize}px`;

const handlerInput = (e) => {
  refs.span.style.fontSize = `${e.currentTarget.value}px`;
};

refs.input.addEventListener("input", handlerInput);
