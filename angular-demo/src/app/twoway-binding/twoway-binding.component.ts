import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twoway-binding',
  template:  `
              <input [(ngModel)] = "name" type="text">
              <button (click) = "onClick()">Click</button>
              {{name}}
             `,
  styleUrls: []
})
export class TwowayBindingComponent implements OnInit {

  public name = "";
  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    console.log();
  }

}
