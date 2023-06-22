import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketService } from '../../services/ticket-service';
import { Ticket } from '../../domain/ticket';

@Component({
  selector: 'app-user-support-ticket',
  templateUrl: './user-support-ticket.component.html',
  styleUrls: ['./user-support-ticket.component.css'],
})
export class UserSupportTicketComponent implements OnInit, OnDestroy {
  ticket: Ticket[] | any;
  visible: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private toast: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
    private ticketService: TicketService
  ) {}

  ngOnInit() {
    this.ticketService.getTicketsMini().then((data) => {
      this.ticket = data;
    });
  }

  ngOnDestroy() {}

  showDialog() {
    this.visible = true;
  }
}
