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
  reopenedTickets: any[] = [];

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

  navigateToEditTicket(ticket: any) {
    this.router.navigate(['/user/edit-ticket'], { queryParams: { myObject: JSON.stringify(ticket) } });
  }

  ticketDetails() {
    this.ticketReport = [
      {
        ticketPriority: 'Very High',
        ticketDesc: 'Need to change laptop',
        ticketNumber: 49,
        raisedBy: 'Aman Kumar',
        email: 'test@gmail.com',
        status: 'Todo',
      },
      {
        ticketPriority: 'High',
        ticketDesc: 'Internet connectivity issue',
        ticketNumber: 50,
        raisedBy: 'John Doe',
        email: 'john.doe@example.com',
        status: 'Todo',
      },
      {
        ticketPriority: 'High',
        ticketDesc: 'Internet connectivity issue',
        ticketNumber: 51,
        raisedBy: 'John Doe',
        email: 'john.doe@example.com',
        status: 'In Progress',
      },
      {
        ticketPriority: 'Medium',
        ticketDesc: 'Internet connectivity issue',
        ticketNumber: 52,
        raisedBy: 'John Doe',
        email: 'john.doe@example.com',
        status: 'Resolved',
      },
      {
        ticketPriority: 'Low',
        ticketDesc: 'Internet connectivity issue',
        ticketNumber: 53,
        raisedBy: 'John Doe',
        email: 'john.doe@example.com',
        status: 'Reopened',
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
    this.reopenedTickets = this.ticketReport.filter(
      (ticket) => ticket.status === 'Reopened'
    );
  }
}
