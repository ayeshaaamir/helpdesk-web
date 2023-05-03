import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TicketReportComponent } from './components/ticket-report/ticket-report.component';
import { UserSupportTicketComponent } from './components/user-support-ticket/user-support-ticket.component';
import { HomeComponent } from './components/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UserDashboardComponent,
    HeaderComponent,
    FooterComponent,
    TicketReportComponent,
    UserSupportTicketComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
