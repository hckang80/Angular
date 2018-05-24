import { Component } from '@angular/core';
import { Todo } from './todo.interface';
@Component({
  selector: 'app-root',
  template: `
    <!-- <p [textColor]="color">Directive</p> -->

    <p>텍스트의 컬러를 선택하세요</p>
    <label><input (change)="changeColor($event.target.value)" type="radio" name="color" value="red">Red</label>
    <label><input (change)="changeColor($event.target.value)" type="radio" name="color" value="blue">Blue</label>
    <label><input (change)="changeColor($event.target.value)" type="radio" name="color" value="green">Green</label>
    <p [textColor]="color" [style.color]="color">Text Color</p>

    <input type="text" [(ngModel)]="text" (keyup.enter)="addTodo($event.target.value)">
    <p>{{ text | reverse }}</p>

    <button (click)="status='All'">All</button>
    <button (click)="status='Active'">Active</button>
    <button (click)="status='Completed'">Completed</button>
    <ul>
      <li *ngFor="let todo of todos | todosFilter: status">{{ todo.content }}</li>
    </ul>

    <pre>{{ color }} <br><br> {{ todos | json }}</pre>
  `
})
export class AppComponent {
  todos: Todo[];
  text: string;
  color: string;
  status = 'All';

  constructor () {
    this.todos = [
      { id: 1, content: 'HTML', completed: false },
      { id: 2, content: 'CSS', completed: false },
      { id: 3, content: 'JS', completed: true }
    ];
  }

  addTodo(content) {
    this.todos = this.todos.concat([{ id: 4, content, completed: false }]);
    // this.todos.push({ id: 4, content, completed: false });
  }

  changeColor(color) {
    console.log(color);
    this.color = color;
  }
}
