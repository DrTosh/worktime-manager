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
}