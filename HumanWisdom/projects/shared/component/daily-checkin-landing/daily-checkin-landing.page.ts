import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { SharedService } from '../../services/shared.service';
import { Router } from '@angular/router';
import { LogEventService } from '../../services/log-event.service';


@Component({
  selector: 'app-daily-checkin-landing',
  templateUrl: './daily-checkin-landing.page.html',
  styleUrls: ['./daily-checkin-landing.page.scss'],
})
export class DailyCheckInLandingPage implements OnInit {
  dailyCheckInList: any = [];
  name :string = '';
  isAdults = false;
  constructor(public commonService:CommonService,public router:Router, 
    public logeventservice: LogEventService) { 
    this.initializeDailyCheckinList();
    this.name = localStorage.getItem("name");
    this.isAdults = SharedService.isAdultProgram();
  }

  ngOnInit() {
    this.logeventservice.logEvent('view_daily_checkin_landing');

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
    this.logeventservice.logEvent('click_emoji_'+ item.Expression.toString());
      SharedService.setDataInLocalStorage('dailyCheckIn',JSON.stringify(item));
      this.router.navigate([ SharedService.getUrlfromFeatureName('daily-checkin-save')])
   }

   goToHome(){
    this.router.navigate([SharedService.getDashboardUrls()]);
  }

  routetoBlog(){
  //  console.log(SharedService.getUrlfromFeatureName('blog-article?sId=66'))
  //  console.log(["/"+SharedService.getprogramName()+"/blog-article?sId=66"])

   this.router.navigateByUrl('/'+ SharedService.getprogramName() + '/blog-article?sId=66')
  }

  }

