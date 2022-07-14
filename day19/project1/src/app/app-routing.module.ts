import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Display1Component } from './display1/display1.component';
import { DisplayformComponent } from './displayform/displayform.component';

const routes: Routes = [
  {path:'displayform', component:DisplayformComponent},
  {path:'display1', component:Display1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
