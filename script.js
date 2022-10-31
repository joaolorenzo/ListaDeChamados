const inputElement = document.querySelector(".new-task-input")
const addTaskButton = document.querySelector("#new-task-button")
const tasksContainer = document.querySelector(".tasks-container")

const validateInput = () => inputElement.value.trim().length > 0;

function handleAddTask () {
    const inputIsValid = validateInput()

    if(!inputIsValid){
        return inputElement.classList.add("error")
    }

    const taskItemContainer = document.createElement('div')
    taskItemContainer.classList.add('task-item')

    const taskText = document.createElement('p')
    taskText.innerText = inputElement.value

    taskText.addEventListener('click', () => handleConcludedClick(taskText))

    const deleteItem = document.createElement('i')
    deleteItem.classList.add('far')
    deleteItem.classList.add('fa-trash-alt')

    deleteItem.addEventListener('click', () => handleDeleteClick(tasksContainer, taskItemContainer))

    taskItemContainer.appendChild(taskText)
    taskItemContainer.appendChild(deleteItem)

    tasksContainer.appendChild(taskItemContainer)
    inputElement.value = ""
}

//Completar
function handleConcludedClick (taskItemContainer) {
    return taskItemContainer.classList.toggle("completed")
}

// Deletar
function handleDeleteClick (tasksContainer, taskItemContainer) {
    tasksContainer.removeChild(taskItemContainer)
}

//verificar se o campo esta preenchido
function handleInputChange () {
    if(validateInput()){
        return inputElement.classList.remove("error")
    }
}

window.addEventListener('keydown', (e) => {
    if (e.which == 13){
        handleAddTask();
    }
})

addTaskButton.addEventListener('click', () => handleAddTask())
inputElement.addEventListener('change', () => handleInputChange())