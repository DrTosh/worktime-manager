import { Injectable } from '@angular/core';
import { Month } from './month';
import { Observable } from 'rxjs';

@Injectable()
export class WorkTime {
    month: Month = new Month(2020, 2);
    isExpand: boolean;
    currentMonth: number;
    currentYear: number;
    availableYears: number[] = [2019, 2020];

    constructor() {
        this.month = new Month(2020, 2);
        this.isExpand = false;
        this.currentMonth = new Date().getMonth();
        this.currentYear = new Date().getFullYear();

        console.log(this);
    }
}