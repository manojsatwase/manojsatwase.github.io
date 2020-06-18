const todoInputEl = document.querySelector(".todo__input");
const todoListEl = document.querySelector(".todo__list");
const todoItemEls = document.querySelectorAll(".todo__item");

function addListItem() {
  todoInputEl.addEventListener("keypress", function(event) {
   
    if (event.keyCode === 13) {
      if(todoInputEl.value ==="") return "";
      let newListItem = createListItem(todoInputEl.value);
      let newListSpan = CreateListSpan();

      // todoListEl.appendChild(newListItem);
      todoListEl.insertBefore(newListItem, todoListEl.childNodes[0]);
      newListItem.insertBefore(newListSpan, todoListEl.previousElementSibling);
      todoInputEl.value = "";
      const deleteItem = document.querySelector(".deleteItem");
      deleteItem.onclick = removeItem;
    }
    
  });
}

// function toggleDone() {
//   for (let elem of todoItemEls) {
//     elem.addEventListener("click", function() {
//       elem.classList.toggle("done");
//     })
//   }
// }

function toggleDone() {
  todoListEl.addEventListener("click", function(event) {
    if (event.target.classList.contains("todo__item")) {
      event.target.classList.toggle("done");
    }
  });
}

toggleDone();

function createListItem(text) {
  let newListElement = document.createElement("li");
  newListElement.setAttribute("class", "todo__item");
  newListElement.textContent = text;
  return newListElement;
}

function CreateListSpan() {
  let newSpanElement = document.createElement("span");
  newSpanElement.setAttribute("class", "deleteItem");
  newSpanElement.innerHTML = "&times;";
  return newSpanElement;
}
//remove item
function removeItem(e) {
  const todoListEl = document.querySelector(".todo__list");
  todoListEl.removeChild(e.target.parentElement);
}

addListItem();
