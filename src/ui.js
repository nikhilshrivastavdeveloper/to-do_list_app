import { addTask, validateTask} from "./addTask.js";
import { deleteTask } from "./removeTask.js";
import { updateTask } from "./updateTask.js";

//access element for manipulation
let taskContainer = document.querySelector("#Task-Container");
let from = document.querySelector("#taskForm");
let input = document.querySelector("#task-input-field");

//that function show all task on webpage from fetching localstorage
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
            
            let updateBtn = document.createElement("button");
            updateBtn.innerHTML = '<i class="fa-solid fa-pencil"></i>';
            updateBtn.classList.add("Update");
            li.appendChild(updateBtn)

            let removeBtn = document.createElement("button");
            removeBtn.innerHTML = '<i class="fa-solid fa-trash-arrow-up">';
            removeBtn.classList.add("Delete");
            li.appendChild(removeBtn)

            unorderList.prepend(li)//li append into ul
        })
    }
    else {
        taskContainer.innerHTML = "<h2>Start Adding new task in your list</h2>";
    }
}

function manageTask(event) {

    //delete task
    if (event.target.tagName === "I" && event.target.parentElement.className === "Delete") {
        let id = event.target.parentElement.parentElement.id;
        deleteTask(id)
    }

    if (event.target.tagName === "BUTTON" && event.target.className === "Delete") {
        let id = event.target.parentElement.id;
        deleteTask(id);
    }

    //update task
    if (event.target.tagName === "I" && event.target.parentElement.className === "Update") {
        let text = event.target.parentElement.previousElementSibling.innerText;
        let listID = event.target.parentElement.parentElement.id;
        updateTask(listID,text)
    }

    if (event.target.tagName === "BUTTON" && event.target.className === "Update") {
        let text = event.target.previousElementSibling.innerText;
        let listID = event.target.parentElement.id;
        updateTask(listID,text)
    }

}

window.addEventListener("load", showAllTask);

from.addEventListener("submit", (e) => {
    e.preventDefault()
    let userInput = input.value.trim()
    let res = validateTask(userInput)
    if(res){
        addTask(userInput);
    }
    showAllTask();
    from.reset()
})

taskContainer.addEventListener("click", (e) => {
    manageTask(e)
});

export {showAllTask}