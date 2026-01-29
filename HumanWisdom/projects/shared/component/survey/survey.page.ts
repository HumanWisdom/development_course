import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { Platform } from '@angular/cdk/platform';
import { Subscription } from 'rxjs';
import { ProgramType } from '../../models/program-model';

import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.page.html',
  styleUrls: ['./survey.page.scss'],
})
export class SurveyPage implements OnDestroy {
  userName: string;
  feedbackList = [];
  selectedText: string = '';
  reason: string = '';
  selectedId = 0;
  isSubmitted = false;
  isPaymentSurvey: boolean = false;
  showModal: boolean = false;
  isAdults = true;
  private subscription!: Subscription;
  constructor(private commonService: CommonService, private platform: Platform) {
    this.userName =localStorage.getItem('name');
    this.subscription = this.commonService.surveySubs.subscribe((data: any) => {
      this.commonService.getSurveyList(data == null ? '1' : data).subscribe(res => {
        if (res) {
          if (data == '2') {
            this.isPaymentSurvey = true;
          } else {
            this.isPaymentSurvey = false;
          }
          this.feedbackList = res;
          if (data != null) {
            this.showModal = true;
            document.getElementById('test1').click();
          }
        }
      })
    });
 if (SharedService.ProgramId == ProgramType.Adults) {
      this.isAdults = true;
    } else {
      this.isAdults = false;
    }

  }


  closeModalevent() {

  }

  getUserName(){
    return localStorage.getItem('name');
  }

  onCloseClick() {
    this.closeModal();
  }

  onBackdropClick(event: MouseEvent): void {
    // Check if the click is directly on the modal backdrop (not on modal content)
    const target = event.target as HTMLElement;
    
    // Check if click is on the modal backdrop itself or empty space
    // Make sure we're not clicking on any modal content
    const clickedOnModalContent = target.closest('.lab-modal-body_new') || 
                                   target.closest('.lab-modal-body') || 
                                   target.closest('.col-lg-4') ||
                                   target.closest('.col-md-6') ||
                                   target.closest('.col-sm-6') ||
                                   target.closest('.col-xs-12');
    
    // If we didn't click on modal content, close the modal
    if (!clickedOnModalContent) {
      this.closeModal();
    }
  }

  closeModal(): void {
    this.showModal = false;
    this.isSubmitted = false;
    // Trigger the hidden dismiss button to close the modal
    const dismissBtn = document.getElementById('btnSurveyDismiss');
    if (dismissBtn) {
      dismissBtn.click();
    }
    if (!this.isPaymentSurvey) {
      this.commonService.SkipFeedBkSurvey().subscribe(res => {
        //
      });
    }
  }

  onSelectionChange(text: string, optionId: number): void {
    this.reason = '';
    this.selectedText = text;
    this.selectedId = optionId
  }

  submitSurvey() {
    let body = {
      "OptionID": this.selectedId,
      "OptionStr": this.reason
    }
    this.commonService.AddSurveyRes(body).subscribe(res => {
      if (res) {
        this.isSubmitted = true;
      } ''
    })
  }


  iOSMobile() {
    return [
      'iPhone Simulator',
      'iPad',
      'iPhone',
      'iPod'
    ].includes(navigator.platform)
  }

  GoToAppStore() {
    this.closeModal();
  }


  clickbanner(url = '') {
    if (this.isNotSafari()) {
      //window.open("https://play.google.com/store/apps/details?id=io.humanwisdom.me&hl=en&gl=US");
      window.open("https://play.google.com/store/apps/details?id=io.humanwisdom.me");
    }
    else if (this.platform.IOS || this.platform.SAFARI) {
      window.open("https://apps.apple.com/in/app/humanwisdom/id1588535567");
    } else if (this.platform.ANDROID) {
      window.open("https://play.google.com/store/apps/details?id=io.humanwisdom.me");
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  isNotSafari(): boolean {
    const userAgent = window.navigator.userAgent.toLowerCase();
    // Check for Safari
    const isSafari =
      userAgent.includes('safari') &&
      !userAgent.includes('chrome') &&
      !userAgent.includes('android');
    // Return true if not Safari
    return !isSafari;
  }
}
