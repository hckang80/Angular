import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import {
  HomeComponent,
  ServiceComponent,
  AboutComponent,
  NotFoundComponent } from './pages';

// 위의 방식으로 대체 가능하다
// import { HomeComponent } from './pages/home.component';
// import { ServiceComponent } from './pages/service.component';
// import { AboutComponent } from './pages/about.component';
// import { NotFoundComponent } from './pages/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServiceComponent,
    AboutComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes) // 라우트 등록
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
