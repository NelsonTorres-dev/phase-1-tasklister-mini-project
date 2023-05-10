

// document.addEventListener("DOMContentLoaded", () => {

//   let form = document.querySelector('form')
//   form.addEventListener('submit', (e) => {
//     e.preventDefault()
//     buildToDo(e.target.new_task_description.value)
//     form.reset()
//   })

// });


// function buildToDo(todo){
//   let li = document.createElement('li')

//   let btn = document.createElement('button')
//   btn.addEventListener('click', handleDelete)
//   btn.textContent = 'X'

//   li.textContent = `${todo} `
//   li.appendChild(btn)
//   console.log(li)
//   document.querySelector('#tasks').appendChild(li)
// }


// function handleDelete(e){
//   e.target.parentNode.remove()
// }


document.addEventListener("DOMContentLoaded", () => {
  addingEventListeners()
})
// get the form and add an event listener
function addingEventListeners(){
  document.getElementById("create-task-form" ).addEventListener("submit", handleFormSubmit)
}

function handleFormSubmit(e){
  e.preventDefault()
  // console.log(e)
  const task = e.target[0].value
  const priorityLevel = parseInt(e.target.priority.value)
  
  console.log(priorityLevel)

  displayTask(task, priorityLevel)
}

function displayTask(task, priorityLevel){
  const taskUl = document.getElementById("tasks")
  const taskLi = document.createElement("li")
  const deleteBtn = document.createElement("button")

  deleteBtn.textContent = "X"
  deleteBtn.addEventListener('click', deleteTask)


  taskLi.textContent = task + " "
  taskLi.style.color = getPriorityColor(priorityLevel)
  taskLi.appendChild(deleteBtn)
  taskUl.appendChild(taskLi)
}

function deleteTask(e){
  console.log(e)
  e.target.parentNode.remove()
}

function getPriorityColor(priorityLevel){
  if (priorityLevel === 1) {
      return "red"
  } else if(priorityLevel === 2){
    return "blue"
  } else {
    return "green"
  }
}