import { Day } from './day';
import { Time } from './time';

export class Week {
    days: Day[];
    actualworktime: Time;
    targetworktime: Time;
    active: boolean;

    constructor() {
        this.days = [];
        this.active = true;
        this.actualworktime = new Time(0, 0);
        this.targetworktime = new Time(0, 0);
    }
}