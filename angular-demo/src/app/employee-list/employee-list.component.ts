import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee-service.service';

@Component({
  selector: 'app-employee-list',
  template: `
              <h2>Employee List</h2>
              <ul *ngFor = "let employee of employeeList">
                  <li>{{employee.empId}}.{{employee.name}} - {{employee.age}}</li>
              </ul>
            `,
  styleUrls: []
})
export class EmployeeListComponent implements OnInit {

  public employeeList: any = [];
  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeList = this._employeeService.getEmployees();
  }

}
