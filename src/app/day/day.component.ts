import { Component, OnInit } from '@angular/core';
import { Day } from '../model/day';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit {
  mytime: Date = new Date();
  day: Day = {
    active: true,
    date: new Date(),
    start: new Date(),
    end: new Date(),
    break: new Date(),
    worktime: new Date()
  };

  constructor() { }

  ngOnInit() {
  }

}
