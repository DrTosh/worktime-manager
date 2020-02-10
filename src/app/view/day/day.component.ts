import { Component, OnInit, Input } from '@angular/core';
import { Day } from '../../model/day';
import { WorkTime } from 'src/app/model/worktime';
import { WorkTimeController } from 'src/app/controller/worktime-controller';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css'],
  host: { 'class': 'row text-center' }
})
export class DayComponent implements OnInit {
  @Input() day: Day;
  // day: Day = new Day(new Date());
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
  }

  breakChanged() {
    this.worktimeController.dayController.calcByBreak(this.day);
  }

  actualTimeChanged() {
    this.worktimeController.dayController.calcByWorkTime(this.day);
  }
}
