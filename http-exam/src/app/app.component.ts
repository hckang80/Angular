import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Todo {
  id: number;
  content: string;
  completed: boolean;
}
@Component({
  selector: 'app-root',
  template: `
    <input type="text" (keyup.enter)="addTodo($event.target.value)">
    <ul>
      <li *ngFor="let todo of todos">
        {{ todo.content }}
        <button (click)="putTodo(todo.id)">put</button>
        <button (click)="patchTodo(todo.id)">patch</button>
        <button (click)="deleteTodo(todo.id)">delete</button>
      </li>
    </ul>
    <pre>{{ todos | json }}</pre>
  `
})
export class AppComponent implements OnInit {
  todos: Todo[];
  url = 'http://localhost:3000/todos';

  constructor(public http: HttpClient) {
    // console.log(this.http);
    // console.log(this.http instanceof HttpClient);
  }

  ngOnInit() {
    this.getTodos();
  }

  getTodos() {
    this.http.get<Todo[]>(this.url)
      .subscribe(todos => this.todos = todos);
  }

  addTodo(content: string) {
    const newTodo = { content, completed: false };
    this.http.post(this.url, newTodo)
      .subscribe(() => this.getTodos());
  }

  putTodo(id: number) {
    this.http.put(`${this.url}/${id}`, {content: 'Angular', completed: true})
      .subscribe(() => this.getTodos());
  }

  patchTodo(id: number) {
    this.http.patch(`${this.url}/${id}`, {content: 'Angular'})
      .subscribe(() => this.getTodos());
  }

  deleteTodo(id: number) {
    this.http.delete(`${this.url}/${id}`)
      .subscribe(() => this.getTodos());
  }
}
