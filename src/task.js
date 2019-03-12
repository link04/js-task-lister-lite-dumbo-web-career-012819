class Task {

  constructor(content){
    this.content = content;

    if (Task.all === undefined ){
      Task.all = [];
      Task.all.push(this);
    }else{
      Task.all.push(this);
    }

  }

  get toDo() {
    return this.content;
  }

}
