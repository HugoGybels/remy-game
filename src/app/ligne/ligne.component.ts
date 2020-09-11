import { Component, OnInit, Input } from '@angular/core';
import { Ligne } from '../model/ligne.model';

@Component({
  selector: 'app-ligne',
  templateUrl: './ligne.component.html',
  styleUrls: ['./ligne.component.scss']
})
export class LigneComponent implements OnInit {

  @Input()
  public ligne: Ligne;

  constructor() { }

  ngOnInit() {
    console.log(this.ligne);
  }

}