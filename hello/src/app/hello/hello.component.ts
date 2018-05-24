import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: `
    <h1>Hello, my name is {{name}}</h1>
    <input type="text" placeholder="Input your name" #inputValue>
    <button (click)="sayHello(inputValue.value)">Confirm</button>
  `,
  styles: [`
    :host { 
      display: table;
      margin: 0 auto;
      padding: 0 20px 20px;
      border: 1px solid #222;
    }
  `]
})
export class HelloComponent {
  name: string;

  sayHello(name: string) {
    this.name = name;
  }
}
