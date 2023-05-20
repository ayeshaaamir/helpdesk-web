import { Injectable } from '@angular/core';

@Injectable()
export class TicketService {
  getTicketsData() {
    return [
      {
        id: 1,
        raisedBy: 'Aman Kumar',
        assignee: 'Aman Kumar',
        description: 'Need to change laptop',
        ticketNumber: 1,
        status: 'Todo',
      },
      {
        id: 2,
        raisedBy: 'Aman Kumar',
        assignee: 'Aman Kumar',
        description: 'Need to change laptop',
        ticketNumber: 2,
        status: 'In Progress',
      },
      {
        id: 3,
        raisedBy: 'Aman Kumar',
        assignee: 'Aman Kumar',
        description: 'Need to change laptop',
        ticketNumber: 3,
        status: 'Resolved',
      },
      {
        id: 4,
        raisedBy: 'Aman Kumar',
        assignee: 'Aman Kumar',
        description: 'Need to change laptop',
        ticketNumber: 4,
        status: 'Reopened',
      },
      {
        id: 5,
        raisedBy: 'Aman Kumar',
        assignee: 'Aman Kumar',
        description: 'Need to change laptop',
        ticketNumber: 5,
        status: 'Todo',
      },
    ];
  }

  getTicketsMini() {
    return Promise.resolve(this.getTicketsData().slice(0, 5));
  }
}
