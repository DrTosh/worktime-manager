import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.css']
})
export class TitleBarComponent implements OnInit {

  constructor() { }
  ngOnInit() { }

  hide_show() {
    electron.remote.BrowserWindow.getFocusedWindow().minimize();
  }

  min_max() {
    if (electron.remote.BrowserWindow.getFocusedWindow().isMaximized()) {
      electron.remote.BrowserWindow.getFocusedWindow().unmaximize()
    } else {
      electron.remote.BrowserWindow.getFocusedWindow().maximize();
    }
  }

  close() {
    electron.remote.app.quit();
  }
}
