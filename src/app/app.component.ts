import { OnInit, Component, HostListener } from "@angular/core";
import { Touche } from "./model/touche.model";
import { Ligne } from "./model/ligne.model";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  public key: string;
  public lignes: Ligne[] = [];

  public ngOnInit(): void {
    this.lignes.push(this.createLigne(1));
    this.lignes.push(this.createLigne(2));
    this.lignes.push(this.createLigne(4));
    this.lignes.push(this.createLigne(3));

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

  private createLigne(idLigne: number): Ligne {
    return new Ligne({
      id: idLigne,
      touches: [
        new Touche({ id: 1 * idLigne, selected: idLigne % 4 === 1 }),
        new Touche({ id: 2 * idLigne, selected: idLigne % 4 === 2 }),
        new Touche({ id: 3 * idLigne, selected: idLigne % 4 === 3 }),
        new Touche({ id: 4 * idLigne, selected: idLigne % 4 === 4 })
      ]
    });
  }
}
