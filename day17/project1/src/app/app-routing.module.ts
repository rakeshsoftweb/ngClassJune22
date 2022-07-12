import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Display1Component } from './display1/display1.component';
import { Display3Component } from './displayall/display3.component';

const routes: Routes = [
  {path:'display1', component:Display1Component},
  {path:'display3', component: Display3Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
