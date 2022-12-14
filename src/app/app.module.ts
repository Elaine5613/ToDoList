import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PomodoroComponent } from './pomodoro/pomodoro.component';
import { TodolistComponent } from './todolist/todolist.component';
import { MypageComponent } from './mypage/mypage.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    HelloComponent,
    PomodoroComponent,
    TodolistComponent,
    MypageComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
