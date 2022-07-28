import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './security/auth.guard';
import { ClientComponent } from './client/client.component';
import { ClientdetComponent } from './clientdet/clientdet.component';

const routes: Routes = [
  { path: 'orders', canActivate: [AuthGuard], loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) },
  { path: 'register', canActivate: [AuthGuard], loadChildren: () => import('./register/register.module').then(m => m.RegisterModule) },
  { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
  {
    path: 'client', component: ClientComponent,
    children: [{ path: 'clientdet/:id', component: ClientdetComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
