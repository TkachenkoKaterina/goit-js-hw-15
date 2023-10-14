const refs = {
  form: document.querySelector(".login-form"),
};

const handleSubmit = (e) => {
  e.preventDefault();

  if (
    e.currentTarget.elements.email.value === "" ||
    e.currentTarget.elements.password.value === ""
  ) {
    alert("Всі поля повинні бути заповнені");
  } else {
    // const data = {
    //   email: e.currentTarget.elements.email.value,
    //   password: e.currentTarget.elements.password.value,
    // };
    const formData = new FormData(e.currentTarget);
    const data = {};

    formData.forEach((value, key) => {
      data[key] = value;
    });
    console.log("data", data);
    e.currentTarget.reset();
  }
};

refs.form.addEventListener("submit", handleSubmit);
