import { Month } from '../model/month';
import { Time } from '../model/time';
import { Week } from '../model/week';
import { Day } from '../model/day';
import { TimeController } from './time-controller';

export class MonthController {
    timeController = new TimeController();
    calcTimeSum(month: Month, wage: number) {
        month.actualworktime = new Time(0, 0);
        month.targetworktime = new Time(0, 0);
        month.weeks.forEach(week => {
            this.timeController.add(month.actualworktime, week.actualworktime);
            this.timeController.add(month.targetworktime, week.targetworktime);
        });

        month.actualmoney = Math.round(this.timeController.toNumber(month.actualworktime) * wage * 100) / 100;
        month.targetmoney = Math.round(this.timeController.toNumber(month.targetworktime) * wage * 100) / 100;
    }

    public createWeeks(month: Month) {
        if (month.weeks.length == 0) {
            let date = new Date(month.year, month.month, 1);
            let week = new Week();
            month.weeks.push(week);
            
            while (date.getMonth() == month.month) {
                let day = new Day(date);
                week.days.push(day);
                
                // 0 == Sunday
                if (date.getDay() == 0) {
                    week = new Week();
                    month.weeks.push(week);
                }
                
                date.setDate(date.getDate() + 1);
            }
        }
    }
}