import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <p>
      department-list works!
    </p>
    <ul class="items">
          <li (click) = "onSelect(department)" [class.selected]="isSelected(department)" *ngFor = "let department of departments"> 
              <span class="badge">{{department.id}}</span> {{department.name}}
          </li>
    </ul>
  `,
  styles: [
  ]
})
export class DepartmentListComponent implements OnInit {

  public selectedId: any;  

  public departments = [
    { "id": 1, name:'CSE' },
    { "id": 2, name:'EEE' },
    { "id": 3, name:'ECE' },
    { "id": 4, name:'MECH' },
    { "id": 5, name:'CIVIL' }
  ]

  constructor(private router : Router, private route : ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id') || '0');
      this.selectedId = id;
   });
  }

  onSelect(department : any) {
      //this.router.navigate(["/departments", department.id]);
      this.router.navigate([department.id], {relativeTo : this.route});
  }

  isSelected(department : any) {
    return department.id === this.selectedId;
  }

}
