import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todos',
  template: `
    <input type="text" (keyup.enter)="todoService.addTodo($event.target.value)">
    <app-todo-list></app-todo-list>
  `
})
export class TodosComponent implements OnInit {
  
  constructor(public todoService: TodoService) {

  }

  ngOnInit() {
  }
}
