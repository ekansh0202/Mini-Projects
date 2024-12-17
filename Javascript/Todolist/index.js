const inputValue = document.querySelector(".input");
const list = document.querySelector(".list");

let index = 0;
let data = ["Banana", "Mango", "Milk"];

document.addEventListener("DOMContentLoaded", () => {
  //Load initial list
  data.forEach((i) => {
    const item = createListElement(i);
    list.appendChild(item);
  });
});

inputValue.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    const item = createListElement(inputValue.value);

    //Add item to the list
    list.appendChild(item);

    //Clear the input field
    inputValue.value = "";
  }
});

const createListElement = (title) => {

  /** "item" IS THE NEW LIST ITEM HERE **/
  const item = document.createElement("div");

  //Add label
  const label = document.createElement("label");
  label.textContent = title;
  label.classList.add("label");

  //Add edit button
  const editButton = document.createElement("span");
  editButton.textContent = "✏️";
  editButton.classList.add("edit");

  //Add delete button
  const deleteButton = document.createElement("span");
  deleteButton.textContent = "🗑️";
  deleteButton.classList.add("delete");

  //Adding label, edit and delete to the new list item(div)
  item.appendChild(label);
  item.appendChild(editButton);
  item.appendChild(deleteButton);

  //Add class to the new item
  item.classList.add("item");

  //Add index/count attribute to the item for unique key
  item.setAttribute("data-id", index++);

  //Adding event listeners to edit and delete button of this new list item
  deleteButton.addEventListener("click", () => {
    list.removeChild(item);
  });

  editButton.addEventListener("click", () => {
    //Creating a new edit input field
    const newInput = document.createElement("input");
    newInput.value = label.textContent;
    newInput.classList.add("new-input");

    const saveButton = document.createElement("span");
    saveButton.textContent = "💾";
    saveButton.classList.add("save");

    //Hiding the existing label field and the edit button
    item.replaceChild(newInput, label);
    item.replaceChild(saveButton, editButton);

    //Adding event listener to the save button
    saveButton.addEventListener("click", () => {

      //Replacing the edit input field and save button with the old label(with new value) and edit button
      label.textContent = newInput.value;
      item.replaceChild(label, newInput);
      item.replaceChild(editButton, saveButton);
    });
  });

  return item;
};
