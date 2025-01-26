import { showAllTask } from "./ui.js";

function deleteTask(para){
    let allTask = localStorage.getItem("todoTask");
    let convertIntoReadableFormat = JSON.parse(allTask);
    let index = convertIntoReadableFormat.indexOf(para);
    convertIntoReadableFormat.splice(index,1);
    localStorage.setItem("todoTask",JSON.stringify(convertIntoReadableFormat));
    showAllTask()
}

export {deleteTask}