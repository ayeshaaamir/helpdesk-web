import {
  ChangeDetectorRef,
  Component,
  OnInit,
  AfterViewInit,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ticket-report',
  templateUrl: './ticket-report.component.html',
  styleUrls: ['./ticket-report.component.css'],
})
export class TicketReportComponent implements OnInit, AfterViewInit {
  ticketReport: any[] = [];
  toDoTickets: any[] = [];
  inProgressTickets: any[] = [];
  resolvedTickets: any[] = [];
  closedTickets: any[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.ticketDetails();
    this.getTicketByStatus();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.cdr.detectChanges();
    });
  }

  navigateToEditTicket() {
    this.router.navigate(['/user/user-support-ticket']);
  }

  ticketDetails() {
    this.ticketReport = [
      {
        ticketPriority: 'very-high',
        ticketDesc: 'Need to change laptop',
        ticketNumber: 49,
        raisedBy: 'Aman Kumar',
        email: 'test@gmail.com',
        status: 'Todo',
      },
      {
        ticketPriority: 'high',
        ticketDesc: 'Internet connectivity issue',
        ticketNumber: 50,
        raisedBy: 'John Doe',
        email: 'john.doe@example.com',
        status: 'Todo',
      },
      {
        ticketPriority: 'high',
        ticketDesc: 'Internet connectivity issue',
        ticketNumber: 50,
        raisedBy: 'John Doe',
        email: 'john.doe@example.com',
        status: 'In Progress',
      },
      {
        ticketPriority: 'medium',
        ticketDesc: 'Internet connectivity issue',
        ticketNumber: 50,
        raisedBy: 'John Doe',
        email: 'john.doe@example.com',
        status: 'Resolved',
      },
      {
        ticketPriority: 'low',
        ticketDesc: 'Internet connectivity issue',
        ticketNumber: 50,
        raisedBy: 'John Doe',
        email: 'john.doe@example.com',
        status: 'Closed',
      },
    ];
  }

  getTicketByStatus() {
    this.toDoTickets = this.ticketReport.filter(
      (ticket) => ticket.status === 'Todo'
    );
    this.inProgressTickets = this.ticketReport.filter(
      (ticket) => ticket.status === 'In Progress'
    );
    this.resolvedTickets = this.ticketReport.filter(
      (ticket) => ticket.status === 'Resolved'
    );
    this.closedTickets = this.ticketReport.filter(
      (ticket) => ticket.status === 'Closed'
    );
  }
}
