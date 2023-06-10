import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit{
  users: any[] = [
    {
      username: 'Customer 1',
      branch: 'Branch 1',
      email: 'test_customer@gmail.com',
      role: 'Admin',
      status: 'Active',
      assignedTickets: 5
    },
    {
      username: 'Customer 2',
      branch: 'Branch 2',
      email: 'test_customer@gmail.com',
      role: 'Admin',
      status: 'Active',
      assignedTickets: 5
    },
    {
      username: 'Customer 3',
      branch: 'Branch 4',
      email: 'test_customer@gmail.com',
      role: 'User',
      status: 'Inactive',
      assignedTickets: 8
    },
  ];
  totalRecords!: number;
  rows!: number;
  first!: number;

  constructor() {
  }

  ngOnInit(): void {
    this.totalRecords = this.users.length;
    this.rows = 10;
    this.first = 0;
  }

  onPageChange(event: any): void {
    this.first = event.first;
  }
}
