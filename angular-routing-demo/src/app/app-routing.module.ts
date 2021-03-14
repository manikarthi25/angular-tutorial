import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
/*
** -> wild card route - Page not found
'' -> Empty
*/
const routes: Routes = [
  { path:'', redirectTo:'/departments', pathMatch:'full'},
  { path: 'employees', component: EmployeeListComponent},
  { path: 'departments', component: DepartmentListComponent},
  { path: "**", component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [EmployeeListComponent, DepartmentListComponent, PageNotFoundComponent]
