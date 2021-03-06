import { Component, OnInit, Input } from '@angular/core';
import { Todo } from "../shared/todo";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;

  constructor() { }

  toggle() {
    this.todo.status = !this.todo.status;
  };

  ngOnInit() {
  }

}
