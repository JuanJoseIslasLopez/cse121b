function fetchTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); 
    })
    .then(todos => {
        console.log(todos);
        displayTodos(todos);
    })
    .catch(error => {
        console.error('There was a problem with your fetch operation:', error);
    });
}


    const taskList = document.getElementById("taskList");
    todos.forEach(todo => {
        const taskElement = document.createElement("div");
        taskElement.className = "task";
        taskElement.innerHTML = `<input type="checkbox" onchange="completeTask(this)"> ${todo.title}`;
        taskList.appendChild(taskElement);
    });


function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();
    if (taskText !== "") {
        var taskList = document.getElementById("taskList");
        var taskElement = document.createElement("div");
        taskElement.className = "task";
        taskElement.innerHTML = '<input type="checkbox" onchange="completeTask(this)"> ' + taskText + '<button onclick="deleteTask(this)">Delete</button>';
        taskList.appendChild(taskElement);
        taskInput.value = "";
    }
}

function completeTask(checkbox) {
    var taskElement = checkbox.parentNode;
    var taskText = taskElement.textContent.trim();
    var completedTasksList = document.getElementById("completedTasks");
    var currentDate = new Date().toLocaleDateString();

    if (checkbox.checked) {
        taskElement.parentNode.removeChild(taskElement); 
        var completedTaskItem = document.createElement("li");
        completedTaskItem.textContent = taskText + " (Completed on: " + currentDate + ")";
        completedTasksList.appendChild(completedTaskItem); 
    } else {
        
        var taskList = document.getElementById("taskList");
        var newTaskElement = document.createElement("div");
        newTaskElement.className = "task";
        newTaskElement.innerHTML = '<input type="checkbox" onchange="completeTask(this)"> ' + taskText;
        taskList.appendChild(newTaskElement);
        completedTasksList.removeChild(taskElement); 
    }
}


function deleteTask(button) {
    var completedTaskItem = button.parentNode;
    completedTaskItem.parentNode.removeChild(completedTaskItem);

}




fetchData();
