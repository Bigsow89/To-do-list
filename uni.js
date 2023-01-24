function addTo(e) {
  e.preventDefault();
  let inputValue = document.getElementById("inputField").value;

  if (inputValue) {
    document.getElementById(
      "task"
    ).innerHTML += `<div class ="tasks"> <span id="task-names">${inputValue}</span><button class="check"><i class="fas fa-check"></i></button><button class="prompt"><i class="fas fa-comment"></i></button><button class="delete"><i class="far fa-trash-alt"></i></button></div>`;
    inputField.value = ""
  } else {
    alert("Error");
  }
  let current_tasks = document.querySelectorAll(".delete");
  for (let i = 0; i < current_tasks.length; i++) {
    current_tasks[i].onclick = function () {
      this.parentNode.remove();
    };
  }
  let edit_tasks  = document.querySelectorAll('.prompt')
  for(let i = 0; i < edit_tasks.length; i++) {
    edit_tasks[i].onclick = function () {
      let taskToEdit = document.querySelectorAll('#task-names')[i];
      let promptValue = prompt("Enter a new value for this task:");
      if (promptValue) {
        taskToEdit.textContent = promptValue;
        }
    }
  }
  let check_tasks = document.querySelectorAll('.check');
  for (let index = 0; index < check_tasks.length; index++) {
    check_tasks[index].onclick = function () {
      document.querySelectorAll('#task-names')[index].classList.toggle('line');
    
      } 
 }
}
document.getElementById("btn").addEventListener("click", addTo);

