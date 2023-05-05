import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { TicketReportComponent } from './components/ticket-report/ticket-report.component';
import { UserSupportTicketComponent } from './components/user-support-ticket/user-support-ticket.component';
import { KanbanComponent } from './components/kanban/kanban.component';
import { EditTicketComponent } from './components/edit-ticket/edit-ticket.component';

const routes: Routes = [
  {path: '', component: UserDashboardComponent,
  children: [
    {path: 'home', component: HomeComponent},
    {path: 'ticket-report', component: TicketReportComponent},
    {path: 'user-support-ticket', component: UserSupportTicketComponent},
    {path: 'edit-ticket', component: EditTicketComponent},
    {path: 'kanban', component: KanbanComponent},
    {path: '', redirectTo: '/user/home', pathMatch: 'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
