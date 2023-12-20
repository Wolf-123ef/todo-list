function addTask(){
    var taskInput = document.getElementById("taskInput");
    var timeInput = document.getElementById("timeInput");
    var taskList = document.getElementById("TASKLIST");
    if(taskInput.value.trim()===""&timeInput.value.trim()===""){
        alert("Don't leave the input box empty")
        return;
    }
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(taskInput.value+" ::"+"  "));
    li.appendChild(document.createTextNode(timeInput.value));
    taskList.appendChild(li);
    taskInput.value = "";
    timeInput.value=" ";

    var deleteButton = document.createElement("button");
    deleteButton.appendChild(document.createTextNode("Delete"));
    deleteButton.onclick = function(){
        taskList.removeChild(li);
    }
    li.appendChild(deleteButton);
    taskList.appendChild(li);
    taskInput.value="";
}
function addTask2(){
    var taskInput2 = document.getElementById("importantTaskInput");
    var timeInput2 = document.getElementById("timeInput2");
    var taskList2 = document.getElementById("importantTaskList");
    if(taskInput2.value.trim()===""&timeInput2.value.trim()===""){
        alert("Don't leave the input box empty.")
        return;
    }
    var li2 = document.createElement("li");
    li2.appendChild(document.createTextNode("IMPORTANT TASK:- \n"+taskInput2.value+" ::"+" "));
    li2.appendChild(document.createTextNode(timeInput2.value));
    taskList2.appendChild(li2);
    taskInput2.value="";
    timeInput2.value="";

    var deleteButton2 = document.createElement("button");
    deleteButton2.appendChild(document.createTextNode("Delete"));
    deleteButton2.onclick = function(){
        taskList2.removeChild(li2);
        
    }
    li2.appendChild(deleteButton2);
    taskList2.appendChild(li2);
    taskInput2.value="";
}