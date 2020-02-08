import { Component, OnInit } from '@angular/core';
import { Month } from '../model/month';

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css']
})
export class MonthComponent implements OnInit {
  month: Month;

  constructor() { }

  ngOnInit() {
    this.month = new Month(2020, 1);
    this.month.createWeeks();
    console.log(this.month);
  }
}
