import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo-detail',
  template: `
    <h3>todo detail</h3>
    <p>todo id : {{ todoId }}</p>
    <a routerLink="/">Back to Todos</a>
  `,
  styles: []
})
export class TodoDetailComponent implements OnInit {
  todoId: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(params => this.todoId = +params.get('id'));
  }

}
