import { Component, OnInit } from '@angular/core';

/* Selector three type
@Component({
  selector: 'app-test', // Custom Tag <app-test></app-test>
  selector: '.app-test', // Class <h3 class='app-test'></h3>
  selector: '[app-test]', // Attribute <h3 app-test>
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
*/

/* Inline Template
template: `<div> 
                <h3>
                      HTML Inline
                </h3>
            </div> `,
*/

/* Inline Style
template: `<div> 
                <h3>
                      HTML Inline
                </h3>
            </div> `,
*/

/* Inline CSS
styles: [`
            div {
              color: red;
            }
          `]
*/

@Component({
  selector: '[app-test]',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
