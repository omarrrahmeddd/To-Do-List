function addTask(){
    let taskInput=document.getElementById("taskInput");
    let addbtn=document.getElementById("addTaskBtn");
    let taskList=document.getElementById("taskList");

    if(taskInput.value == ""){
        alert("Please enter a task");
        return;
    }else{
        let li=document.createElement("li");
        li.innerHTML=taskInput.value;
        taskList.appendChild(li);

        
        let span=document.createElement("span");
        span.innerHTML="&times;";
        li.appendChild(span);
        
    }
    taskInput.value="";
    saveafterrefresh();
}
// add by enter key
let taskInput=document.getElementById("taskInput");
taskInput.addEventListener("keypress",function(e){
    if(e.key === "Enter"){
        addTask();
    }
});

addTaskBtn.addEventListener("click",addTask);

taskList.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveafterrefresh();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveafterrefresh();
    }
});
function saveafterrefresh(){
localStorage.setItem("data",taskList.innerHTML);
}
function showTask(){
    taskList.innerHTML=localStorage.getItem("data");
}
showTask();
//another way to task list
// taskList.addEventListener('click',()=>
//     {
//         if(event.target.tagName === "LI"){
//             event.target.classList.toggle("checked");
//             saveafterrefresh();
//         }        else if(event.target.tagName === "SPAN"){
//             event.target.parentElement.remove();
//             saveafterrefresh();
//         }
// });