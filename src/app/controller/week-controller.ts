import { Week } from '../model/week';
import { Time } from '../model/time';
import { TimeController } from './time-controller';

export class WeekController {
    timeController = new TimeController();
    calcTimeSum(week: Week) {
        week.actualworktime = new Time(0, 0);
        week.targetworktime = new Time(0, 0);
        week.days.forEach(day => {
            if (day.active) {
                this.timeController.add(week.actualworktime, day.actualworktime);
                this.timeController.add(week.targetworktime, day.targetworktime);
            }            
        });
    }
}