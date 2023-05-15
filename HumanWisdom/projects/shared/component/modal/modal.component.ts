import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  host: {
    '(document:click)': 'emitFn($event)',
  },
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
  cancelText = 'Cancel'

  @Input()
  enableCancel = false

  @Input()
  modalid = ''

  modalopened = false;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.enablecookiemodal.nativeElement.click();
      this.modalopened = true;
    }, 100);
  }

  close(text) {
    this.modalopened = false;
    this.closeEvent.emit(text);
  }

  emitFn(event) {
    if (this.modalopened && !this.enablecookiemodal.nativeElement.contains(event.target)) {
      setTimeout(() => {
        this.closeEvent.emit('');
      })
    }
  }
}

