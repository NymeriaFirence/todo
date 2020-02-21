import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';


@Component({
  selector: 'app-todo-item',
  template: `
  <div class="todo-item">
    {{ item.title }}
    <button class="btn" (click)="removeItem()">Remove</button>
  </div>


  `,
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit  {
  @Input() item: TodoItem;
  @Output() remove: EventEmitter<TodoItem> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  removeItem() {
    this.remove.emit(this.item);
  }
}
