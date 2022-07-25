import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientlistComponent } from './clientlist/clientlist.component';
import { Matdisplay1Component } from './matdisplay1/matdisplay1.component';
import { Rxjsdisplay1Component } from './rxjsdisplay1/rxjsdisplay1.component';
import { ComplifecycleComponent } from './complifecycle/complifecycle.component';

const routes: Routes = [
  {path:'complc', component: ComplifecycleComponent},
  {path:'clientlist', component: ClientlistComponent},
  {path:'matdisplay1', component: Matdisplay1Component},
  {path:'rxjsdisplay1', component: Rxjsdisplay1Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
