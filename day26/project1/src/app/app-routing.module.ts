import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrdersComponent } from './orders/orders.component';
import { ProfileComponent } from './profile/profile.component';
import { BookingsComponent } from './bookings/bookings.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path:'dashboard', component:DashboardComponent},
  {path:'orders', component:OrdersComponent},
  {path:'profile', component:ProfileComponent},
  {path:'bookings', component:BookingsComponent},
  {path:'users', component:UsersComponent,
  children:[{path:'user/:uid/:status', component:UserComponent}]},
  {path:'pgnotfound', component:PagenotfoundComponent},
  {path:'**', redirectTo:'/pgnotfound'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
