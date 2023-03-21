// document.querySelector('#add-task').onclick = function(){
//     if (document.querySelector('#new-task input').value.length === 0) {
//         alert("Enter new task!")
//     } else {
//         document.querySelector('#tasks').innerHTML +=
//     }
// }
// initializing a variable for the add button and adding an event listener
let addTask = document.getElementById('add-task')
addTask.addEventListener( "click", addItem)

// declaring a function for the event
function addItem() {
    alert ("You clicked on the add button!")
}


//  ----------------------------------------------------------------------
// for the completed button
let completedButton = document.getElementById('check-task-item')
completedButton.addEventListener("click", markComplete)

// declaring the function
function markComplete() {
    alert ("Tasks completed")
}



//  ----------------------------------------------------------------------
// for the delete button
let deleteTask = document.getElementById('delete-tasks')
deleteTask.addEventListener("click", clearTask )

// declaring the function
function clearTask() {
    alert ("Tasks List Cleared")
}

//  ----------------------------------------------------------------------
// for the save button
let taskSaved = document.getElementById('save-task')
taskSaved.addEventListener("click", saveTask )

// declaring the function
function saveTask() {
    alert ("Task Saved")
}


// for the task list section
let taskListBox = document.getElementById('task-list-box')
let taskList = document.getElementById('task-list')

// function to add item to the list
 newItem = function(textItem, completed){
    let item = document.createElement('li')
    let toDoText = document.createTextNode (textItem)
    item.appendChild(toDoText)

    if (completed) {
        item.classList.add("completed")
    }

    taskList.appendChild(item);
    item.addEventListener("click", clickItem )

 }

 function addTaskItem() {
    let textItem = taskListBox.value
    newItem(textItem, false)
}



function clickItem() {
    if (this.classList.contains("completed")) {
        this.classList.remove("completed");
    } else {
        this.classList.add("completed");
    }
}
