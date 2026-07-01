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
    isAdults: boolean = true;
  

  constructor(private router: Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.enablecookiemodal.nativeElement.click();
      this.modalopened = true;
    }, 100);
        this.isAdults = SharedService.ProgramId === 9;
    
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
    localStorage.setItem('subscriberRedirectUrl', this.router.url);

    if (localStorage.getItem('isloggedin') === 'T') {
      this.router.navigate([`/${SharedService.getprogramName()}/subscription/try-free-and-subscribe`]);
    } else {
      SharedService.UrlToRedirect = `/${SharedService.getprogramName()}/subscription/try-free-and-subscribe`;
      this.router.navigate([`/${SharedService.getprogramName()}/onboarding/login`]);
    }
  }
}

