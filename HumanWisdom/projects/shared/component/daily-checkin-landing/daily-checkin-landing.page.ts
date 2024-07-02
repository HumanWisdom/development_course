import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { SharedService } from '../../services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-daily-checkin-landing',
  templateUrl: './daily-checkin-landing.page.html',
  styleUrls: ['./daily-checkin-landing.page.scss'],
})
export class DailyCheckInLandingPage implements OnInit {
  dailyCheckInList: any = [];
  name :string = '';
  constructor(public commonService:CommonService,public router:Router) { 
    this.initializeDailyCheckinList();
    this.name = localStorage.getItem("name");
  }

  ngOnInit() {
    this.commonService.getDailyCheckins().subscribe(res=>{
      if(res){
        this.dailyCheckInList=res;
      }
    })
  }

  initializeDailyCheckinList(){
   return [{ RowId:"", Expression:"",ImgPath:"",SearchTerm:"",Description:""}]
   }

   dailyCheckInRowClick(item){
      SharedService.setDataInLocalStorage('dailyCheckIn',JSON.stringify(item));
      this.router.navigate([ SharedService.getUrlfromFeatureName('daily-checkin-save')])
   }

   goToHome(){
    this.router.navigate([SharedService.getDashboardUrls()]);
  }

  }

