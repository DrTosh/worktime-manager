import { Injectable } from '@angular/core';
import { Month } from './month';

@Injectable()
export class WorkTime {
    month: Month;
    isExpand: boolean;
    currentMonth: number;
    currentYear: number;
    availableYears: number[] = [2019, 2020];
    wage: number;

    constructor() {
        this.isExpand = false;
        this.wage = 15;
        this.currentMonth = new Date().getMonth();
        this.currentYear = new Date().getFullYear();
        this.month = new Month(this.currentYear, this.currentMonth);
    }
}