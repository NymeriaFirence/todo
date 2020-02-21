import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `
  <p>
    The title is: {{ title }}
  </p>
`,
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {

  title = 'Hello World';

  constructor() {
    this.title = 'I Love Angular'
  }

  ngOnInit() {
   this.changeTitle('My First Angular App');
  }

  changeTitle(newTitle: string) {
    this.title = newTitle;
  }
}
