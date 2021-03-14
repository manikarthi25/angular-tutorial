import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
              <h3>{{name}}</h3>
              <button (click) = "sendEventToParent()"> Click Here</button>
            `,
  styleUrls: []
})
export class ChildComponent implements OnInit {

  @Input("parentData") public name;
  @Output() public childEvent = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  sendEventToParent() {
    return this.childEvent.emit("Mohith - From Child Class");
  }

}
