import { Injectable } from "@angular/core";
import { Month } from "./month";

@Injectable()
export class WorkTime {
  months: Month[];
  month: Month;
  isExpand: boolean;
  currentMonth: number;
  currentYear: number;
  availableYears: number[];
  wage: number;
  isAutoEndTime: boolean;

  constructor() {
    this.isExpand = false;
    this.isAutoEndTime = true;
    this.wage = 14;
    this.currentMonth = new Date().getMonth();
    this.currentYear = new Date().getFullYear();
    this.month = new Month(this.currentYear, this.currentMonth);
    this.months = [this.month];
    this.availableYears = [this.currentYear];
  }
}
