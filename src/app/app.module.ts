import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DayComponent } from './day/day.component';
import { MonthComponent } from './month/month.component';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';

@NgModule({
  declarations: [
    AppComponent,
    DayComponent,
    MonthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TimepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
