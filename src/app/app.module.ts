import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameControlComponent } from './game-control/game-control.component';
import { EvenComponent } from './numbers/even/even.component';
import { OddComponent } from './numbers/odd/odd.component';
import { NumComponent } from './numbers/num/num.component';

@NgModule({
  declarations: [
    AppComponent,
    GameControlComponent,
    EvenComponent,
    OddComponent,
    NumComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
