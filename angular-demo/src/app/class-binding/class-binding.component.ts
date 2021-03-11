import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  template: `
            <h1>Class Binding Example</h1> 
            <h3 class = "text-success">Welcome Mani</h3>
            <h3 [class.text-danger] = "hasError">Welcome Mani</h3>
            <h3 class = "text-special" [class] = "isSuccess">Overrite css property by class propert</h3>
            <h3 [ngClass] = "messageClasses">More than one class binding</h3>
            `,
  styles: [`
                .text-success {
                  color : green;
                }
                .text-danger {
                  color : red;
                }
                .text-special {
                  font-style:italic;
                }
              `]
})
export class ClassBindingComponent implements OnInit {

  public hasError = true;
  public isSpecial = true;
  public isSuccess = true;

  public messageClasses = {
    "text-success" : !this.hasError,
    "text-danger" : this.isSpecial,
    "text-special" : this.isSuccess
  }

  constructor() { }

  ngOnInit(): void {
  }

}
