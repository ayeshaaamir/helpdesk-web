import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit, OnDestroy {
  signUpCredentials = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });
  isProcess: boolean = false;
  signUpSubscription: Subscription | undefined;

  constructor(private auth: AuthService, private toast: ToastrService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {}

  ngOnDestroy() {
    if (this.signUpSubscription) {
      this.signUpSubscription.unsubscribe();
    }
  }

  get firstName() {
    return this.signUpCredentials.get('firstName');
  }

  get lastName() {
    return this.signUpCredentials.get('lastName');
  }

  get email() {
    return this.signUpCredentials.get('email');
  }

  get password() {
    return this.signUpCredentials.get('password');
  }

  handleUserSignUp() {
    this.isProcess = true;
    const data = this.signUpCredentials.value;
    data.password = data.password;

    this.auth.userSignUp(data).subscribe(
      (response: string) => {
        this.isProcess = false;
        this.toast.success('', 'User registered successfully', {
          timeOut: 8000,
          positionClass: 'toast-bottom-right',
        });
        this.signUpCredentials.reset();
        this.navigateToLogIn();
      },
      (error: HttpErrorResponse) => {
        this.isProcess = false;
        console.log(error);
        this.toast.error('', `Server Error`, {
          timeOut: 3000,
          positionClass: 'toast-bottom-right',
        });
      }
    );
  }

  navigateToLogIn() {
    this.router.navigate(['/login']);
  }
}
