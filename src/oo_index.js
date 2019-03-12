
document.addEventListener("DOMContentLoaded", () => {
    new Task("DO it ");
  const taskList = new TaskList();

  document.querySelector('form').addEventListener("submit", (event) => {
    event.preventDefault();
    taskList.create(event.target["new-task-description"].value);
    event.target["new-task-description"].value = "";
  });

  document.querySelector('ul').addEventListener("click", (event) => {
    if (event.target.tagName === 'BUTTON'){
      event.target.parentElement.remove()
    }
  });

});
