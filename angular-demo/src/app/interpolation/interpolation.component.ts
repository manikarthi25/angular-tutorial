import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  template: `
              <h3>interpolation demo</h3>
              <h3>Welcome {{name}}</h3>
              <h3>Summation {{2 + 2}}
              <h3>{{'welcome' + name}}</h3>
              <h3>{{callFunction()}}</h3>
              <h3>{{siteURL}}</h3>
              <h3>{{name.length}}</h3>
              <h3>{{name.toUpperCase()}}</h3>
            `,
  styleUrls: []
})
export class InterpolationComponent implements OnInit {

  public name = 'Mani';
  public siteURL = window.location.href;

  constructor() { }

  ngOnInit(): void {
  }

  callFunction() {
    return "Function Call within Interpolation";
  }

}
