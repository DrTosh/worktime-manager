import { Time } from '../model/time';

export class TimeController {    
    toString(time: Time): string {
        return time.hours + ":" + time.minutes;
    }

    toNumber(time: Time): number {
        return time.hours + time.minutes / 60;
    }

    // operator functions
    add(time: Time, value: Time) {
        time.hours += value.hours;
        time.minutes += value.minutes;
        this.validate(time);
    }

    sub(time: Time, value: Time) {
        time.hours -= value.hours;
        time.minutes -= value.minutes;
        this.validate(time);
    }

    validate(time: Time) {
        while (time.minutes >= 60) {
            time.hours += 1;
            time.minutes -= 60;
        }

        while (time.minutes < 0) {
            time.hours -= 1;
            time.minutes += 60;
        }
    }

    eq(time: Time, value: Time): boolean {
        return time.hours == value.hours && time.minutes == value.minutes;
    }

    gt(time: Time, value: Time): boolean {
        if (time.hours == value.hours) {
            return time.minutes > value.minutes;
        }
        else {
            return time.hours > value.hours;
        }
    }

    gteq(time: Time, value: Time): boolean {
        return this.gt(time, value) || this.eq(time, value);
    }

    lt(time: Time, value: Time): boolean {
        if (time.hours == value.hours) {
            return time.minutes < value.minutes;
        }
        else {
            return time.hours < value.hours;
        }
    }

    lteq(time: Time, value: Time): boolean {
        return this.lt(time, value) || this.eq(time, value);
    }
}