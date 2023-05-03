import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AddUserComponent } from './components/add-user/add-user.component';
import { AddTicketsComponent } from './components/add-tickets/add-tickets.component';
import { AllTicketsComponent } from './components/all-tickets/all-tickets.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';

@NgModule({
  declarations: [
    AdminDashboardComponent,
    AddUserComponent,
    AddTicketsComponent,
    AllTicketsComponent,
    HeaderComponent,
    HomeComponent,
  ],
  imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}
