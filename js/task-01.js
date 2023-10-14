const list = document.querySelector("#categories");
const listItems = list.children;
const numberOfCategories = listItems.length;
console.log("Number of categories:", numberOfCategories); //first variant

let categories = 0;
Array.from(listItems).forEach((item) => {
  categories += 1;
  console.log("Category:", item.firstElementChild.textContent);
  console.log("Elements:", item.lastElementChild.children.length);
});

// console.log("Number of categories:", categories); //second variant
