export class Day {
    active: boolean;
    date: Date;
    start: Date;
    end: Date;
    break: Date;
    actualworktime: Date;
    targetworktime: Date;

    constructor(date: Date) {
        this.active = true;
        this.date = new Date(date.setHours(0, 0, 0, 0));
        this.start = new Date(date.setHours(0, 0, 0, 0));
        this.end = new Date(date.setHours(0, 0, 0, 0));
        this.break = new Date(date.setHours(0, 0, 0, 0));
        this.actualworktime = new Date(date.setHours(0, 0, 0, 0));
        this.targetworktime = new Date(date.setHours(0, 0, 0, 0));
    }

    // constructor (day: Day) {
    //     this.active = true;
    //     this.date = new Date("2020-01-01T00:00:00");
    //     this.start = new Date("2020-01-01T00:00:00");
    //     this.end = new Date("2020-01-01T00:00:00");
    //     this.break = new Date("2020-01-01T00:00:00");
    //     this.actualworktime = new Date("2020-01-01T00:00:00");
    //     this.targetworktime = new Date("2020-01-01T00:00:00");
    // } 
}