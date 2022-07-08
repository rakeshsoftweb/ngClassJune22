import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';

const routes: Routes = [
  {path:'dashboard', component: DashboardComponent},
  {path:'admin', component: AdminComponent},
  {path:'product', component: ProductComponent},
  {path:'category', component: CategoryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
