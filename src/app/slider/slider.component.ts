import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  @Input() inputModel: boolean = true;
  @Output() inputModelChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }
  ngOnInit() { }
}
