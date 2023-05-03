import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LogInCredentials = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });
  isProcess: boolean = false;
  LogInSubscription: Subscription | undefined;

  constructor(private auth: AuthService, private toast: ToastrService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    if(this.auth.isAuthenticated()) {
      this.router.navigate(['user']);
    }
  }

  ngOnDestroy() {
    this.LogInSubscription?.unsubscribe();
  }

  get email() {
    return this.LogInCredentials.get('email');
  }

  get password() {
    return this.LogInCredentials.get('password');
  }

  handleUserLogIn() {
    this.isProcess = true;
    const data = this.LogInCredentials.value;
    data.password = data.password;
    this.auth.userLogIn(data).subscribe(
      (response: any) => {
        this.isProcess = false;
        this.auth.setToken(response.sessionToken);
        this.navigateToDashboard();
      },
      (error: HttpErrorResponse) => {
        this.isProcess = false;
        console.log(error);
        this.toast.error('', `Incorrect email or password`, {
          timeOut: 3000,
          positionClass: 'toast-bottom-right',
        });
      }
    );
  }

  navigateToDashboard() {
    this.router.navigate(['user']);
  }
}
