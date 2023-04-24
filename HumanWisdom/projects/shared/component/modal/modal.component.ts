import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @ViewChild('enablecookiemodal') enablecookiemodal: ElementRef;

  @Input()
  okText = 'close'

  @Input()
  content = '';

  @Input()
  title = '';

  @Output()
  closeEvent = new EventEmitter<string>();

  @Input()
  cancelText = 'cancel'

  @Input()
  enableCancel = false

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.enablecookiemodal.nativeElement.click();
    }, 100)
  }

  close(text) {
    this.closeEvent.emit(text);
  }

}

