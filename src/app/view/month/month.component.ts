import { Component, OnInit } from '@angular/core';
import { Month } from '../../model/month';
import { WorkTime } from 'src/app/model/worktime';
import { WorkTimeController } from 'src/app/controller/worktime-controller';

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css']
})
export class MonthComponent implements OnInit {
  month: Month;
  worktime: WorkTime;
  worktimeController: WorkTimeController;
  CurrentMonth: number;
  CurrentYear: number;

  constructor(worktime: WorkTime, workTimeController: WorkTimeController) {
    this.worktime = worktime;
    this.worktimeController = workTimeController;
  }

  ngOnInit() {
    this.month = this.worktime.month;
    this.month.createWeeks();
  }

  changed() {
    this.worktimeController.monthController.calcTimeSum(this.month, this.worktime.wage);
  }
}
