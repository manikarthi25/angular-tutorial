import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-deprtment-details',
  template: `
              <h3>Department id is - {{departmentId}}</h3>
            `,
  styles: [
  ]
})
export class DeprtmentDetailsComponent implements OnInit {

  public departmentId : any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id') || '');
    this.departmentId = id;
  }

}
