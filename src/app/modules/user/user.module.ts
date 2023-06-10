import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TicketReportComponent } from './components/ticket-report/ticket-report.component';
import { UserSupportTicketComponent } from './components/user-support-ticket/user-support-ticket.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { KanbanComponent } from './components/kanban/kanban.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HighchartsChartModule } from 'highcharts-angular';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { TicketService } from './services/ticket-service';
import { UsersListComponent } from './components/users-list/users-list.component';

@NgModule({
  declarations: [
    UserDashboardComponent,
    HeaderComponent,
    FooterComponent,
    TicketReportComponent,
    UserSupportTicketComponent,
    HomeComponent,
    KanbanComponent,
    UsersListComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    DragDropModule,
    HighchartsChartModule,
    TableModule,
    TagModule
  ],
  providers: [
    TicketService,
  ],
})
export class UserModule { }
