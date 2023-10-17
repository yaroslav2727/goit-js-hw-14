const ulistEl = document.querySelector("#categories");
const itemEls = ulistEl.children;

console.log("Number of categories: ", itemEls.length);

[...itemEls].forEach(itemEl => {
  console.log(`Category: ${itemEl.firstElementChild.textContent}`);
  console.log("Elements: ", itemEl.lastElementChild.children.length);
});
