// seleção de elementos
const todoForm = document.querySelector('#lista-tarefas-forms')
const todoInput = document.querySelector('#form-input')
const todoList = document.querySelector('#lista-tarefas')
const editForm = document.querySelector('#edita-form')
const cancelEditbtn = document.querySelector('#btn-cancelar')

// funções
const saveTodo = (text) => {

    const todo = document.createElement('div')
    todo.classList.add('tarefas')

    const todoTitle = document.createElement('h3')
    todoTitle.innerText = text
    todo.appendChild(todoTitle)
    
    console.log(todo)

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

    if(targetElemento.classList.contains('tarefa-finalizada')){
        parentElemento.classList.toggle('feito')
    }

    if(targetElemento.classList.contains('tarefa-edita')){
        toggleForms()
    }

    if(targetElemento.classList.contains('tarefa-remove')){
        parentElemento.remove()
    }
})