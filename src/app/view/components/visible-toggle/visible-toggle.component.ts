import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'visible-toggle',
  templateUrl: './visible-toggle.component.html',
  styleUrls: ['./visible-toggle.component.css']
})
export class VisibleToggleComponent implements OnInit {
  @Input() isVisible: boolean = true;
  @Output() isVisibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  faEye = faEye;
  faEyeSlash = faEyeSlash;

  constructor() { }
  ngOnInit() { }
}
