import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { AllTicketsComponent } from './components/all-tickets/all-tickets.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { AddTicketsComponent } from './components/add-tickets/add-tickets.component';

const routes: Routes = [
  {path: '', component: AdminDashboardComponent,
  children: [
    {path: 'home', component: HomeComponent},
    {path: 'all-tickets', component: AllTicketsComponent},
    {path: 'add-user', component: AddUserComponent},
    {path: 'add-tickets', component: AddTicketsComponent},
    {path: '', redirectTo: '/admin/home', pathMatch: 'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
