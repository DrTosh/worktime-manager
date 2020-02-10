import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
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

  constructor(worktime: WorkTime, workTimeController: WorkTimeController) {
    this.worktime = worktime;
    this.worktimeController = workTimeController;
  }

  ngOnInit() {
    this.month = this.worktime.month;
    this.month.createWeeks();
    console.log(this.month);
  }
}
