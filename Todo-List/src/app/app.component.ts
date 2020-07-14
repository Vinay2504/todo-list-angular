import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo list module';

  newTodo: string;
  todos: any;
  todoObj: any;


  selectedAll: any;
  selectedNames: any;

  constructor() {
    this.newTodo = '';
    this.todos = [];
  }

  addTodo(event) {
    this.todoObj = {
      newTodo: this.newTodo,
      completed: false
    }
    if(this.newTodo.length <= 28)            //vvr
    {                                        //vvr
    this.todos.push(this.todoObj);
    }                                       //vvr
    this.newTodo = '';
    event.preventDefault();
    console.log(this.todos)
  }

  deleteTodo(index) {
    this.todos.splice(index, 1);
  }

  deleteSelectedTodos() {
    //need ES5 to reverse loop in order to splice by index
    for(var i=(this.todos.length -1); i > -1; i--) {
      if(this.todos[i].completed) {
        this.todos.splice(i, 1);
      }
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.todos, event.previousIndex, event.currentIndex);
  }

  selectAll() {
    this.selectedAll = !this.selectedAll;

    for (var i = 0; i < this.todos.length; i++) {
        this.todos[i].selected = this.selectedAll;
    } 
  }
  checkIfAllSelected() {
    var totalSelected =  0;
    for (var i = 0; i < this.todos.length; i++) {
          if(this.todos[i].selected) totalSelected++;
      } 
    this.selectedAll = totalSelected === this.todos.length;

    return true;
  }
}

