// document.addEventListener("DOMContentLoaded", () => {
//   // your code here
// });
const main = document.querySelector('#main-content');

const taskForm = document.querySelector('#create-task-form');

const taskList = document.querySelector('#tasks');
const theList = document.querySelector('#list');




taskForm.addEventListener('submit', function(e) {
  e.preventDefault()
  let newTask = document.querySelector('#new-task-description').value;
  newLi = document.createElement('li')
  newLi.innerText = newTask
  
  
  
 
  
  taskList.innerHTML += `<li>${newTask}
  <button data-action="delete"> delete </button> </li>`
  
  taskForm.reset();
  console.log(theList);
  
  
  
    
    
       
    
  })
  
  taskList.addEventListener('click', function(e) {
     
    if (e.target.dataset.action === "delete") {
      e.target.parentElement.remove()

    }
   

  })





// document.getElementById("myBtn").addEventListener("click", function() {
//   document.getElementById("demo").innerHTML = "Hello World";
// });
