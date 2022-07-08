import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Display1Component } from './display1/display1.component';
import { Display2Component } from './display2/display2.component';
import { Display3Component } from './display3/display3.component';

// import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    Display1Component,
    Display2Component,
    Display3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
