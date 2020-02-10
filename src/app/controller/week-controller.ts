import { Week } from '../model/week';
import { Time } from '../model/time';

export class WeekController {
    calcTimeSum(week: Week) {
        week.actualworktime = new Time(0, 0);
        week.targetworktime = new Time(0, 0);
        week.days.forEach(day => {
            week.actualworktime.add(day.actualworktime);
            week.targetworktime.add(day.targetworktime);
        });
    }
}