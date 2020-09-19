import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numberArray: number[] = [];

  // Event function call when each tick increment.
  addNumberComponent(count: number): void {
    this.numberArray.push(count);
  }

  resetNumberArray(gameStopped: boolean): void {
    if (gameStopped) {
      this.numberArray = [];
    }
  }
}
