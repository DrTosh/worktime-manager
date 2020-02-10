import { Day } from '../model/day';
import { Time } from '../model/time';

export class DayController {
    calcByTimeSpan(day: Day) {
        if (day.end.gt(day.start)) {
            let minbreak: Time = new Time(0, 0);
            let time: Time = new Time(day.end.hours, day.end.minutes);
            time.sub(day.start);

            if (time.gt(new Time(6, 0)))
                minbreak.add(new Time(0, 30));

            if (time.gt(new Time(9, 0)))
                minbreak.add(new Time(0, 15));

            if (minbreak.gt(day.break))
                day.break = minbreak;

            time.sub(minbreak);

            day.actualworktime = time;
        }
    }

    calcByBreak(day: Day) {
        let time: Time = new Time(day.end.hours, day.end.minutes);
        time.sub(day.break);
        day.actualworktime = time;
    }

    calcByWorkTime(day: Day) {
        let minbreak = new Time(0, 0);
        if (day.actualworktime.gt(new Time(6, 0)))
            minbreak.add(new Time(0, 30));

        if (day.actualworktime.gt(new Time(9, 0)))
            minbreak.add(new Time(0, 15));

        if (minbreak.gt(day.break))
            day.break = minbreak;

        let endTime = new Time(day.start.hours, day.start.minutes);
        endTime = new Time(day.start.hours, day.start.minutes);
        endTime.add(day.break);
        endTime.add(day.actualworktime);
        day.end = endTime;
    }
}