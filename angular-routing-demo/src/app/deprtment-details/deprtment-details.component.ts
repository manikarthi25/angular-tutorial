import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-deprtment-details',
  template: `
              <h3>Department id is - {{departmentId}}  </h3>
              <a (click) = "onPrevious()">Previous</a>
              <a (click) = "onNext()">next</a>
            `,
  styles: [
  ]
})
export class DeprtmentDetailsComponent implements OnInit {

  public departmentId : any;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    //let id = parseInt(this.route.snapshot.paramMap.get('id') || '');
    //this.departmentId = id;
    this.route.paramMap.subscribe((params: ParamMap) => {
       let id = parseInt(params.get('id') || '0');
       this.departmentId = id;
    });
  }

  onPrevious() {
    let previousId = this.departmentId - 1;
    this.router.navigate(["/departments", previousId]);
  }

  onNext() {
    let nextId = this.departmentId + 1;
    this.router.navigate(["/departments", nextId]);
  }

}
