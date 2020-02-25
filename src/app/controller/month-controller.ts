import { Month } from '../model/month';
import { Time } from '../model/time';

export class MonthController {
    calcTimeSum(month: Month, wage: number) {
        month.actualworktime = new Time(0, 0);
        month.targetworktime = new Time(0, 0);
        month.weeks.forEach(week => {
            month.actualworktime.add(week.actualworktime);
            month.targetworktime.add(week.targetworktime);
        });

        month.actualmoney = month.actualworktime.toNumber() * wage;
        month.targetmoney = month.targetworktime.toNumber() * wage;
    }

    readFile() {
        console.log(electron.remote.app.hasFile());
        console.log(electron.remote.app.readFile());
    }
}