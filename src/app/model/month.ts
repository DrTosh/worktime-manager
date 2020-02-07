import { Week } from './week';
import { Day } from './day';

export class Month {
    year: number;
    month: number;
    weeks: Week[];

    constructor(year: number, month: number) {
        this.year = year;
        this.month = month;
        this.weeks = [];
    }

    public createWeeks() {
        let date = new Date(this.year, this.month, 1);
        let week = new Week();
        this.weeks.push(week);

        while(date.getMonth() == this.month) {
            week.days.push(Day.create(date));

            // 0 == Sunday
            if (date.getDay() == 0) {
                week = new Week();
                this.weeks.push(week);
            }            

            date.setDate(date.getDate() + 1);
        }
    }
}