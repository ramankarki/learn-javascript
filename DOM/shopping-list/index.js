let inputField = document.querySelector(".input-item-js");
let addBtn = document.querySelector(".add-item-js");
let delBtn = document.querySelector(".delete-item-js");
let listItems = document.querySelector(".list");

let addDelBtn = (li) => {
    let btn = document.createElement("button");
    btn.textContent = "delete";
    btn.setAttribute("class", "delete-item delete-item-js");
    li.appendChild(btn);
}

let delItem = (event) => {
    let item = event.target.parentNode;
    let list = event.target.parentNode.parentNode;
    list.removeChild(item);
}

let addItem = () => {
    if (typeof inputField.value === "string" && inputField.value !== "") {
        let li = document.createElement("li");
        li.textContent = inputField.value;
        inputField.value = "";
        li.setAttribute("class", "list__item");
        addDelBtn(li);
        document.querySelector(".list").appendChild(li);
        inputField.focus();
    }
}

inputField.focus();
addBtn.addEventListener("click", addItem);
listItems.addEventListener("click", delItem);
