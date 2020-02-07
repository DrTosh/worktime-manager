import { Component, OnInit } from '@angular/core';
import { Month } from '../model/month';

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css']
})
export class MonthComponent implements OnInit {

  constructor() { }

  ngOnInit() { 
    let month = new Month(2020, 2);
    month.createWeeks();
    console.log(month);
  }
}
