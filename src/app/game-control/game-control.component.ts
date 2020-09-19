import {Component, OnInit, Output, EventEmitter, DoCheck} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit, DoCheck {
  @Output() tickIncremented = new EventEmitter<number>();
  @Output() gameStopped = new EventEmitter<boolean>();
  count = 0;
  hasStarted = false;
  startButtonVisibility;
  stopButtonVisibility;
  timerRef;

  constructor() {
  }

  ngDoCheck(): void {
    this.startButtonVisibility = this.hasStarted ? 'none' : 'initial';
    this.stopButtonVisibility = this.hasStarted ? 'initial' : 'none';
  }

  ngOnInit(): void {
  }

  startGame(): void {
    this.hasStarted = true;
    this.timerRef = setInterval(() => this.tickIncremented.emit(this.count = Math.floor(Math.random() * 1000)), 1000);
  }

  stopGame(): void {
    this.hasStarted = false;
    clearInterval(this.timerRef);
    this.count = 0;
    this.gameStopped.emit(true);
  }

}
