import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // name = 'Angular ' + VERSION.major;
  greeting: string;
  mode: string;

  ngOnInit() {
    this.greeting = 'Have a nice day :)';
    this.mode = 'pomodoro';
  }

  changeModeToPomodoro() {
    this.mode = 'pomodoro';
  }

  changeModeToToDoList() {
    this.mode = 'todolist';
  }

  changeModeToMyPage() {
    this.mode = 'mypage';
  }
}
