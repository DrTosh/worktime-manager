import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Day } from '../../model/day';
import { WorkTime } from 'src/app/model/worktime';
import { WorkTimeController } from 'src/app/controller/worktime-controller';

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

  constructor(
    worktime: WorkTime,
    workTimeController: WorkTimeController) {
    this.worktime = worktime;
    this.worktimeController = workTimeController;
  }

  ngOnInit() { }

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

  hello() {
    console.log("hello");
  }
}
