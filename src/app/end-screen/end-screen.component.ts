import { Component, OnInit, Input } from '@angular/core';
import { StateEnum } from './../state.enum';

@Component({
  selector: 'app-end-screen',
  templateUrl: './end-screen.component.html',
  styleUrls: ['./end-screen.component.scss']
})
export class EndScreenComponent implements OnInit {

  @Input()
  public status: StateEnum;

  @Input()
  public time: number;

  constructor() { }

  ngOnInit() {
  }

}