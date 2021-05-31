// document.addEventListener("DOMContentLoaded", () => {
//   // your code here
// });
const main = document.querySelector('#main-content');

const taskForm = document.querySelector('#create-task-form');


taskForm.addEventListener('submit', function(e) {
  e.preventDefault()
  const newTask = document.querySelector('#new-task-description').value;
  console.log(newTask);
  main.append(newTask);
})