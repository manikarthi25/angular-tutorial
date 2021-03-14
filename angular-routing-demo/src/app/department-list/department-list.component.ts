import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <p>
      department-list works!
    </p>
    <ul class="items">
          <li (click) = "onSelect(department)" *ngFor = "let department of departments"> 
              <span class="badge">{{department.id}}</span> {{department.name}}
          </li>
    </ul>
  `,
  styles: [
  ]
})
export class DepartmentListComponent implements OnInit {

  public departments = [
    { "id": 1, name:'CSE' },
    { "id": 2, name:'EEE' },
    { "id": 3, name:'ECE' },
    { "id": 4, name:'MECH' },
    { "id": 5, name:'CIVIL' }
  ]

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  onSelect(department : any) {
      this.router.navigate(["/department", department.id]);
  }

}
