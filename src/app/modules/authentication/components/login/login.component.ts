import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private router: Router) {

  }

  public form: FormGroup = this.fb.group({
    username: ['admin', [Validators.required, Validators.maxLength(10)]],
    password: ['admin', [Validators.required, Validators.maxLength(10)]],
  });

  ngOnInit(): void {
    this.logOut();
  }

  public submit(): void {
    let data = this.form.value;
    if (this.form.valid) {
      if (data.username == 'admin' && data.password == 'admin') {
        localStorage.setItem('token', 'admin-token');
        //Swal.fire('Success', 'Login success', 'success');
        this.delay(1000);
        this.router.navigateByUrl('/employee/employee-list');
      } else {
        //Swal.fire('Error', 'Invalid username or password', 'error');
      }
    } else {
      //Swal.fire('Error', 'Invalid form', 'error');
    }
  }

  private delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  private logOut() {
    if (localStorage.getItem('token')) {
      localStorage.removeItem('token');
    }
    this.router.navigateByUrl('auth/login');
  }

}
