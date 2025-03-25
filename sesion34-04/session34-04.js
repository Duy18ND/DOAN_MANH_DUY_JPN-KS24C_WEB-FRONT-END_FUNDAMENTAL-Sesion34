let todolist = [];
let idCounter = 0;

function btnAdd() {
    let inputListElement = document.getElementById("inputList").value;
    let addTodoListElement = document.querySelector(".addTodoList");

    if (inputListElement.trim() === "") {
        return alert("Todo List rỗng. Vui lòng nhập lại");
    }

    let id = idCounter++;
    let newTodoList = {
        id: id,
        name: inputListElement,
    };
    todolist.push(newTodoList);

    let html = `
    <div class="containerList" id="${id}">
        <div>${newTodoList.name}</div>
        <button class ="btnDelete" onclick="deleteTask(${id})">Xóa</button>
    </div>
    `;

    addTodoListElement.innerHTML += html;
    document.getElementById("inputList").value = "";
}
function deleteTask(id) {
    let taskID = document.getElementById(id);
    if (taskID) {
        taskID.remove();
    }
}