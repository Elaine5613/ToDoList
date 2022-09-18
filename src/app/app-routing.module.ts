import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PomodoroComponent } from './pomodoro/pomodoro.component';
import { TodolistComponent } from './todolist/todolist.component';
import { MypageComponent } from './mypage/mypage.component';

const routes: Routes = [
  { path: 'pomodoro', component: PomodoroComponent },
  { path: 'todolist', component: TodolistComponent },
  { path: 'mypage', component: MypageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
