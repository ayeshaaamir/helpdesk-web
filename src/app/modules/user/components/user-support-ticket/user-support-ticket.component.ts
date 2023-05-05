import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-support-ticket',
  templateUrl: './user-support-ticket.component.html',
  styleUrls: ['./user-support-ticket.component.css']
})
export class UserSupportTicketComponent implements OnInit{
  ticketFields = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    ticketTitle: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  });
  ticketData = {};

  constructor(private toast: ToastrService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {}

  get firstname() {
    return this.ticketFields.get('firstname');
  }

  get lastname() {
    return this.ticketFields.get('lastname');
  }

  get ticketTitle() {
    return this.ticketFields.get('ticketTitle');
  }

  get category() {
    return this.ticketFields.get('category');
  }

  get email() {
    return this.ticketFields.get('email');
  }

  get description() {
    return this.ticketFields.get('description');
  }

  resetForm() {
    this.ticketFields.reset();
  }

  handleNewTicket() {
    if(this.ticketFields.valid) {
      this.ticketData = this.ticketFields.value;
      console.log(this.ticketData);
      this.toast.success('Ticket raised successfully!', 'Success', {
        timeOut: 8000,
        positionClass: 'toast-bottom-right',
      });
      this.ticketFields.reset();
    } else {
      this.toast.error('Please fill in all the required fields.', 'Error', {
        timeOut: 3000,
        positionClass: 'toast-bottom-right',
      });
    }
  }
}
