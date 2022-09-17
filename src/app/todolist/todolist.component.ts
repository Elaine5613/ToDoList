import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})
export class TodolistComponent implements OnInit {
  todoList = [];
  todoItem: string;

  constructor() {}

  ngOnInit() {}

  getInput(event) {
    this.todoItem = event.data;
  }

  addToDo() {
    this.todoList.push(this.todoItem);
  }
}
