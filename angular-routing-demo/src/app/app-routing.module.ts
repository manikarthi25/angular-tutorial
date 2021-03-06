import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DeprtmentContactComponent } from './deprtment-contact/deprtment-contact.component';
import { DeprtmentDetailsComponent } from './deprtment-details/deprtment-details.component';
import { DeprtmentOverviewComponent } from './deprtment-overview/deprtment-overview.component';
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
  { path: 'departments/:id', 
    component: DeprtmentDetailsComponent,
    children: [{path:'overview', component: DeprtmentOverviewComponent},
               {path:'contact', component: DeprtmentContactComponent}] 
  },
  { path: "**", component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
                                   EmployeeListComponent, 
                                   DepartmentListComponent, 
                                   PageNotFoundComponent, 
                                   DeprtmentDetailsComponent,
                                   DeprtmentOverviewComponent,
                                   DeprtmentContactComponent]
