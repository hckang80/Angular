import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { HomeModule } from './home/home.module';


import { AppComponent } from './app.component';
// import { HeaderComponent } from './header/header.component';
// import { HomeComponent } from './home/home.component';
import { UserService } from './user.service';


@NgModule({
  declarations: [
    AppComponent,
    // HeaderComponent,
    // HomeComponent
  ],
  imports: [
    BrowserModule,
    HomeModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
