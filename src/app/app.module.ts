import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { LigneComponent } from "./ligne/ligne.component";
import { StartScreenComponent } from "./start-screen/start-screen.component";
import { EndScreenComponent } from "./end-screen/end-screen.component";
import { TimerComponent } from "./timer/timer.component";
import { TimerPipe } from "./timer.pipe";
import {ScoreService} from "./services/score.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [
    AppComponent,
    LigneComponent,
    StartScreenComponent,
    TimerComponent,
    TimerPipe,
    EndScreenComponent
  ],
  providers: [
    ScoreService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
