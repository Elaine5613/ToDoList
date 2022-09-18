import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})
export class TodolistComponent implements OnInit {
  todoList = [];

  constructor() {}

  ngOnInit() {}

  addToDo() {
    let inputText = document.getElementById('todo-input');
    if (inputText) {
      let todo = (inputText as HTMLInputElement).value;
      this.todoList.push(todo);
    }
    (inputText as HTMLInputElement).value = '';
  }

  deleteToDo() {}
}
