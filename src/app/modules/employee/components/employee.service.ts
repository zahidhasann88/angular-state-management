import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  seedEmployees(): void {
    if (this.doesEmployeeExist() == false) {
      const employees = [
        {
          "firstName": "Alex",
          "lastName": "Robin",
          "dob": "1990-06-11",
          "phone": "01564789254",
          "gender": "Male",
          "skillName": "Football",
          "experience": 10,
          "skillLevel": "Advanced"
        },
        {
          "firstName": "Bob",
          "lastName": "Marley",
          "dob": "1900-06-11",
          "phone": "01564785854",
          "gender": "Male",
          "skillName": "Singer",
          "experience": 30,
          "skillLevel": "Beginner"
        },
        {
          "firstName": "Cassie",
          "lastName": "Cage",
          "dob": "2000-06-11",
          "phone": "01364789254",
          "gender": "Female",
          "skillName": "Officer",
          "experience": 20,
          "skillLevel": "Intermediate"
        }
      ];
      localStorage.setItem('employees', JSON.stringify(employees));
    }
  }

  doesEmployeeExist(): boolean {
    const e: string = localStorage.getItem('employees') ?? '';
    if (e) {
      const employees: any[] = JSON.parse(e) ?? [];
      if (employees.length > 0) {
        return true;
      } else {
        return false;
      }
    }
    return false;
  }

  getEmployees(): any[] {
    if (this.doesEmployeeExist() == true) {
      const e: string = localStorage.getItem('employees') ?? '';
      const employees: any[] = JSON.parse(e) ?? [];
      return employees;
    }
    this.seedEmployees();
    const e: string = localStorage.getItem('employees') ?? '';
    const employees: any[] = JSON.parse(e) ?? [];
    return employees;
  }

  createEmployee(employee: any): void {
    const employees: any[] = this.getEmployees();
    employees.push(employee);
    localStorage.setItem('employees', JSON.stringify(employees));
  }
}
