import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService {

  constructor() { }

  getEmployees() {
    return [
      {"empId":1, "name":"mani", "age":35},
      {"empId":2, "name":"Mohith", "age":25},
      {"empId":3, "name":"Raj", "age":15}
    ];
  }
}
