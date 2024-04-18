const tasksListElement = document.querySelector(`.tasks_list`);
const taskElements = tasksListElement.querySelectorAll(`.tasks_item`);

tasksListElement.addEventListener(`dragstart`, (e) => {
    e.target.classList.add(`selected`);
})
  
tasksListElement.addEventListener(`dragend`, (e) => {
    e.target.classList.remove(`selected`);
});

tasksListElement.addEventListener(`dragover`, (e) => {
    e.preventDefault();
  
    const activeElement = tasksListElement.querySelector(`.selected`);
    const currentElement = e.target;
    const nextElement = getNextElement(e.clientY, currentElement);
    
    if (
        nextElement && activeElement === nextElement.previousElementSibling || activeElement === nextElement
      ) {
        return;
      }

    tasksListElement.insertBefore(activeElement, nextElement);
});

const getNextElement = (cursorPosition, currentElement) => {
    const currentElementCoord = currentElement.getBoundingClientRect();
    const currentElementCenter = currentElementCoord.y + currentElementCoord.height / 2;
    const nextElement = (cursorPosition < currentElementCenter) ? currentElement : currentElement.nextElementSibling;
    return nextElement;
};