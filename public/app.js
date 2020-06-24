// const { domainToUnicode } = require("url");

//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');


//Event listeners
todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click', deleteCheck);

//Functions
function addTodo(event) {
    //Prevent from submitting
    event.preventDefault();
    //Create a toDo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    //Create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo); //sitcking new todo inside div we just created

    //Now we need complete and delete buttons
    //Check button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>'; //adding this 'i-tag' using innerHTML function
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    // delete button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'; //adding this 'i-tag' using innerHTML function
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //APPEND TO LIST
    todoList.appendChild(todoDiv);
    
    //CLEAR INPUT TODO VALUE
    todoInput.value = '';

}
    //CREATE DELETE-CHECK FUNCTION
    function deleteCheck (event) {
        console.log("ran delete check");
        
        const item = event.target;
        //DELETE TODO
        if (item.classList[0] === 'trash-btn') {
            const todo = item.parentElement; //this is how we delete the todo list item of our choice without deleting the input line
            //Animation
            todo.classList.add('fall');
            todo.addEventListener('transitionend', function() {
                todo.remove();
            });
        }

        //CHECK MARK
        if (item.classList[0] === 'complete-btn') {
            const todo = item.parentElement;
            todo.classList.toggle('completed');
        }
        
    }