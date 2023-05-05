import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-tickets',
  templateUrl: './add-tickets.component.html',
  styleUrls: ['./add-tickets.component.css']
})
export class AddTicketsComponent {
  ticketFields = new FormGroup({
    user: new FormControl('', [Validators.required]),
    status: new FormControl('', [Validators.required]),
    ticketTitle: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  });

  constructor(private toast: ToastrService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {}

  get user() {
    return this.ticketFields.get('user');
  }

  get status() {
    return this.ticketFields.get('status');
  }

  get ticketTitle() {
    return this.ticketFields.get('ticketTitle');
  }

  get category() {
    return this.ticketFields.get('category');
  }

  get description() {
    return this.ticketFields.get('description');
  }

  resetForm() {
    this.ticketFields.reset();
  }

  handleNewTicket() {
  }
}
