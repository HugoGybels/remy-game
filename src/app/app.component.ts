import { OnInit, Component, HostListener } from "@angular/core";
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  public key: string;
  public lignes: number[] = [];
  public started = false;
  public failed = false;
  public counter = 0;

  private readonly nbLignes = 100;
  private readonly keys = ['u', 'i', 'o', 'p'];
  private timerRef;

  public ngOnInit(): void {
    for (let i = 0; i < this.nbLignes; i++) {
      this.lignes.push(Math.floor(Math.random() * 4));
    }
  }

  @HostListener("document:keypress", ["$event"])
  handleKeyboardEvent(event: KeyboardEvent) {
    this.key = event.key;
    let hit = this.keys.indexOf(this.key);
    if (hit > -1 && hit === this.lignes[0]) {
      this.lignes.shift();
      if(this.started === false) {
        this.started = true;
        const startTime = Date.now();
        this.timerRef = setInterval(() => {
          this.counter = Date.now() - startTime;
        });
      }
    }
  }

}
