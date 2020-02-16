import { Week } from './week';
import { Day } from './day';
import { Time } from './time';

export class Month {
    year: number;
    month: number;
    weeks: Week[];
    actualworktime: Time;
    actualmoney: number;
    targetworktime: Time;
    targetmoney: number;

    constructor(year: number, month: number) {
        this.year = year;
        this.month = month;
        this.weeks = [];
        this.actualworktime = new Time(0, 0);
        this.actualmoney = 0;
        this.targetworktime = new Time(0, 0);
        this.targetmoney = 0;
    }

    public createWeeks() {
        let date = new Date(this.year, this.month, 1);
        let week = new Week();
        this.weeks.push(week);

        while (date.getMonth() == this.month) {
            let day = new Day(date);
            week.days.push(day);

            // 0 == Sunday
            if (date.getDay() == 0) {
                week = new Week();
                this.weeks.push(week);
            }

            date.setDate(date.getDate() + 1);
            // console.log(date);
        }
    }
}