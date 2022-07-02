const addToButton = document.querySelector('#new-task-submit');
const toDoContainer = document.querySelector('#tasks');
const inputField = document.querySelector('#new-task-input');
const alerting = document.querySelector('.alerting');

addToButton.addEventListener('click', () => {
    let paragraph = document.createElement('p');
    paragraph.innerText = inputField.value;
    if (inputField.value == "")
    {
       alerting.innerHTML=" 👎 Add Some Tasks to Your To-Do List 👎 ";
    }
    else {
        paragraph.prepend(" ♻️ ");
        toDoContainer.appendChild(paragraph);
        inputField.value = "";
        alerting.innerHTML="";
    }

    paragraph.addEventListener('click', () => {
        paragraph.prepend("   💯");
        paragraph.style.color = "#00FF00";
        /*paragraph.style.textDecoration = "line-through";*/
    })

    paragraph.addEventListener('dblclick', () => {
        toDoContainer.removeChild(paragraph);
        toDoContainer.removeChild(toDoContainer);
    })

})
