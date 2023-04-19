import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @ViewChild('enablecookiemodal') enablecookiemodal: ElementRef;

  @Input()
  footerbuttonText = 'close'

  @Input()
  content = '';

  @Input()
  title = '';

  @Output()
  closeEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.enablecookiemodal.nativeElement.click();
    }, 100)
  }

  close() {
    this.closeEvent.emit(this.footerbuttonText);
  }

}

