import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {isEmpty} from 'lodash';

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.scss']
})
export class StartScreenComponent implements OnInit {

  @Output()
  public nameSetted = new EventEmitter();

  public name: string;
  public localName: string;

  constructor() { }

  ngOnInit() {
    this.localName = localStorage.getItem('name');
    if (!isEmpty(this.localName)) {
      this.nameSetted.emit();
    }
  }

  public hasName(): boolean {
    return !isEmpty(this.localName);
  }

  public saveName() {
    localStorage.setItem('name', this.name);
    this.localName = this.name;
    this.nameSetted.emit();
  }
}
