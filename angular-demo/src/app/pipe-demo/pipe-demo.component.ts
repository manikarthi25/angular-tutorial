import { Component, OnInit } from '@angular/core';
/*
  Pipe operator is used to format the data, it wont reflect orignal property value
*/
@Component({
  selector: 'app-pipe-demo',
  template: `
              <h1>Pipe Demo</h1>
              <h3>{{name | lowercase}}</h3>
              <h3>{{name | uppercase}}</h3>

              <h3>{{name | slice : 7}}</h3>
              <h3>{{name | slice : 7 : 11}}</h3>

              <h3>{{name | titlecase}}</h3>

              <h3>{{bioData | json}}</h3>

              <h3>{{5.234888 | number : '1.2-3'}}</h3>
              <h3>{{5.234 | number : '3.4-5'}}</h3>
              <h3>{{5.234 | number : '3.1-2'}}</h3>

              <h3> {{0.25 | percent}}</h3>

              <h3> {{0.25 | currency}}</h3>
              <h3> {{0.25 | currency : 'GBP'}}</h3>
              <h3> {{0.25 | currency : 'GBP' : 'code'}}</h3>
              <h3> {{0.25 | currency : 'EUR' : 'code'}}</h3>

              <h3>{{todayDate}}</h3>
              
              <h3>{{todayDate | date : 'short' }}</h3>
              <h3>{{todayDate | date : 'medium' }}</h3>
              <h3>{{todayDate | date : 'long' }}</h3>

              <h3>{{todayDate | date : 'shortDate' }}</h3>
              <h3>{{todayDate | date : 'mediumDate' }}</h3>
              <h3>{{todayDate | date : 'longDate' }}</h3>

              <h3>{{todayDate | date : 'shortTime' }}</h3>
              <h3>{{todayDate | date : 'mediumTime' }}</h3>
              <h3>{{todayDate | date : 'longTime' }}</h3>
            `,
  styleUrls: []
})
export class PipeDemoComponent implements OnInit {

  public name = "welComE manI";
  public todayDate = new Date();

  public bioData = [
    {"name":"mani", "age":35},
    {"name":"Mohith", "age":25},
    {"name":"Raj", "age":15}
  ]
  

  constructor() { }

  ngOnInit(): void {
  }

}
