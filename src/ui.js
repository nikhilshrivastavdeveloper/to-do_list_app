import { ValidateTask } from "./addTask.js";

let taskContainer = document.querySelector("#Task-Container");
let from = document.querySelector("#taskForm");
let input = document.querySelector("#task-input-field");

function showAllTask(){
    let allTask = localStorage.getItem("todoTask");
    let convertIntoReadableFormat = JSON.parse(allTask);

    if(allTask && convertIntoReadableFormat.length > 0){
        taskContainer.innerHTML = "";

        let unorderList = document.createElement("ul");
        taskContainer.appendChild(unorderList);

        convertIntoReadableFormat.forEach((singalValue,index) => {

             let li = document.createElement("li");
             li.innerHTML = `<span>${singalValue}</span>`;
             li.setAttribute("id",index)
             unorderList.appendChild(li)

             let updateBtn = document.createElement("button");
             updateBtn.innerHTML = '<i class="fa-solid fa-pencil"></i>';
             updateBtn.setAttribute("class","Update");
             li.appendChild(updateBtn)

             let removeBtn = document.createElement("button");
             removeBtn.innerHTML = '<i class="fa-solid fa-trash-arrow-up"></i>';
             removeBtn.setAttribute("class","Delete");
             li.appendChild(removeBtn)
        })
    }
    else{
        taskContainer.innerHTML = "<h3>No tasks found! Add a new task to your list</h3>";
    }
}

function manageTask(event){

    console.log(event.target)
    if(event.target.tagName === "BUTTON"){
        // let text = event.target.parentNode.firstElementChild.innerText;
        // let allTask = localStorage.getItem("todoTask");
        // let convertIntoReadableFormat = JSON.parse(allTask);
        // let index = convertIntoReadableFormat.includes(text);
        // console.log(index)
    }
}

window.addEventListener("load",showAllTask);

from.addEventListener("submit", (e) => {
    e.preventDefault()
    ValidateTask(input.value.trim());
    showAllTask();
    from.reset()
})

taskContainer.addEventListener("click",(e) => {
    manageTask(e)
});