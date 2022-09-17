import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pomodoro',
  templateUrl: './pomodoro.component.html',
  styleUrls: ['./pomodoro.component.css'],
})
export class PomodoroComponent implements OnInit {
  totalHours: number = 0;
  totalMinutes: number = 0;

  minute: string;
  second: string;
  currentTime: string;

  buttonName: string;
  intervalId: number;

  constructor() {}

  ngOnInit() {
    this.minute = '25';
    this.second = '00';
    this.currentTime = `${this.minute} : ${this.second}`;
    this.buttonName = "Let's start!";
  }

  startCounting() {
    this.buttonName = 'Keep going!';
    if (!this.intervalId) {
      this.intervalId = setInterval(() => this.countTime(), 1000);
    }
  }

  countTime() {
    if (parseInt(this.minute) == 0 && parseInt(this.second) == 0) {
      this.reset();
      this.countTotalTime();
      return;
    }

    if (parseInt(this.second) == 0) {
      this.second = '59';
      this.minute =
        parseInt(this.minute) < 11
          ? '0' + (parseInt(this.minute) - 1).toString()
          : (parseInt(this.minute) - 1).toString();
    } else {
      this.second =
        parseInt(this.second) < 11
          ? '0' + (parseInt(this.second) - 1).toString()
          : (parseInt(this.second) - 1).toString();
    }
    this.currentTime = `${this.minute} : ${this.second}`;
  }

  reset() {
    clearInterval(this.intervalId);
    this.intervalId = null;
    this.buttonName = "Let's start!";
    this.minute = '25';
    this.second = '00';
    this.currentTime = `${this.minute} : ${this.second}`;
  }

  countTotalTime() {
    let now = new Date().getHours();
    if (now == 0) {
      this.totalHours = 0;
      this.totalMinutes = 0;
    }
    if (this.totalMinutes + 25 < 60) {
      this.totalMinutes += 25;
    } else {
      this.totalHours += 1;
      this.totalMinutes = this.totalMinutes + 25 - 60;
    }
  }
}
