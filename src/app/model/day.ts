import { Time } from './time';

export class Day {
    active: boolean;
    date: Date;
    start: Time;
    end: Time;
    break: Time;
    actualworktime: Time;
    targetworktime: Time;

    constructor(date: Date) {
        this.active = true;
        this.date = new Date(date.setHours(0, 0, 0, 0));
        this.start = new Time(0, 0);
        this.end = new Time(0, 0);
        this.break = new Time(0, 0);
        this.actualworktime = new Time(0, 0);
        this.targetworktime = new Time(0, 0);
    }
}