import { Component, OnInit } from '@angular/core';

/*
Interpolation operator can not use in boolean, only use in string
*/
@Component({
  selector: 'app-property-binding',
  template: `
              <h1>App Property Binding Demo</h1>
              <input type = "text" value = 'Mani'/>
              <input type = "text" value = 'Mani' id = "{{setId}}"/>
              <input type = "text" value = 'Mani' [id] = "setId"/>
              <input type = "text" value = 'karthi' [id] = "setId" disabled/>
              <input type = "text" value = 'Kannan' [id] = "setId" bind-disabled = "isDisabled" />
              <input type = "text" value = 'Kannan' [id] = "setId" [disabled] = "isDisabled" />
              <input type = "text" value = 'Mohith' [id] = "setId" [disabled] = false />
            `,
  styleUrls: []
})
export class PropertyBindingComponent implements OnInit {

  public setId="testId";
  public isDisabled = true;

  constructor() { }

  ngOnInit(): void {
  }

}
