import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LigneComponent } from './ligne/ligne.component';
import { StartScreenComponent } from './start-screen/start-screen.component';
import { TimerComponent } from './timer/timer.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, LigneComponent, StartScreenComponent, TimerComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
