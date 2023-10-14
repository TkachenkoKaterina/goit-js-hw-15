const inputRefs = document.querySelector("#validation-input");

const handlerInput = (e) => {
  if (e.currentTarget.value.length !== Number(e.currentTarget.dataset.length)) {
    inputRefs.classList.add("invalid");
  } else {
    inputRefs.classList.remove("invalid");
    inputRefs.classList.add("valid");
  }
};

inputRefs.addEventListener("blur", handlerInput);
