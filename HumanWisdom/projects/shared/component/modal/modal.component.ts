import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../../services/shared.service';  



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

  @Input()
  isFreeTrialEnable = false;

  constructor(private router: Router) { }

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

  routeTofreetrial(){
    this.closeEvent.emit(''); 
      this.router.navigate([SharedService.getUrlfromFeatureName('subscription/start-your-free-trial')]);
    
    
  }
}

