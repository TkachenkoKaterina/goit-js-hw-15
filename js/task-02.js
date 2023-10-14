const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

function creatMarkup(arr) {
  const markup = arr.map((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    li.classList.add("item");
    return li;
  });

  console.log(list);
  list.append(...markup);
}

creatMarkup(ingredients);

// ingredients.forEach((item) => {
//   const listItem = document.createElement("li");
//   listItem.textContent = item;
//   listItem.classList.add("item");
//   console.log(first);
//   list.append(listItem);
// });
