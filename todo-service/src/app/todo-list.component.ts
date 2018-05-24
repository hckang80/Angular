import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo-list',
  template: `
    <ul>
      <li *ngFor="let todo of todoService.todos">{{ todo.content }}</li>
    </ul>
  `
})
export class TodoListComponent implements OnInit {

  constructor(public todoService: TodoService) {

  }

  ngOnInit() {
  }

}
