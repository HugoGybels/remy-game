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
  public ligne: Ligne;
  private touches: Touche[];

  public ngOnInit(): void {
    this.ligne = this.createLigne(1);
  }

  @HostListener("document:keypress", ["$event"])
  handleKeyboardEvent(event: KeyboardEvent) {
    this.key = event.key;
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
