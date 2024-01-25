var box = document.createElement('div');
box.style.position = 'fixed';
box.style.top = '200px';
box.style.left = '100px';
box.style.width = '200px';
box.style.height = '100px';
box.style.color = 'black';
box.style.background = 'lightblue';
box.style.padding = '20px';
box.style.cursor = 'grab';
box.innerText = 'Task Name';
box.draggable = true;
box.id = 'task';

box.ondrop = function() {
    $('#body').appendTo( $('#divForTasks>#task') );
};

function newTask() {
    document.getElementById("newText").textContent = "Task Created"; // Change Text Content of Button
    setTimeout(function () {
        document.getElementById("newText").textContent = "New Task";
    }, 1000)

    document.body.appendChild(box);
}
