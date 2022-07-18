import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { ClientlistComponent } from './clientlist/clientlist.component';
import { EmployeeslistComponent } from './employeeslist/employeeslist.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { Display1Component } from './display1/display1.component';
import { Display1detComponent } from './display1det/display1det.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    ClientlistComponent,
    EmployeeslistComponent,
    AddemployeeComponent,
    Display1Component,
    Display1detComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
