import { Component, OnInit } from '@angular/core';

/*
return true or false
   <div *ngFor = "let color of colors; odd as o">
   <div *ngFor = "let color of colors; even as e">
   <div *ngFor = "let color of colors; first as e">
   <div *ngFor = "let color of colors; last as e">
*/
@Component({
  selector: 'app-structural-directives',
  template: `
              <h1>Structural Directives</h1>
              <h2>ngIf</h2>
              <div *ngIf = "isShow; then thenBlock; else elseBlock"></div>  
              <ng-template #thenBlock>
                    If Block - Welcome Mani
              </ng-template>
              <ng-template #elseBlock>
                    Else Blcok - Hidden Name
              </ng-template>

              <h2>ngSwitch</h2>
              <div [ngSwitch] = "color1">
                <div *ngSwitchCase = "'red'">Pick red color</div>
                <div *ngSwitchCase = "'blue'">Pick blue color</div>
                <div *ngSwitchCase = "'green'">Pick green color</div>
                <div *ngSwitchDefault>Pick again!</div>
              </div>

              <input [(ngModel)] = "color1" type = "text">

              <h2>ngFor</h2>
              <div *ngFor = "let color of colors; index as i">
                   <div>{{"index is : "+i}} {{" Color is : " +color}}</div>
              </div>
              <br/><br/>
            `,
  styleUrls: []
})
export class StructuralDirectivesComponent implements OnInit {

  isShow = true;
  color1 = "red";
  colors = ["red", "green", "blue"];

  constructor() { }

  ngOnInit(): void {
  }

}
