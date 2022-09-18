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
    let todo = (inputText as HTMLInputElement).value;
    if (todo !== '') {
      this.todoList.push(todo);
    }
    (inputText as HTMLInputElement).value = '';
  }

  deleteToDo(todo) {
    let labelText = document.getElementById(todo);
    if (labelText) {
      let item = (labelText as HTMLLabelElement).textContent;
      this.todoList = this.todoList.filter((todo) => todo != item);
    }
  }
}
