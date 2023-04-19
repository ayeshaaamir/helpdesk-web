import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signUpCredentials = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });
  isProcess: boolean = false;

  constructor(private auth: AuthService, private toast: ToastrService) {}

  ngOnInit() {}

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

  userSignUp() {
    this.isProcess = true;
    const data = this.signUpCredentials.value;
    this.auth.userSignUp(data).subscribe(
      (res) => {
        if (res.success) {
          this.isProcess = false;
          this.toast.success('', 'User registered successfully', {
            timeOut: 3000,
          });
        } else {
          this.isProcess = false;
          this.toast.error('', `${res.message}`, {
            timeOut: 3000,
          });
        }
        this.signUpCredentials.reset();
      },
      (err) => {
        this.isProcess = false;
        this.toast.error('', 'Server Error', {
          timeOut: 3000,
        });
      }
    );
  }
}
