import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeResolver } from './components/employee.resolver';
import { EmployeeManagementComponent } from './components/employee-management/employee-management.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: '/admin/employee-list', pathMatch: 'full' },
      { path: 'employee-list', component: EmployeeListComponent, resolve: { employees: EmployeeResolver }},
      { path: 'employee-registration', component: EmployeeManagementComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
