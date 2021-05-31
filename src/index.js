// document.addEventListener("DOMContentLoaded", () => {
//   // your code here
// });
const main = document.querySelector('#main-content');

const taskForm = document.querySelector('#create-task-form');

const taskList = document.querySelector('#tasks');



taskForm.addEventListener('submit', function(e) {
  e.preventDefault()
  const newTask = document.querySelector('#new-task-description').value;
  newLi = document.createElement('li')
  newLi.innerText = newTask
  taskList.append(newLi);
})