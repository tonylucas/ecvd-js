var counter = 0,
    tasks = [],
    input = document.getElementsByTagName("input")[0],
    todoList = document.getElementsByClassName('todo-list')[0],
    taskElements = todoList.getElementsByTagName('li'),
    destroyButtons = document.getElementsByClassName('destroy');

if (localStorage.tasks != undefined) {
    tasks = JSON.parse(localStorage.tasks);
}

updateTasks();

function destroyTask(taskId) {
    console.log('delete');
    for (var i = 0; i < tasks.length; i++) {
        if (tasks[i].id == taskId) {
            tasks.splice(i, 1);
            break;
        }
    }
    updateTasks();
    
}

function toggleComplete(taskId) {
    for (var i = 0; i < tasks.length; i++) {
        if (tasks[i].id == taskId) {
            tasks[i].completed = !tasks[i].completed;
            break;
        }
    }
    updateTasks();
}

function editTask() {
    console.log(event.target);
}

function updateLocalTasks() {
    localStorage.tasks = JSON.stringify(tasks);
}

function updateTasks() {
    updateLocalTasks();
    
    todoList.innerHTML = '';
    var localTasks = tasks;
    if (localStorage.tasks != undefined) {
        localTasks = JSON.parse(localStorage.tasks);
    }

    localTasks.forEach(function (task) {

        var li = document.createElement("li");
        if (task.completed)
            li.setAttribute("class", 'completed');
        li.setAttribute("data-id", task.id);
        
        var view = document.createElement("div");
        view.setAttribute("class", "view");

        
        if (task.completed)
            view.innerHTML += '<input class="toggle" type="checkbox" checked>';
        else
            view.innerHTML += '<input class="toggle" type="checkbox">';

        view.innerHTML += '<label>' + task.value + '</label>';
        
        

        var destroyButton = document.createElement("button");
        destroyButton.setAttribute("class", "destroy");
        destroyButton.setAttribute("data-id", task.id);
        li.appendChild(view);
        li.innerHTML += '<input class="edit" value="' + task.value + '">';
        view.appendChild(destroyButton);
        todoList.appendChild(li);

    });

    for (var i = 0; i < destroyButtons.length; i++) {
        destroyButtons[i].setAttribute("onclick", "destroyTask(" + destroyButtons[i].getAttribute('data-id') + ")");
    }

    for (var i = 0; i < taskElements.length; i++) {
//        taskElements[i].setAttribute("onclick", "toggleComplete(" + taskElements[i].getAttribute('data-id') + ")");
    }
    
    for (var i = 0; i < taskElements.length; i++) {
//        taskElements[i].setAttribute("ondblclick", "editTask(this)");
        taskElements[i].addEventListener("ondblclick", function(){
            console.log('ok');
        });
    }
}

input.addEventListener('keydown', function (event) {
    if ((event.which == 13 || event.keyCode == 13) && input.value != "") {

        counter++;
        tasks.push({
            id: counter,
            value: input.value,
            completed: false
        });
        updateTasks();
        input.value = "";


    }
});