import { Component } from '@angular/core';

interface Todo {
  id: number,
  content: string,
  completed: boolean
}

@Component({
  selector: 'app-root',
  template: `
    <input type="text" placeholder="Enter Todo!" (keyup.enter)="addTodo($event.target.value);" [(ngModel)]="content">
    <ul>
      <li *ngFor="let todo of todos">
        <input type="checkbox" [checked]="todo.completed" (change)="toggleCompleted(todo.id)"> {{ todo.content }}
        <button (click)="removeTodo(todo.id)">Delete</button>
      </li>
    </ul>
    <label><input type="checkbox" (change)="changeCompletedTodoAll($event.target.checked)"> All Toggle</label>
    <pre>{{ todos | json }}</pre>
  `,
  styles: []
})
export class AppComponent {
  content: string;
  todos: Todo[] = [
    { id: 1, content: 'HTML', completed: true },
    { id: 2, content: 'CSS', completed: true },
    { id: 3, content: 'JS', completed: false }
  ];
  
  addTodo(content: string) {
    this.todos = [{ id: this.getMaxNumber(), content, completed: false }].concat(this.todos);
    this.content = '';
  }

  removeTodo(id) {
    this.todos = this.todos.filter(todo => {
      return todo.id !== id
    });
  }

  toggleCompleted(id) {
    this.todos = this.todos.map(todo => todo.id === id ? Object.assign({}, todo, { completed: !todo.completed }) : todo)
  }

  changeCompletedTodoAll(state) {
    this.todos = this.todos.map(todo => Object.assign({}, todo, { completed: state }))
  }

  getMaxNumber(): number {
    return this.todos.length ? Math.max(...this.todos.map(({ id }) => id)) + 1 : 1
  }
}
