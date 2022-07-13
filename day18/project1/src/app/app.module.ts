import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Display1Component } from './display1/display1.component';
import { Display2Component } from './display2/display2.component';
import { GenderPipe } from './gender.pipe';
import { Display3Component } from './display3/display3.component';
import { Display4Component } from './display4/display4.component';
import { EmpfilterPipe } from './empfilter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    Display1Component,
    Display2Component,
    GenderPipe,
    Display3Component,
    Display4Component,
    EmpfilterPipe
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
