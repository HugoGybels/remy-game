import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LigneComponent } from './ligne/ligne.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, LigneComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
