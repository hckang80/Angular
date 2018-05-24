import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <ul>
      <li><a routerLink="/home" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">home</a></li>
      <li><a routerLink="/service" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">service</a></li>
      <li><a routerLink="/about" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">about</a></li>
    </ul>
    <router-outlet></router-outlet>
  `,
  styles: [`
    a.active {
      font-weight: bold;
      color: #f00;
    }
  `]
})
export class AppComponent {
  title = 'app';
}
