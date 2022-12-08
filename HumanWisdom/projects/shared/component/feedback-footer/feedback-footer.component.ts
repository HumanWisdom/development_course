import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-feedback-footer',
  templateUrl: './feedback-footer.component.html',
  styleUrls: ['./feedback-footer.component.scss'],
})
export class FeedbackFooterComponent implements OnInit {

  @Output() nextEmitter = new EventEmitter<string>();
  @Output() previousEmitter = new EventEmitter<string>();
  @Input() bg: string;


  constructor() { }

  ngOnInit() {}

  next(){
    this.nextEmitter.emit()

  }

  previous(){
    this.previousEmitter.emit()

  }


}
