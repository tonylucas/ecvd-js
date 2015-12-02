var counter = 1;
var tasks = [];
var input = document.getElementsByTagName("input")[0];
var todoList = document.getElementsByClassName('todo-list')[0];
var destroyButtons = document.getElementsByClassName('destroy');

input.addEventListener('keydown', function (event) {
    if (event.which == 13 || event.keyCode == 13) {

        tasks.push({
            value: input.value,
            id: counter
        });

        updateTasks();
        input.value = "";
        counter++;


        for (var i = 0; i < destroyButtons.length; i++) {
            console.log(destroyButtons[i]);
            //    destroyButtons[i].onclick = destroyTask(id);
        }

    }
});




function updateTasks() {
    todoList.innerHTML = '';
    tasks.forEach(function (task) {

        var li = document.createElement("li");
        li.innerHTML = '<input class="toggle" type="checkbox">';
        li.innerHTML += '<label>' + task.value + '</label>';
        
        var destroyButton = document.createElement("button");
        destroyButton.setAttribute("class", "destroy");
        destroyButton.setAttribute("data-id", task.id);
        li.appendChild(destroyButton);
        todoList.appendChild(li);
    });
}