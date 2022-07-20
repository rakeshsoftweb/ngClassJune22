import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientlistComponent } from './clientlist/clientlist.component';

const routes: Routes = [
  {path:'clientlist', component: ClientlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
