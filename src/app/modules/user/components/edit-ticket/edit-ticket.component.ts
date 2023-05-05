import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-ticket',
  templateUrl: './edit-ticket.component.html',
  styleUrls: ['./edit-ticket.component.css'],
})
export class EditTicketComponent implements OnInit {
  ticketFields = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    ticketTitle: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    status: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  });
  ticketData: any;

  constructor(
    private toast: ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getTicketDetails();
  }

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

  get status() {
    return this.ticketFields.get('status');
  }

  get email() {
    return this.ticketFields.get('email');
  }

  get description() {
    return this.ticketFields.get('description');
  }

  getTicketDetails() {
    const ticket = this.route.snapshot.queryParamMap.get('myObject') as string;
    this.ticketData = JSON.parse(ticket) || {};
    console.log(this.ticketData);
  }

  resetForm() {
    this.ticketFields.reset();
  }

  handleNewTicket() {
    if (this.ticketFields.valid) {
      this.ticketData.raisedBy = {
        firstname: this.ticketFields.value.firstname,
        lastname: this.ticketFields.value.lastname,
      };
      this.ticketData.ticketTitle = this.ticketFields.value.ticketTitle;
      this.ticketData.category = this.ticketFields.value.category;
      this.ticketData.status = this.ticketFields.value.status;
      this.ticketData.ticketDesc = this.ticketFields.value.description;
      console.log(this.ticketData);

      this.toast.success('Ticket updated successfully!', 'Success', {
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
