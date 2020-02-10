import { Day } from './day';
import { Time } from './time';

export class Week {
    days: Day[];
    actualworktime: Time;
    targetworktime: Time;

    constructor() {
        this.days = [];
        this.actualworktime = new Time(0, 0);
        this.targetworktime = new Time(0, 0);
    }
}