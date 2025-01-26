
function addTask(para) {
    let allTask = localStorage.getItem("todoTask");

    //check that todoTask key exist in localStorage or not if not exist to initialize
    if(!allTask){
        let taskArr = [];
        taskArr.push(para)
        localStorage.setItem("todoTask",JSON.stringify(taskArr));
    }else{
        let parse = JSON.parse(allTask);
        parse.push(para);
        localStorage.setItem("todoTask",JSON.stringify(parse));
    }
}

function ValidateTask(para) {
    let regex = /^[a-zA-Z0-9\s\-\,\_\.]+$/;
    let testing1 = regex.test(para);
    let testing2 = Number(para); // if user task successfully convert into number mean its invalid task

    //true and NaN -> if execute
    if (testing1 && !testing2) {
        addTask(para)
    }
    else {
        alert("Please Enter Valid Task")
        return;
    }
}


export {ValidateTask};