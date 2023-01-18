function addTo(e) {
  e.preventDefault();
  let inputValue = document.getElementById("inputField").value;

  if (inputValue) {
    document.getElementById(
      "task"
    ).innerHTML += `<div class ="tasks"> <span id="task-names">${inputValue}</span><button class="edit"><i class="fas fa-check"></i></button><button class="delete"><i class="far fa-trash-alt"></i></button></div>`;
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
  let edit_tasks = document.querySelectorAll('.edit');
  for (let index = 0; index < edit_tasks.length; index++) {
    edit_tasks[index].onclick = function () {
      document.querySelectorAll('#task-names')[index].classList.toggle('line');
    
      } 
 }
}
document.getElementById("btn").addEventListener("click", addTo);

