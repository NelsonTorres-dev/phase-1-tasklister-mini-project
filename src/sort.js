

document.addEventListener("DOMContentLoaded", () => {
  addingEventListeners()
})

let taskObjArr = []

// get the form and add an events listener
function addingEventListeners(){
  document.getElementById("create-task-form" ).addEventListener("submit", handleFormSubmit)
  document.getElementById("sort-tasks").addEventListener("change", sortTasks)
}

function handleFormSubmit(e){
  e.preventDefault()
  // console.log(e)
  const task = e.target[0].value
  const priorityLevel = parseInt(e.target.priority.value)
  
  const taskObj = {task, priorityLevel}
  taskObjArr.push(taskObj)
  // console.log(priorityLevel)
  console.log(taskObjArr)

  sortTasks()
  displayTask()
}


//display task
function displayTask(){
  const taskUl = document.getElementById("tasks")
  taskUl.innerHTML = ""

  taskObjArr.forEach((task) => {
    const taskLi = document.createElement("li")
    const deleteBtn = document.createElement("button")
    deleteBtn.textContent = "X"
    deleteBtn.addEventListener('click', (e) => deleteTask(e,task))
    taskLi.textContent = task.task + " "
    taskLi.style.color = getPriorityColor(task.priorityLevel)
    taskLi.appendChild(deleteBtn)
    taskUl.appendChild(taskLi)
  })

}
//delete task
function deleteTask(e, task){
  console.log(e)
  taskObjArr = taskObjArr.filter((element) => element.task !== task.task)
  e.target.parentNode.remove()
}
//get priority colors
function getPriorityColor(priorityLevel){
  if (priorityLevel === 1) {
      return "red"
  } else if(priorityLevel === 2){
    return "blue"
  } else {
    return "green"
  }
}
//sort tasks
function sortTasks(){
  console.log('in sorTasks')
  const sortTasksSelect = document.getElementById("sort-tasks")
  if(sortTasksSelect.value === "h-l"){
    taskObjArr.sort((a,b) => a.priorityLevel - b.priorityLevel)
  } else {
    taskObjArr.sort((a,b) => b.priorityLevel - a.priorityLevel)
  }
  displayTask()
}