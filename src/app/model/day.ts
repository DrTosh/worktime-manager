export class Day {
    active: boolean;
    date: Date;
    start: Date;
    end: Date;
    break: Date;
    actualworktime: Date;
    targetworktime: Date;

    static create (date: Date) {
        let day = new Day();
        let newDate = new Date(date);
        day.active = true;
        day.date = date;
        newDate.setTime(new Date("2020-01-01T00:00:00").getTime());
        day.start = newDate;
        day.end = newDate;
        day.break = newDate;
        day.actualworktime = newDate;
        day.targetworktime = newDate;

        return day;
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