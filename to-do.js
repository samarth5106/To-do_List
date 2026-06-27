let task=document.getElementById("task");
let add_btn=document.getElementById("task_btn");
let task_section=document.getElementById("taskList");
let placeholder = document.getElementById("placeholder");


add_btn.addEventListener("click",(e)=>{
    e.preventDefault();
if(task.value.trim()==""){
    alert("Please enter a task");
    return;
}

placeholder.style.display = "none";
let taskDiv = document.createElement("div");
taskDiv.classList.add("task");

let task_checkbox = document.createElement("input");
task_checkbox.type = "checkbox";

let box_label = document.createElement("label");
box_label.innerText = task.value;

taskDiv.appendChild(task_checkbox);
taskDiv.appendChild(box_label);

task_section.appendChild(taskDiv);

task.value = "";

})

let delete_btn=document.getElementById("delt_Task");

delete_btn.addEventListener("click",(e)=>{
    //to remove that checkbox from the section which is checked
    e.preventDefault();
  let checkedBoxes = document.querySelectorAll(
    "input[type='checkbox']:checked"
);
if(checkedBoxes.length === 0) {
    alert("Please select a task to delete");
    return;
}

checkedBoxes.forEach((checkbox) => {
    checkbox.parentElement.remove();
});
if(task_section.children.length === 1){
    placeholder.style.display = "block";
}

   
})

