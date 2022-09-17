import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PomodoroComponent } from './pomodoro/pomodoro.component';
import { TodolistComponent } from './todolist/todolist.component';
import { MypageComponent } from './mypage/mypage.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
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
