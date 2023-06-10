import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-support-ticket',
  templateUrl: './user-support-ticket.component.html',
  styleUrls: ['./user-support-ticket.component.css']
})
export class UserSupportTicketComponent implements OnInit, OnDestroy {
  private storageKey = 'ticketFormData';
  ticketFields: FormGroup;
  ticketData: any;

  constructor(
    private formBuilder: FormBuilder,
    private toast: ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.ticketFields = this.formBuilder.group({
      customer: ['', Validators.required],
      branch: ['', Validators.required],
      ticketDesc: ['', Validators.required],
      assignee: ['', Validators.required],
      ticketPriority: ['', Validators.required],
      status: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.getTicketDetails();
    this.loadFormValues();
  }

  ngOnDestroy() {
    this.saveFormValues();
  }

  loadFormValues() {
    if (this.ticketData) {
      this.ticketFields.patchValue(this.ticketData);
    } else {
      const savedData = localStorage.getItem(this.storageKey);
      if (savedData) {
        this.ticketFields.patchValue(JSON.parse(savedData));
      }
    }
  }

  getTicketDetails() {
    const ticket = this.route.snapshot.queryParamMap.get('myObject') as string;
    if (ticket) {
      this.ticketData = JSON.parse(ticket);
    } else {
      this.ticketData = null;
    }
  }

  saveFormValues() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.ticketFields.value));
  }

  resetForm() {
    this.ticketFields.reset();
  }

  handleDeleteTicket() {}

  handleSaveTicket() {
    if (this.ticketFields.valid) {
      if (this.ticketData) {
        this.ticketData = { ...this.ticketData, ...this.ticketFields.value };
        this.toast.success('Ticket updated successfully!', 'Success', {
          timeOut: 8000,
          positionClass: 'toast-bottom-right',
        });
        this.ticketFields.reset();
      } else {
        this.ticketData = this.ticketFields.value;
        this.toast.success('Ticket raised successfully!', 'Success', {
          timeOut: 8000,
          positionClass: 'toast-bottom-right',
        });
        this.ticketFields.reset();
      }
    } else {
      this.toast.error('Please fill in all the required fields.', 'Error', {
        timeOut: 3000,
        positionClass: 'toast-bottom-right',
      });
    }
  }
}
