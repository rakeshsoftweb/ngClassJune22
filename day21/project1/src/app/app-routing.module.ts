import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientlistComponent } from './clientlist/clientlist.component';
import { EmployeeslistComponent } from './employeeslist/employeeslist.component';
import { Display1Component } from './display1/display1.component';

const routes: Routes = [
  {path:'display1', component: Display1Component},
  {path:'clientlist', component: ClientlistComponent},
  {path:'employeelist', component: EmployeeslistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
