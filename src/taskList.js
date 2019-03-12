class TaskList {

  constructor(){
    const ulTag = document.querySelector('ul');

     Task.all != undefined ? Task.all.forEach(function(element) {
      const ulTag = document.querySelector('ul');

      const liTag = document.createElement('li');
      liTag.innerText = element.content

      const buttonTag = document.createElement('button');
      buttonTag.innerText = "X"

      liTag.append(buttonTag);
      ulTag.prepend(liTag);
    }) : 0
  }

  create (content) {
    const ulTag = document.querySelector('ul');
    if(content != ""){
      const newToDo = new Task(content);
      const ulTag = document.querySelector('ul');
      const liTag = document.createElement('li');
      liTag.innerText = newToDo.content
      const buttonTag = document.createElement('button');
      buttonTag.innerText = "X"
      liTag.append(buttonTag);
      ulTag.prepend(liTag);

    } else {
      alert("No empty Todos.");
    }
  }


}
