//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

//Event listeners
todoButton.addEventListener('click', addTodo); // We are adding an event to the todo-button that we created in our html code. this event is creating a div that we later append into the  todo-container
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);

//Functions
function addTodo(event) {
    // This entire addOne function is going to be appplied only to todoButton
    // Prevent from submitting
    event.preventDefault();
    //Create a toDo div
    const todoDiv = document.createElement('div'); //creating the div
    todoDiv.classList.add('one-todo-item'); //giving todoDiv a class label that we can reference in CSS when styling

    //Create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value; // Making sure that whatever is submitting into the form input is displayed in that specific todo list item

    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo); //sticking new todo inside div we just created. we will be appending todoDiv to the todo-list class unordered list at the end of this function

    // Now we need complete and delete buttons
    // Check button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>'; //adding this 'i-tag' using innerHTML function
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);
    // Delete button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'; //adding this 'i-tag' using innerHTML function
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

    //APPEND TO LIST
    todoList.appendChild(todoDiv);

    //CLEAR INPUT TODO VALUE
    todoInput.value = '';
}
//CREATE DELETE-CHECK FUNCTION
function deleteCheck(event) {
    const item = event.target;
    console.log(item.parentElement);

    //DELETE TODO
    if (item.classList[0] === 'trash-btn') {
        const todo = item.parentElement; //this is how we delete the todo list item of our choice without deleting the input line

        //Animation
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function () {
            todo.remove(); //this means the item will be deleted only after the transition has been completed
        });
    }

    //CHECK MARK
    if (item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}

// Now we need to address the filter from <select></select>
function filterTodo(event) {
    const todos = todoList.childNodes;
    todos.forEach(function (todo) {
        switch (
            event.target.value //the value can be 'complete', 'incomplete', or 'all'
        ) {
            case 'all':
                todo.style.display = 'flex';
                break;
            case 'completed':
                todo.style.display = 'flex';
                if (todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;
            case 'incomplete':
                if (!todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;
        }
    });
}
