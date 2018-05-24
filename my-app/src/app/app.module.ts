import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { TextColorDirective } from './text-color.directive';
import { ChangeColorDirective } from './change-color.directive';
import { ReversePipe } from './reverse.pipe';
import { TodosFilterPipe } from './todos-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    TextColorDirective,
    ChangeColorDirective,
    ReversePipe,
    TodosFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
