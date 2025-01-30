import { showAllTask } from "./ui.js";

function deleteTask(id){
    let allTask = localStorage.getItem("todoTask");
    let convertIntoReadableFormat = JSON.parse(allTask);
    convertIntoReadableFormat.splice(id,1);
    localStorage.setItem("todoTask",JSON.stringify(convertIntoReadableFormat));
    showAllTask()
}

export {deleteTask}