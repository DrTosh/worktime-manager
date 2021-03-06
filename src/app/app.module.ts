import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DayComponent } from './view/day/day.component';
import { MonthComponent } from './view/month/month.component';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { SliderComponent } from './view/components/slider/slider.component';
import { WeekComponent } from './view/week/week.component';
import { WorkTime } from './model/worktime';
import { WorkTimeController } from './controller/worktime-controller';
import { TimeInputComponent } from './view/components/time-input/time-input.component';
import { VisibleToggleComponent } from './view/components/visible-toggle/visible-toggle.component';
import { TitleBarComponent } from './view/title-bar/title-bar.component';
import { FooterComponent } from './view/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    DayComponent,
    MonthComponent,
    SliderComponent,
    WeekComponent,
    TimeInputComponent,
    VisibleToggleComponent,
    TitleBarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TimepickerModule.forRoot(),
    FontAwesomeModule
  ],
  providers: [
    WorkTime,
    WorkTimeController
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
