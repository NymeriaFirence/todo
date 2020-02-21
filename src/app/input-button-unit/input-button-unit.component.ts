import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `
     <p>
    input-button-unit works!
    The title is: {{ title }}
  </p>

  <input [value]="generateTitle()">
  <button>Save</button>
  `,
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {
  title = 'Hello World';

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.title = 'This is not the title you are looking for';
    }, 3000);
  }

  generateTitle(): string {
    return 'This title was generated by a method.';
  }
}
