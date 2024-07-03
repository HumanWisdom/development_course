import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { SharedService } from '../../services/shared.service';
import { Router } from '@angular/router';
import { NavigationService } from  '../../services/navigation.service';
import { Location } from '@angular/common';
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
  constructor(public commonService:CommonService,public router:Router,public navigationService:NavigationService,public location:Location) { 
    this.rowData = this.initializeDailyCheckinList();
    this.t = new Date();
    this.minDate = this.t.getFullYear() + "-" + this.addZero(this.t.getMonth() + 1) + "-" + this.addZero(this.t.getDate());
    this.isLoggedIn = localStorage.getItem("isloggedin") == 'T';
    this.isAdults = SharedService.isAdultProgram();
  }

  ngOnInit() {
    this.rowData=JSON.parse(SharedService.getDataFromLocalStorage('dailyCheckIn'))
  }
  initializeDailyCheckinList(){
    return { RowId:"", Expression:"",ImgPath:"",SearchTerm:"",Description:""}
    }

    SaveJournal(){
      if(this.isLoggedIn){
        let userId = JSON.parse(localStorage.getItem("userId"));
        var obj = {
         "JournalId":0,
         "JDate":this.minDate,
         "Notes":this.checkInDescription,
         "UserId":userId,
         "CheckinID":this.rowData.RowID,
         "Title":'Daily Checkin'
        };
        this.commonService.submitJournal(obj).subscribe(res=>{
          if(res){
              this.saveJournal.nativeElement.click();
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
      this.router.navigate([SharedService.getDashboardUrls()]);
    }

    goBack() {
      var url = this.navigationService.navigateToBackLink();
      if (url == null) {
        this.location.back();
      }else{
        this.router.navigate([url]);
      }
    }

    findOutMore(){
      this.router.navigate([SharedService.getUrlfromFeatureName('/search')]);
    }
    getAlertcloseEvent(event) {
      if(event=='ok'){
        this.enableAlert = false;
        this.router.navigate([SharedService.getUrlfromFeatureName('/subscription/try-free-and-subscribe') ]);
      }else{
        this.enableAlert = false;
      }
    }
}
