import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

const routes: Routes = [
  { path: 'employees', component:EmployeeListComponent},
  { path: 'departments', component:DepartmentListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [EmployeeListComponent, DepartmentListComponent]
