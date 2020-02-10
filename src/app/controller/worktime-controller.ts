import { MonthController } from './month-controller';
import { WeekController } from './week-controller';
import { DayController } from './day-controller';
import { Injectable } from '@angular/core';

@Injectable()
export class WorkTimeController {
    monthController: MonthController = new MonthController();
    weekController: WeekController = new WeekController();
    dayController: DayController = new DayController();
}