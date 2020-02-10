import { Injectable } from '@angular/core';
import { Month } from './month';
import { Observable } from 'rxjs';

@Injectable()
export class WorkTime {
    month: Month = new Month(2020, 2);

    public getMonth(): any {
        const monthObservable = new Observable(observer => {
            setTimeout(() => {
                observer.next(this.month);
            }, 1000);
        });

        return monthObservable;
    }
}