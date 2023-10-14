const refs = {
  input: document.querySelector("#font-size-control"),
  span: document.querySelector("#text"),
};

const handlerInput = (e) => {
  refs.span.setAttribute("style", `font-size:${e.currentTarget.value}px`);
};

refs.input.addEventListener("input", handlerInput);
