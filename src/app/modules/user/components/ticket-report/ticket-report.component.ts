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
    this.router.navigate(['/user/user-support-ticket'], { queryParams: { myObject: JSON.stringify(ticket) } });
  }

  ticketDetails() {
    this.ticketReport = [
      {
        ticketPriority: 'Very High',
        ticketDesc: 'Need to change laptop',
        ticketNumber: 49,
        customer: 'Aman Kumar',
        branch: 'Khi',
        assignee: 'Test Company',
        email: 'test@gmail.com',
        status: 'Todo',
        description: ' Test company hardware issues'
      },
      {
        ticketPriority: 'High',
        ticketDesc: 'Internet connectivity issue',
        ticketNumber: 50,
        customer: 'Aman Kumar',
        branch: 'Khi',
        assignee: 'Test Company',
        email: 'john.doe@example.com',
        status: 'Todo',
        description: ' Test company hardware issues'
      },
      {
        ticketPriority: 'High',
        ticketDesc: 'Internet connectivity issue',
        ticketNumber: 51,
        customer: 'Aman Kumar',
        branch: 'Khi',
        assignee: 'Test Company',
        email: 'john.doe@example.com',
        status: 'In Progress',
        description: ' Test company hardware issues'
      },
      {
        ticketPriority: 'Medium',
        ticketDesc: 'Internet connectivity issue',
        ticketNumber: 52,
        customer: 'Aman Kumar',
        branch: 'Khi',
        assignee: 'Test Company',
        email: 'john.doe@example.com',
        status: 'Resolved',
        description: ' Test company hardware issues'
      },
      {
        ticketPriority: 'Low',
        ticketDesc: 'Internet connectivity issue',
        ticketNumber: 53,
        customer: 'Aman Kumar',
        branch: 'Isl',
        assignee: 'Test Company',
        email: 'john.doe@example.com',
        status: 'Reopened',
        description: ' Test company hardware issues'
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
