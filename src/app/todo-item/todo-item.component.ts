import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';


@Component({
  selector: 'app-todo-item',
  template: `
  <div class="todo-item">
    <input type="checkbox" (click) = "completeItem()"/>
    <span class="todo-title" [ngClass]="{'todo-complete': item.completed}">
      {{ item.title }}
    </span>
    <button class="btn" (click)="removeItem()">Remove</button>
  </div>


  `,
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit  {
  @Input() item: TodoItem;
  @Output() remove: EventEmitter<TodoItem> = new EventEmitter();
  @Output() update: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  removeItem() {
    this.remove.emit(this.item);
  }

  // put this method below ngOnInit
    completeItem() {
      this.update.emit({
        item: this.item,
        changes: {completed: !this.item.completed}
      });
    }
}
