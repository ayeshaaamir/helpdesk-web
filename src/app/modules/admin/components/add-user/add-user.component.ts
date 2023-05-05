import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  userInformation = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    mobile: new FormControl('', [Validators.required]),
    designation: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
  });

  constructor(private toast: ToastrService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {}

  get email() {
    return this.userInformation.get('email');
  }

  get password() {
    return this.userInformation.get('password');
  }

  get firstname() {
    return this.userInformation.get('firstname');
  }

  get lastname() {
    return this.userInformation.get('lastname');
  }

  get mobile() {
    return this.userInformation.get('mobile');
  }

  get designation() {
    return this.userInformation.get('designation');
  }

  get address() {
    return this.userInformation.get('address');
  }

  resetForm() {
    this.userInformation.reset();
  }

  handleNewUser() {
  }
}
