import { MonthController } from './month-controller';
import { WeekController } from './week-controller';
import { DayController } from './day-controller';
import { Injectable } from '@angular/core';
import { WorkTime } from '../model/worktime';
import { Month } from '../model/month';

@Injectable()
export class WorkTimeController {
    monthController: MonthController = new MonthController();
    weekController: WeekController = new WeekController();
    dayController: DayController = new DayController();

    saveWorkTime(worktime: WorkTime) {
        mainProcess.writeFile(JSON.stringify(worktime, null, 4));
    }

    loadWorkTime(worktime: WorkTime) {
        let workTime = JSON.parse(mainProcess.readFile());

        if (workTime != null) {
            worktime.months = workTime.months;
            worktime.month = workTime.month;
            worktime.isExpand = workTime.isExpand;
            worktime.currentMonth = workTime.currentMonth;
            worktime.currentYear = workTime.currentYear;
            worktime.availableYears = workTime.availableYears;
            worktime.wage = workTime.wage;

            if (!worktime.availableYears.includes(new Date().getFullYear())) {
                worktime.availableYears.push(new Date().getFullYear());
            }
        }
    }

    loadMonth(worktime: WorkTime, year: number, month: number) {
        let found = false;
        worktime.months.forEach(m => {
            if (m.year == year && m.month == month) {
                worktime.month = m;
                found = true;
                console.log(worktime.month);
            }
        });

        if (!found) {
            worktime.month = new Month(year, month);
            worktime.months.push(worktime.month);
        }
    }
}