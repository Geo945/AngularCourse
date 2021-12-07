import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  // @ts-ignore
  @Input() text: string;
  // @ts-ignore
  @Input() color: string;
  @Output() btnClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {}

  onClick(){
    this.btnClick.emit();//imported Output and EventEmitter to output and event(or to emit an event)
    //why do this? because we don;t want to implement functionallity for this button here
    //because maybe I want to reuse the button with a different scope
    //we are emiting this btnClick and catching it in header.component.html with (btnCLick) which executes toggleAddTask()
  }

}
