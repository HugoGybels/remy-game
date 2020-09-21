import { OnInit, Component, HostListener } from "@angular/core";
import { StateEnum } from "./state.enum";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  public key: string;
  public lignes: number[] = [];
  public stateEnum = StateEnum;
  public state = StateEnum.SPLASH_SCREEN;
  public failed = false;
  public counter = 0;

  private readonly nbLignes = 10;
  private readonly keys = ["u", "i", "o", "p"];
  private timerRef;

  public ngOnInit(): void {
    for (let i = 0; i < this.nbLignes; i++) {
      this.lignes.push(Math.floor(Math.random() * 4));
    }
  } 

  @HostListener("document:keypress", ["$event"])
  handleKeyboardEvent(event: KeyboardEvent) {
    this.key = event.key;

    if (this.state === StateEnum.SPLASH_SCREEN) {
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
        }
      }
      if (this.lignes.length === 0) {
        this.state = StateEnum.ENDED;
        this.end();
      }
    }
  }

  private end() {
    clearInterval(this.timerRef);
  }
}
