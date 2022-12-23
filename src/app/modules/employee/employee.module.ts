import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EmployeeRoutingModule } from './employee-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LayoutComponent } from './components/layout/layout.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeManagementComponent } from './components/employee-management/employee-management.component';


@NgModule({
  declarations: [
    DashboardComponent,
    LayoutComponent,
    EmployeeListComponent,
    EmployeeManagementComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EmployeeModule { }
