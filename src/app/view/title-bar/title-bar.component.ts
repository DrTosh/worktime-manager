import { Component, OnInit } from '@angular/core';

declare var electron: any;

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.css']
})
export class TitleBarComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  close() {
    var app = electron.remote.app;
    app.app.quit();
  }
}
