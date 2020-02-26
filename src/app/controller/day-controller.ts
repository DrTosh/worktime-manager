import { Day } from '../model/day';
import { Time } from '../model/time';
import { TimeController } from './time-controller';

export class DayController {
    timeController = new TimeController();
    calcByTimeSpan(day: Day) {
        if (this.timeController.gt(day.end, day.start)) {
            let minbreak: Time = new Time(0, 0);
            let time: Time = new Time(day.end.hours, day.end.minutes);
            this.timeController.sub(time, day.start);

            if (this.timeController.gt(time, new Time(6, 0)))
                this.timeController.add(minbreak, new Time(0, 30));

            if (this.timeController.gt(time, new Time(9, 0)))
                this.timeController.add(minbreak, new Time(0, 15));

            if (this.timeController.gt(minbreak, day.break))
                day.break = minbreak;

            this.timeController.sub(time, minbreak);
            day.actualworktime = time;
        }
    }

    calcByBreak(day: Day) {
        let time: Time = new Time(day.end.hours, day.end.minutes);
        this.timeController.sub(time, day.start);
        this.timeController.sub(time, day.break);
        day.actualworktime = time;
    }

    calcByWorkTime(day: Day) {
        let minbreak = new Time(0, 0);
        if (this.timeController.gt(day.actualworktime, new Time(6, 0)))
            this.timeController.add(minbreak, new Time(0, 30));

        if (this.timeController.gt(day.actualworktime, new Time(9, 0)))
            this.timeController.add(minbreak, new Time(0, 15));

        if (this.timeController.gt(minbreak, day.break))
            day.break = minbreak;

        let endTime = new Time(day.start.hours, day.start.minutes);
        endTime = new Time(day.start.hours, day.start.minutes);
        this.timeController.add(endTime, day.break);
        this.timeController.add(endTime, day.actualworktime);
        day.end = endTime;
    }
}