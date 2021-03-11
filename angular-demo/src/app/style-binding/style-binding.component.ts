import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  template: `
                <h1>Style Binding Demo</h1>
                <h3 [style.color] ="hasColor ? 'green' : 'red'">Conditional Style Binding</h3>
                <h3 [style.color] = "orangeColor">Style Binding from class</h3>
                <h3 [ngStyle] = "mutipleStyles">Multiple style class</h3>
               `,
  styleUrls: []
})
export class StyleBindingComponent implements OnInit {

  public hasColor = true;
  public orangeColor = "orange";
  public mutipleStyles = {
    color : "blue",
    fontStyle : "italic"
  };

  constructor() { }

  ngOnInit(): void {
  }

}
