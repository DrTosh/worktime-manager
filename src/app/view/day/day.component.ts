import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Day } from '../../model/day';
import { WorkTime } from 'src/app/model/worktime';
import { WorkTimeController } from 'src/app/controller/worktime-controller';
import { Time } from 'src/app/model/time';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit {
  @Input() day: Day;
  @Output() dayChanged: EventEmitter<Day> = new EventEmitter<Day>();

  worktime: WorkTime;
  worktimeController: WorkTimeController;
  isActualDay: boolean;

  constructor(
    worktime: WorkTime,
    workTimeController: WorkTimeController) {
    this.worktime = worktime;
    this.worktimeController = workTimeController;
  }

  ngOnInit() { 
    this.day.date = new Date(this.day.date);
    const today = new Date();

    if (this.day.date.getDate() == today.getDate()) {
      if (this.day.date.getMonth() == today.getMonth()) {
        if (this.day.date.getFullYear() == today.getFullYear()) {
          this.isActualDay = true;

          var self = this;
          window.setInterval(function() {
            var isChanged = false;
            if (self.day.start.hours !== 0) {
              let hours = new Date().getHours();
              if (hours >= self.day.end.hours) {
                if (hours !== self.day.end.hours) {
                  self.day.end.hours = hours;
                  self.day.end.minutes = 0;
                  isChanged = true;
                }                  
                    
                let minutes = new Date().getMinutes();
                if (minutes > self.day.end.minutes) {
                  self.day.end.minutes = minutes;
                  isChanged = true;
                }
              }
            }   
            
            if (isChanged) {
              // timesChanged
              self.worktimeController.dayController.calcByTimeSpan(self.day);
              self.dayChanged.emit(self.day);
            }
          }, 10000);
        }
      }
    }
  }

  timesChanged() {
    this.worktimeController.dayController.calcByTimeSpan(this.day);
    this.dayChanged.emit(this.day);
  }

  breakChanged() {
    this.worktimeController.dayController.calcByBreak(this.day);
    this.dayChanged.emit(this.day);
  }

  actualTimeChanged() {
    this.worktimeController.dayController.calcByWorkTime(this.day);
    this.dayChanged.emit(this.day);
  }
}
