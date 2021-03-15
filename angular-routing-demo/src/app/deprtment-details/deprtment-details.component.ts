import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-deprtment-details',
  template: `
              <h3>Department id is - {{departmentId}}  </h3>

              <div class="items">
                <p>
                   <button (click) = "onPrevious()">Previous</button>
                   <button (click) = "onNext()">Next</button>
                   <button (click) = "goToDeprtments()">Back</button>
                </p>

                <p>
                   <button (click) = "onOverview()">Overview</button>
                   <button (click) = "onContact()">Contact</button>
                </p>
                <router-outlet></router-outlet>
              </div>

              <div>
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
    //this.router.navigate([previousId], {relativeTo: this.route});
  }

  onNext() {
    let nextId = this.departmentId + 1;
    this.router.navigate(["/departments", nextId]);
    //this.router.navigate([nextId], {relativeTo: this.route});
  }

  goToDeprtments() {
    let selectedId = this.departmentId ? this.departmentId : null;
    //this.router.navigate(["/departments", {id:selectedId}]);
    this.router.navigate(['../', {id:selectedId}], {relativeTo: this.route});
  }

  onOverview() {
     this.router.navigate(['overview'], {relativeTo:this.route});
  }

  onContact() {
    this.router.navigate(['contact'], {relativeTo:this.route});
  }

}
