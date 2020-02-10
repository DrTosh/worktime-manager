import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Time } from 'src/app/model/time';

@Component({
  selector: 'time-input',
  templateUrl: './time-input.component.html',
  styleUrls: ['./time-input.component.css']
})
export class TimeInputComponent implements OnInit {
  @Input() time: Time = new Time(0, 0);
  @Output() timeModelChange: EventEmitter<Time> = new EventEmitter<Time>();

  constructor() { }
  ngOnInit() { }
}
