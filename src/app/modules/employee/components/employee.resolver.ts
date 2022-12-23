import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { EmployeeService } from './employee.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeResolver implements Resolve<any> {
  constructor(private employeeService: EmployeeService) { }
  resolve(): Observable<any[]> {
    return of(this.employeeService.getEmployees());
  }
}
