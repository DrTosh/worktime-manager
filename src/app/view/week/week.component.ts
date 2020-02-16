import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Week } from '../../model/week';
import { WorkTime } from 'src/app/model/worktime';
import { WorkTimeController } from 'src/app/controller/worktime-controller';

@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.css']
})
export class WeekComponent implements OnInit {
  @Input() week: Week = new Week();
  @Output() weekChanged: EventEmitter<Week> = new EventEmitter<Week>();

  worktime: WorkTime;
  worktimeController: WorkTimeController;

  constructor(worktime: WorkTime, workTimeController: WorkTimeController) {
    this.worktime = worktime;
    this.worktimeController = workTimeController;
  }

  ngOnInit() { }

  changed() {
    this.worktimeController.weekController.calcTimeSum(this.week);
    this.weekChanged.emit(this.week);
  }
}
