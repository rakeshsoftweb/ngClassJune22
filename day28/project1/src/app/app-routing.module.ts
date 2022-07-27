import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './security/auth.guard';

const routes: Routes = [
  { path: 'orders', canActivate:[AuthGuard],loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) },
  { path: 'register',canActivate:[AuthGuard],loadChildren: () => import('./register/register.module').then(m => m.RegisterModule) },
  { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
