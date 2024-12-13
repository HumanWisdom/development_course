import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { Platform } from '@angular/cdk/platform';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.page.html',
  styleUrls: ['./survey.page.scss'],
})
export class SurveyPage implements OnInit,OnDestroy {
  userName:string;
  feedbackList = [];
  selectedText:string = '';
  reason:string = '';
  selectedId=0;
  isSubmitted= false;
  private subscription!: Subscription;
  constructor(private commonService:CommonService,private platform:Platform) {
    this.subscription = this.commonService.surveySubs.subscribe((data:any) => {
      this.commonService.getSurveyList(data== null ? 1: data).subscribe(res=>{
        if(res){
          this.feedbackList = res;
          if(data != null){
            document.getElementById('test1').click();
          }
        }
      })
    });

  
   }

  ngOnInit() {
    this.userName = localStorage.getItem('name')
    //document.getElementById('test1').click();
  }

  closeModalevent(){

  }

  onSelectionChange(text: string,optionId:number): void {
    this.reason = '';
    this.selectedText = text;
    this.selectedId = optionId
  }

  submitSurvey(){
    let body = {
      "OptionID": this.selectedId ,
      "OptionStr": this.reason
    }
    this.commonService.AddSurveyRes(body).subscribe(res=>{
      if(res){
        this.isSubmitted =  true;
      }''
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

  GoToAppStore(){
      if (this.platform.ANDROID) {
        window.open("https://play.google.com/store/apps/details?id=io.humanwisdom.me&hl=en&gl=US");
      }else if(this.iOSMobile()){
        window.open("https://onelink.to/qsptex");
      }else{
        window.open("https://apps.apple.com/in/app/humanwisdom/id1588535567");
      }

      document.getElementById('btnSurveyDismiss').click();
    }
    ngOnDestroy(): void {
      if (this.subscription) {
        this.subscription.unsubscribe();
      }
    }
  }
