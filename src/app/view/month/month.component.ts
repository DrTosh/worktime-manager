import { Component, OnInit, OnDestroy, HostListener } from "@angular/core";
import { WorkTime } from "src/app/model/worktime";
import { WorkTimeController } from "src/app/controller/worktime-controller";

@Component({
  selector: "app-month",
  templateUrl: "./month.component.html",
  styleUrls: ["./month.component.css"]
})
export class MonthComponent implements OnInit {
  @HostListener("window:beforeunload") doSomething() {
    this.worktimeController.saveWorkTime(this.worktime);
  }

  worktime: WorkTime;
  worktimeController: WorkTimeController;

  constructor(worktime: WorkTime, workTimeController: WorkTimeController) {
    workTimeController.loadWorkTime(worktime);
    this.worktime = worktime;
    this.worktimeController = workTimeController;
    this.worktimeController.monthController.createWeeks(this.worktime.month);
  }

  ngOnInit() {}

  changed() {
    this.worktimeController.monthController.calcTimeSum(
      this.worktime.month,
      this.worktime.wage
    );
  }

  reloadWeeks() {
    this.worktimeController.loadMonth(
      this.worktime,
      this.worktime.currentYear,
      this.worktime.currentMonth
    );
    this.worktimeController.monthController.createWeeks(this.worktime.month);
  }
}
