import { addTask, validateTask} from "./addTask.js";
import { deleteTask } from "./removeTask.js";
import { updateTask } from "./updateTask.js";

let taskContainer = document.querySelector("#Task-Container");
let from = document.querySelector("#taskForm");
let input = document.querySelector("#task-input-field");

function showAllTask() {
    let allTask = localStorage.getItem("todoTask") || "[]";
    let convertIntoReadableFormat = JSON.parse(allTask);

    if (convertIntoReadableFormat.length > 0) {
        taskContainer.innerHTML = "";

        let unorderList = document.createElement("ul");
        taskContainer.appendChild(unorderList);

        convertIntoReadableFormat.forEach((singalValue, index) => {

            let li = document.createElement("li");
            li.innerHTML = `<span>${singalValue}</span>`;
            li.setAttribute("id", index)
            unorderList.appendChild(li)

            let updateBtn = document.createElement("button");
            updateBtn.innerHTML = '<i class="fa-solid fa-pencil"></i>';
            updateBtn.setAttribute("class", "Update");
            li.appendChild(updateBtn)

            let removeBtn = document.createElement("button");
            removeBtn.innerHTML = '<i class="fa-solid fa-trash-arrow-up">';
            removeBtn.setAttribute("class", "Delete");
            li.appendChild(removeBtn)
        })
    }
    else {
        taskContainer.innerHTML = "<h2>No tasks found! Add a new task to your list</h2>";
    }
}

function manageTask(event) {

    //delete task
    if (event.target.tagName === "I" && event.target.parentElement.className === "Delete") {
        let text = event.target.parentElement.parentElement.firstElementChild.innerHTML;
        deleteTask(text)
    }

    if (event.target.tagName === "BUTTON" && event.target.className === "Delete") {
        let text = event.target.parentElement.firstElementChild.innerHTML;
        deleteTask(text);
    }

    //update task
    if (event.target.tagName === "I" && event.target.parentElement.className === "Update") {
        let listID = event.target.parentElement.parentElement.id;
        updateTask(listID)
    }

    if (event.target.tagName === "BUTTON" && event.target.className === "Update") {
        let listID = event.target.parentElement.id;
        updateTask(listID)
    }

}

window.addEventListener("load", showAllTask);

from.addEventListener("submit", (e) => {
    e.preventDefault()
    let res = validateTask(input.value.trim())
    if(res){
        addTask(input.value.trim());
    }
    showAllTask();
    from.reset()
})

taskContainer.addEventListener("click", (e) => {
    manageTask(e)
});

export {showAllTask}