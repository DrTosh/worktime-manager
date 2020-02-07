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
  day: Day = Day.create(new Date("2020-01-01T00:00:00"));
  constructor() { }
  ngOnInit() { }
}
