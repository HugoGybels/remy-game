import {Component, EventEmitter, Input, Output} from '@angular/core';
import {StateEnum} from '../state.enum';

@Component({
  selector: 'app-end-screen',
  templateUrl: './end-screen.component.html',
  styleUrls: ['./end-screen.component.scss']
})
export class EndScreenComponent {

  @Input()
  public status: StateEnum;

  @Input()
  public time: number;

  @Input()
  public sent: boolean;

  @Output()
  public resrart = new EventEmitter();

  public stateEnum = StateEnum;
}
