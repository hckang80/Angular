import { Injectable } from '@angular/core';
import { Todo } from './todo.interface';

@Injectable()
export class TodoService {
  todos: Todo[];

  constructor() {
    this.todos = [
      { id: 1, content: 'HTML', completed: false },
      { id: 2, content: 'CSS', completed: false },
      { id: 3, content: 'Javascript', completed: false }
    ]
  }

  addTodo(content) {
    const newTodo: Todo = { id: 100, content, completed: false };
    this.todos.unshift(newTodo);
    console.log('service');
  }
}
