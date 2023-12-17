let toggleChecked = function(itemList) {
    let todoList = itemList.parentNode;
    todoList.classList.toggle('checked');
}

let deleteElement = function(itemList) {
    let todoList = itemList.parentNode;
    todoList.remove();
}

let addTodo = function(task) {
    let todolist = document.querySelector('#todoList');

    let itemList = document.createElement('li');
    let label = document.createElement('label');
    label.innerHTML = task.value;

    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.onclick = function() {
        toggleChecked(this);
    }

    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete';
    deleteButton.className = 'delete';
    deleteButton.onclick = function () {
        deleteElement(this);
    }

    itemList.appendChild(checkbox);
    itemList.appendChild(label);
    itemList.appendChild(deleteButton);

    todolist.appendChild(itemList);
}

document.getElementById('addButton').onclick = function() {
    let task = document.querySelector('#todoInput');
    if (task.value !== '') {
        addTodo(task);
        task.value = '';
    }
}