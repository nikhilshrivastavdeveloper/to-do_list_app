function addTask(para) {
    if(para === ""){
        alert("Please Enter Valid Input")
        return
    }

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

export {addTask};