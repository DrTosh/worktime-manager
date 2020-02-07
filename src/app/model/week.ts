import { Time } from '@angular/common';
import { Day } from './day';

export class Week {
    days: Day[];
    actualworktime: Time;
    targetworktime: Time;

    constructor() {
        this.days = [];
        this.actualworktime = { hours: 0, minutes: 0 }; 
        this.targetworktime = { hours: 0, minutes: 0 }; 
    }

    calcWorkTime() {
        this.days.forEach(function (day) {
            this.actualworktime += day.actualworktime;
            this.targetworktime += day.targetworktime;
        });        
    }
}