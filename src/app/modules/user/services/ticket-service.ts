import { Injectable } from '@angular/core';

@Injectable()
export class TicketService {
  getTicketsData() {
    return [
      {
        id: 1,
        ticketNumber: 1,
        ticketTitle: 'Need to change laptop',
        customer: 'Aman Kumar',
        assignee: 'Test Company',
        branch: 'Khi',
        email: 'test@gmail.com',
        status: 'Todo',
        ticketPriority: 'High',
        ticketDesc: 'Test company hardware issues',
      },
      {
        id: 1,
        ticketNumber: 2,
        ticketTitle: 'Need to change laptop',
        customer: 'Aman Kumar',
        assignee: 'Test Company',
        branch: 'Khi',
        email: 'test@gmail.com',
        status: 'Todo',
        ticketPriority: 'High',
        ticketDesc: 'Test company hardware issues',
      },
      {
        id: 1,
        ticketNumber: 3,
        ticketTitle: 'Need to change laptop',
        customer: 'Aman Kumar',
        assignee: 'Test Company',
        branch: 'Khi',
        email: 'test@gmail.com',
        status: 'Todo',
        ticketPriority: 'High',
        ticketDesc: 'Test company hardware issues',
      },
    ];
  }

  getTicketsMini() {
    return Promise.resolve(this.getTicketsData().slice(0, 5));
  }
}
