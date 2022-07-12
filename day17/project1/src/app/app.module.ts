import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Display1Component } from './display1/display1.component';
import { UsersModule } from './users/users.module';
import { LoginComponent } from './security/login/login.component';

import { LeavesModule } from './leaves/leaves.module';

import { Display3Component } from './displayall/display3.component';

@NgModule({
  declarations: [
    AppComponent,
    Display1Component,
    LoginComponent,
    Display3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    LeavesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
