import {Component, HostListener, OnInit} from "@angular/core";
import {StateEnum} from "./state.enum";
import {ScoreService} from "./services/score.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  public key: string;
  public lignes: number[] = [];
  public stateEnum = StateEnum;
  public state = StateEnum.SETTING_NAME;
  public counter = 0;

  private readonly nbLignes = 10;
  private readonly keys = ["u", "i", "o", "p"];
  private timerRef;

  constructor(private scoreService: ScoreService) {
  }

  public ngOnInit(): void {
    for (let i = 0; i < this.nbLignes; i++) {
      this.lignes.push(Math.floor(Math.random() * 4));
    }
  } 

  @HostListener("document:keypress", ["$event"])
  handleKeyboardEvent(event: KeyboardEvent) {
    this.key = event.key;

    if (this.state === StateEnum.SETTING_NAME) {
      return;
    }

    if (this.state === StateEnum.SPLASH_SCREEN && this.keys.indexOf(this.key) === this.lignes[0]) {
      this.state = StateEnum.STARTED;
      const startTime = Date.now();
      this.timerRef = setInterval(() => {
        this.counter = Date.now() - startTime;
      });
    }

    if (this.state === StateEnum.STARTED) {
      let hit = this.keys.indexOf(this.key);
      if (hit > -1) {
        if (hit === this.lignes[0]) { 
          this.lignes.shift();
        } else {
          this.state = StateEnum.FAILED;
          this.end();
          this.scoreService.saveScore(localStorage.getItem('name'), this.counter, this.state).subscribe();
        }
      }
      if (this.lignes.length === 0) {
        this.state = StateEnum.ENDED;
        this.end();
        this.scoreService.saveScore(localStorage.getItem('name'), this.counter, this.state).subscribe();
      }
    }
  }

  private end() {
    clearInterval(this.timerRef);
  }
}
