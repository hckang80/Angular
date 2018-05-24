import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TodosComponent } from './todos.component';
import { TodoListComponent } from './todo-list.component';
import { TodoService } from './todo.service';
import { EnhancedService } from './enhanced-service.service';


@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    // TodoService
    {
      provide: TodoService,
      useClass: EnhancedService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
