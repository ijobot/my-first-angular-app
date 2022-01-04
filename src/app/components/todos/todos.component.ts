import { Component, OnInit } from '@angular/core';
import { Todo } from './../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  inputTodo: string = '';

  constructor() {}

  ngOnInit(): void {
    this.todos = [
      {
        content: 'Practice coding with Angular',
        completed: false,
      },
      {
        content: 'Learn about Genesys for internship',
        completed: false,
      },
      {
        content: 'Feed Sweet Dee',
        completed: false,
      },
    ];
  }

  toggleDone(id: number): void {
    this.todos.map((value, index) => {
      if (index == id) value.completed = !value.completed;

      return value;
    });
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter((value, index) => index != id);
  }

  addTodo(): void {
    this.todos.push({
      content: this.inputTodo,
      completed: false,
    });

    this.inputTodo = '';
  }
}
