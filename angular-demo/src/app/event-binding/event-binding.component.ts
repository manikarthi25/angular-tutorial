import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `
                <h1>Event Binding</h1>
                <button (click) = "onClick()">Click</button>
                <button (click) = "getEvent()">Print Mani</button>
                {{greetting}}
                <button (click) = "greetting='Welcome Mohith'">Print Mohith</button>
                {{greetting}}

               `,
  styleUrls: []
})
export class EventBindingComponent implements OnInit {

  public greetting = "";
  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    console.log("Event Binding")
  }

  getEvent() {
    this.greetting = "Welcome Mani";
  }

}
