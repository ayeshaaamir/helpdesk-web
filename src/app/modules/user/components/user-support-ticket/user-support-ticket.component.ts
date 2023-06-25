import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { Ticket } from '../../domain/ticket';

@Component({
  selector: 'app-user-support-ticket',
  templateUrl: './user-support-ticket.component.html',
  styleUrls: ['./user-support-ticket.component.css'],
})
export class UserSupportTicketComponent implements OnInit, OnDestroy {
  ticket: Ticket | any;
  visible: boolean = false;
  visibleDelete: boolean = false;
  private storageKey = 'ticketFormData';
  ticketFields: FormGroup;
  ticketList: Ticket[] = [];

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
      description: ['', Validators.required],
      ticketId: ['', Validators.required],
      email: ['', Validators.required],
    });
  }

  ngOnInit() {
    const savedTickets = localStorage.getItem('tickets');
    this.ticketList = savedTickets ? JSON.parse(savedTickets) : [];
  }

  ngOnDestroy() {}

  showDialog(ticket?: Ticket, isEditMode?: boolean) {
    if (ticket) {
      if (isEditMode) {
        this.editTicketDetails(ticket);
      } else {
        this.viewTicketDetails(ticket);
      }
    }
    this.visible = true;
  }

  showDeleteDialog(ticket?: Ticket) {
    this.ticket = ticket;
    this.visibleDelete = true;
  }

  handleSave() {
    if (this.ticketFields.valid) {
      const formData = this.ticketFields.value;
      if (this.ticket) {
        const index = this.ticketList.findIndex((t) => t.ticketId === this.ticket.ticketId);
        if (index !== -1) {
          this.ticketList[index] = { ...this.ticketList[index], ...formData };
          this.toast.success('', 'Ticket updated successfully');
          this.visible = false;
          this.ticketFields.reset();
          this.saveTicketToLocalSTorage();
        } else {
          this.toast.error('Error updating ticket');
        }
      } else {
        const newTicket: Ticket = {
          ...formData,
          ticketId: this.generateTicketId(),
        };
        this.ticketList.push(newTicket);
        this.toast.success('', 'Ticket created successfully');
        this.visible = false;
        this.ticketFields.reset();
        this.saveTicketToLocalSTorage();
      }
    }
  }

  generateTicketId(): number {
    let maxId = 0;
    for (const ticket of this.ticketList) {
      if (ticket.ticketId > maxId) {
        maxId = ticket.ticketId;
      }
    }
    return maxId + 1;
  }

  saveTicketToLocalSTorage() {
    localStorage.setItem('tickets', JSON.stringify(this.ticketList));
  }

  viewTicketDetails(ticket?: Ticket) {
    if (ticket) {
      this.ticketFields.setValue({
        customer: ticket.customer,
        branch: ticket.branch,
        ticketDesc: ticket.ticketDesc,
        assignee: ticket.assignee,
        ticketPriority: ticket.ticketPriority,
        status: ticket.status,
        description: ticket.description,
        ticketId: ticket.ticketId,
        email: ticket.email,
      });
    }
    this.ticketFields.disable();
  }

  editTicketDetails(ticket?: Ticket) {
    if (ticket) {
      this.ticketFields.setValue({
        customer: ticket.customer,
        branch: ticket.branch,
        ticketDesc: ticket.ticketDesc,
        assignee: ticket.assignee,
        ticketPriority: ticket.ticketPriority,
        status: ticket.status,
        description: ticket.description,
        ticketId: ticket.ticketId,
        email: ticket.email,
      });
    }
    this.ticketFields.enable();
  }

  handleDeleteTicket() {
    if (this.ticket) {
      const index = this.ticketList.findIndex((t) => t.ticketId === this.ticket.ticketId);
      if (index !== -1) {
        this.ticketList.splice(index, 1);
        this.toast.success('', 'Ticket deleted successfully');
        this.visibleDelete = false;
        this.saveTicketToLocalSTorage();
      } else {
        this.toast.error('Error deleting ticket');
      }
    }
  }

  closeModal() {
    this.visibleDelete = false;
  }
}
