import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee-service.service';

@Component({
  selector: 'app-employee',
  template: `
              <h1>Service Demo</h1>
              <h2>Employee Names</h2>
              <ul *ngFor = "let employee of employeeList">
                <li>{{employee.name}}</li>
              </ul>
              `,
  styleUrls: []
})
export class EmployeeComponent implements OnInit {

  public employeeList: any = [];
  
  /*constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeList = this._employeeService.getEmployees();
  }*/

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this._employeeService.getEmployees().subscribe(data => this.employeeList = data);
  }

}
