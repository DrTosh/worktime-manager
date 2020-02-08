import { Component, OnInit, Input } from '@angular/core';
import { Week } from '../model/week';

@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.css']
})
export class WeekComponent implements OnInit {
  @Input() week: Week = new Week();
  constructor() { }

  ngOnInit() { }

}
