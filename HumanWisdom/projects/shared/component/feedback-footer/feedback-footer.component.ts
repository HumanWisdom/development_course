import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-feedback-footer',
  templateUrl: './feedback-footer.component.html',
  styleUrls: ['./feedback-footer.component.scss'],
})
export class FeedbackFooterComponent {

  @Output() readonly nextEmitter = new EventEmitter<string>();
  @Output() readonly previousEmitter = new EventEmitter<string>();
  @Input() bg: string;

  next() {
    this.nextEmitter.emit();
  }

  previous() {
    this.previousEmitter.emit();
  }
}
