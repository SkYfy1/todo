const inputBox = document.getElementById('input');
const listContainer = document.getElementById('listcontainer');
const button = document.querySelector('button');

const existingTodos = JSON.parse(localStorage.getItem('todos'));

let todoData = [];

todoData = existingTodos || [];

todoData.forEach(element => {
        let li = document.createElement('li');
        li.innerHTML = element;
        listContainer.appendChild(li);

        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
});



function addTask(){
    if (inputBox.value === '') {
        alert('You must write something!');
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        todoData.push(inputBox.value);
        listContainer.appendChild(li);

        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    localStorage.setItem('todos', JSON.stringify(todoData));

    inputBox.value = '';
};

function toggler(event) {
    let target = event.target;
    if (target.tagName != 'LI') return;

    target.classList.toggle('checked');
}

function deleter(event) {
    let trg = event.target;

    if(trg.tagName === 'SPAN') {
        trg.parentElement.remove();
    }
}


button.addEventListener('click', addTask);

listContainer.addEventListener('click', toggler);

listContainer.addEventListener('click', deleter, false);