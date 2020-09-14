import { OnInit, Component, HostListener } from "@angular/core";
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  public key: string;
  public lignes: number[] = [];

  private readonly nbLignes = 100;

  public ngOnInit(): void {
    for (let i = 0; i < this.nbLignes; i++) {
      this.lignes.push(Math.floor(Math.random() * 4) + 1 );
    }
  }

  @HostListener("document:keypress", ["$event"])
  handleKeyboardEvent(event: KeyboardEvent) {
    this.key = event.key;
    let index = 0;
    if (this.key === 'u') {
      index = 1;
    } else if (this.key === 'i') {
      index = 2;
    } else if (this.key === 'o') {
      index = 3;
    } else if (this.key === 'p') {
      index = 4;
    }
    
  }

}
