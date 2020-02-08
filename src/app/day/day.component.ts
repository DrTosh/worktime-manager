import { Component, OnInit, Input } from '@angular/core';
import { Day } from '../model/day';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css'],
  host: { 'class': 'row text-center' }
})
export class DayComponent implements OnInit {
  @Input() day: Day;

  constructor() { }
  ngOnInit() { }
}
