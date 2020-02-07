import { Component, OnInit } from '@angular/core';
import { Day } from '../model/day';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css'],
  host: { 'class': 'row text-center' }
})
export class DayComponent implements OnInit {
  mytime: Date = new Date();
  day: Day = {
    active: true,
    date: new Date(),
    start: new Date(),
    end: new Date(),
    break: new Date(),
    actualworktime: new Date(),
    targetworktime: new Date()
  };

  constructor() { }
  ngOnInit() { }
}
