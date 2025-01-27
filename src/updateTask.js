import { showAllTask } from "./ui.js";

function updateTask(id) {
    let newInput = prompt("Update Your Task");
    let regex = /^\d+$/;
    let test = regex.test(newInput);

    //check that user enter only valid input not number
    if (test) {
        alert("Invalid Input")
        return
    }

    //check that user input is not a null and empty string
    if (newInput) {
        let allTask = localStorage.getItem("todoTask");
        let convertIntoReadableFormat = JSON.parse(allTask);
        convertIntoReadableFormat[id] = newInput;
        localStorage.setItem("todoTask",JSON.stringify(convertIntoReadableFormat))
        showAllTask()
    }

}

export { updateTask }