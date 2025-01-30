import { showAllTask } from "./ui.js";

function updateTask(id,text) {
    let newInput = prompt("Update Your Task",text) ?? "";
    let removeSpace = newInput.trim();
    let regex = /^[0-9\s]+$/;
    let test = regex.test(removeSpace);

    //check that user enter only valid input not number
    if (test) {
        alert("Please Enter Valid Input Only Number Not Accepted")
        return
    }

    //check length
    if(removeSpace.length > 30){
        alert("Task Cannot be more than 30 characters!")
        return
    }

    //check that user input is not a null and empty string
    if (removeSpace !== "") {
        let allTask = localStorage.getItem("todoTask");
        let convertIntoReadableFormat = JSON.parse(allTask);
        convertIntoReadableFormat[id] = removeSpace;
        localStorage.setItem("todoTask",JSON.stringify(convertIntoReadableFormat))
        showAllTask()
    }
}

export { updateTask }