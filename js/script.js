// seleção de elementos
const todoForm = document.querySelector('#lista-tarefas-forms')
const todoInput = document.querySelector('#form-input')
const todoList = document.querySelector('#lista-tarefas')
const editForm = document.querySelector('#edita-form')
const editInput = document.querySelector('#edit-input')
const cancelEditbtn = document.querySelector('#btn-cancelar')


let oldInputValue
// funções
const saveTodo = (text) => {

    const todo = document.createElement('div')
    todo.classList.add('tarefas')

    const todoTitle = document.createElement('h3')
    todoTitle.innerText = text
    todo.appendChild(todoTitle)
    


    const doneBtn = document.createElement('button')
    doneBtn.classList.add('tarefa-finalizada')
    doneBtn.innerText = '✔️'
    todo.appendChild(doneBtn)

    const editBtn = document.createElement('button')
    editBtn.classList.add('tarefa-edita')
    editBtn.innerText = '✏️'
    todo.appendChild(editBtn)

    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('tarefa-remove')
    deleteBtn.innerText = '❌'
    todo.appendChild(deleteBtn)

    todoList.appendChild(todo)
    todoInput.value = ''
    todoInput.focus()
}

const toggleForms = () => {
    editForm.classList.toggle('hide')
    todoForm.classList.toggle('hide')
    todoList.classList.toggle('hide')
}

const updateTodo = (text) => {

    const todos = document.querySelectorAll('#lista-tarefas')

    todos.forEach((todo) => {

        let todoTitle = todo.querySelector('h3')

        console.log(todoTitle)

        if(todoTitle.innerText === oldInputValue) {
            todoTitle.innerText = text
        }
    })
} 

// eventos
todoForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const inputValue = todoInput.value

    if(inputValue) {
        saveTodo(inputValue)
    }
})

document.addEventListener('click', (elemento) => {
    const targetElemento = elemento.target
    const parentElemento = targetElemento.closest('div')

    let todoTitle

    if(parentElemento && parentElemento.querySelector('h3')) {
        todoTitle = parentElemento.querySelector('h3').innerText
    }

    if(targetElemento.classList.contains('tarefa-finalizada')){
        parentElemento.classList.toggle('feito')
    }

    if(targetElemento.classList.contains('tarefa-edita')){
        toggleForms()

        editInput.value = todoTitle
        oldInputValue = todoTitle
    }

    if(targetElemento.classList.contains('tarefa-remove')){
        parentElemento.remove()
    }
})

cancelEditbtn.addEventListener('clcik', (elemento) => {
    elemento.preventDefault()

    toggleForms()
})

editForm.addEventListener('submit', (elemento) => {
    elemento.preventDefault()

    const editInputValue = editInput.value

    if(editInputValue) {

        updateTodo(editInputValue)
    }

    toggleForms()
})