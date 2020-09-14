import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ligne',
  templateUrl: './ligne.component.html',
  styleUrls: ['./ligne.component.scss']
})
export class LigneComponent implements OnInit {

  @Input()
  public number: number;

  constructor() { }

  ngOnInit() {
  }

  public getColor() {
    return {'background-color': '#' + Math.floor(Math.random()*16777215).toString(16)};
  }

}