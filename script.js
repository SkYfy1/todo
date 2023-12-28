const inputBox = document.getElementById('input');
const listContainer = document.getElementById('listcontainer');
const button = document.querySelector('button');

function addTask(){
    if (inputBox.value === '') {
        alert('You must write something!');
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
    }
};

function toggler(event) {
    let target = event.target;
    if (target.tagName != 'LI') return;

    target.classList.toggle('checked');
}


button.addEventListener('click', addTask);

listContainer.addEventListener('click', toggler);