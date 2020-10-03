import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  count = 0;
  KeyWorld = '';
  constructor() {
  }

  // countKey(value: string) {
  //   this.count = value.length;
  // }
  clean() {
    this.KeyWorld = '';
  }
}
