function addTask(para) {
    let allTask = localStorage.getItem("todoTask");

    //check that todoTask key exist in localStorage or not if not exist to initialize
    if(!allTask){
        let taskArr = [para];
        localStorage.setItem("todoTask",JSON.stringify(taskArr));
    }else{
        let parse = JSON.parse(allTask);
        parse.push(para);
        localStorage.setItem("todoTask",JSON.stringify(parse));
    }
}

function validateTask(para){
    let regex = /^[\d\s]+$/;
    let testing = regex.test(para);

    //input not a empty string
    if(para === ""){
        alert("Please Enter Valid Input")
        return
    }

    if(testing){
        alert("Please Enter Valid Input Only Number Not Accepted")
        return false
    }

    if(para.length > 30){
        alert("Task Cannot be more than 30 characters!")
        return false
    }

    //return true if every thing is true
    return true
}

export {addTask,validateTask};