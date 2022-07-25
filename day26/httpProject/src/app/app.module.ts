import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientlistComponent } from './clientlist/clientlist.component';
import { Matdisplay1Component } from './matdisplay1/matdisplay1.component';
import { Rxjsdisplay1Component } from './rxjsdisplay1/rxjsdisplay1.component';
import { RxjsdispdetailsComponent } from './rxjsdispdetails/rxjsdispdetails.component';
import { ComplifecycleComponent } from './complifecycle/complifecycle.component';
import { ComplcdetailsComponent } from './complcdetails/complcdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientlistComponent,
    Matdisplay1Component,
    Rxjsdisplay1Component,
    RxjsdispdetailsComponent,
    ComplifecycleComponent,
    ComplcdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
