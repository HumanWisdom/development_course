import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { SharedService } from '../../services/shared.service';
import { Router } from '@angular/router';
import { NavigationService } from  '../../services/navigation.service';
import { Location } from '@angular/common';
import { LogEventService } from '../../services/log-event.service';

@Component({
  selector: 'app-note-save',
  templateUrl: './daily-check-note-save.page.html',
  styleUrls: ['./daily-check-note-save.page.scss'],
})
export class DailyCheckinNoteSavePage implements OnInit {
  rowData:any;
  @ViewChild('saveJournal') saveJournal: any;
  checkInDescription:string= '';
  t = new Date();
  minDate:any;
  enableAlert:boolean =false;
  isLoggedIn:boolean;
  isAdults:boolean = false;
  constructor(public commonService:CommonService,public router:Router,public navigationService:NavigationService,public location:Location,
    public logeventservice: LogEventService
  ) {
    this.rowData = this.initializeDailyCheckinList();
    this.t = new Date();
    this.minDate = this.t.getFullYear() + "-" + this.addZero(this.t.getMonth() + 1) + "-" + this.addZero(this.t.getDate());
    this.isLoggedIn = localStorage.getItem("isloggedin") == 'T';
    this.isAdults = SharedService.isAdultProgram();
  }

  ngOnInit() {
    this.logeventservice.logEvent('View_daily_checkin_save');

    this.rowData=JSON.parse(SharedService.getDataFromLocalStorage('dailyCheckIn'))
  }
  initializeDailyCheckinList(){
    return { RowId:"", Expression:"",ImgPath:"",SearchTerm:"",Description:""}
    }

    SaveJournal(){
      this.logeventservice.logEvent('click_daily_checkin_save '+ this.rowData.Expression);

      if(this.isLoggedIn){
        let userId = JSON.parse(localStorage.getItem("userId"));
        var obj = {
         "JournalId":0,
         "JDate":this.minDate,
         "Notes":this.checkInDescription,
         "UserId":userId,
         "CheckinID":this.rowData.RowID,
         "Title":'Daily check-in'
        };
        this.commonService.submitJournal(obj).subscribe(res=>{
          if(res){
              this.saveJournal.nativeElement.click();
              setTimeout(() => {
                this.findOutMore();
              }, 3000)
          }
        })
      }else{
        this.enableAlert = true;
      }

    }

    addZero(i) {
      if (i < 10) {
        i = "0" + i;
      }
      return i;
    }

    goToHome(){
      this.logeventservice.logEvent('click_daily_checkin_Save_home');

      this.router.navigate([SharedService.getDashboardUrls()]);
    }

    goBack() {
      this.logeventservice.logEvent('click_daily_checkin_Save_back');

      var url = this.navigationService.navigateToBackLink();
      if (url == null) {
        this.location.back();
      }else{
        this.router.navigate([url]);
      }
    }

    findOutMore(){
      

      if(this.rowData.Expression=="Tired")
        this.router.navigate([SharedService.getUrlfromFeatureName(`/pathway/develop-a-calm-mind`)]);
      else if(this.rowData.Expression=="Overwhelmed")
        this.router.navigate([SharedService.getUrlfromFeatureName(`/feel-better-now/stress`)]);
      else if(this.rowData.Expression=="Embarrassed")
        this.router.navigate([SharedService.getUrlfromFeatureName(`/audiopage/~podcasts~77.mp3/77/T/Feeling-embarassed`)]);
      else if(this.rowData.Expression=="Disappointed")
        this.router.navigate([SharedService.getUrlfromFeatureName(`/audiopage/~podcasts~76.mp3/76/T/Feeling-Disappointed`)]);
      else if(this.rowData.SearchTerm)
        this.router.navigate([SharedService.getUrlfromFeatureName(`/site-search/${this.rowData.SearchTerm}`)]);
      else
        this.goToHome();
    }

    getAlertcloseEvent(event) {
      if(event=='ok'){
        this.enableAlert = false;
        this.router.navigate([SharedService.getUrlfromFeatureName('/subscription/start-your-free-trial') ]);
      }else{
        this.enableAlert = false;
      }
    }
}
