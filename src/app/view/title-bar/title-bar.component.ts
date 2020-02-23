import { Component, OnInit } from '@angular/core';
import { app, BrowserWindow } from 'electron'

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.css']
})
export class TitleBarComponent implements OnInit {

  constructor() { }
  ngOnInit() { }

  close() {
    app.quit();
  }
}
