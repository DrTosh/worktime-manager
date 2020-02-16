export class Time {
    hours: number;
    minutes: number;

    constructor(hours: number, minutes: number) {
        this.hours = hours;
        this.minutes = minutes;
    }

    public toString = (): string => {
        return this.hours + ":" + this.minutes;
    }

    public toNumber = (): number => {
        return this.hours + this.minutes / 60;
    }

    // operator functions
    add(time: Time) {
        this.hours += time.hours;
        this.minutes += time.minutes;
        this.validate();
    }

    sub(time: Time) {
        this.hours -= time.hours;
        this.minutes -= time.minutes;
        this.validate();
    }

    validate() {
        while (this.minutes >= 60) {
            this.hours += 1;
            this.minutes -= 60;
        }

        while (this.minutes < 0) {
            this.hours -= 1;
            this.minutes += 60;
        }
    }

    eq(time: Time): boolean {
        return this.hours == time.hours && this.minutes == time.minutes;
    }

    gt(time: Time): boolean {
        if (this.hours == time.hours) {
            return this.minutes > time.minutes;
        }
        else {
            return this.hours > time.hours;
        }
    }

    gteq(time: Time): boolean {
        return this.gt(time) || this.eq(time);
    }

    lt(time: Time): boolean {
        if (this.hours == time.hours) {
            return this.minutes < time.minutes;
        }
        else {
            return this.hours < time.hours;
        }
    }

    lteq(time: Time): boolean {
        return this.lt(time) || this.eq(time);
    }
}