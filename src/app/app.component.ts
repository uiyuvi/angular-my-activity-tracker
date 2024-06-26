import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Define your variables done,todos,newToDo,newToDoObj,error
  //Define your constructor here with todos as [] ,newToDo as '' and error as false
  //Define your addMore function here
  //Define your clearAll function here
  todos = [];
  error = false;
  newToDo = '';

  constructor(){
    this.todos = [];
    this.error = false;
    this.newToDo = '';
  }

  addMore(){
    this.todos.push({
      desc: this.newToDo,
      done: false
    })

  }

  clearAll(){
    this.newToDo = '';
    this.todos=[];
  }

}

