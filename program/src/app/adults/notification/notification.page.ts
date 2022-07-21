import { Component, OnInit } from '@angular/core';
import { AdultsService } from '../adults.service';
import {NotificationModel} from '../../adults/notification/notification-model';
import { OnboardingService } from 'src/app/onboarding/onboarding.service';
import { Router } from '@angular/router';
@Component({
  selector: 'HumanWisdom-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {

  
  notificationModel: NotificationModel[];
  olderNotitification: NotificationModel[];
  MONTH_NAMES = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  constructor(private adultService:AdultsService,
   public  router:Router) { }

  ngOnInit() {
    this.notificationModel= [];
    this.olderNotitification=[];
    this.getNotificationList();
  }

  getNotificationList(){
   this.adultService.getNotificationList().subscribe(res=>{
    if(res){
      this.notificationModel=res.slice(0, 10) as NotificationModel[];
      for(var i=0;i<this.notificationModel.length;i++){
     this.notificationModel[i].Time=this.time_ago(this.notificationModel[i].UpdatedDate);
    }
    res.slice(11,res.length).map((item, i) => {
      this.olderNotitification.push(item);
    });
    for(var i=0;i<this.olderNotitification.length;i++){
      this.olderNotitification[i].Time=this.time_ago(this.olderNotitification[i].UpdatedDate);
     }
    }
  });
  }

 


  MarkAsRead(NotificationId){
    this.adultService.MarkNotificationAsRead(NotificationId).subscribe(res=>{
      if(res){
       // this.getNotificationList();
      }
    })
  }

   time_ago(dateParam) {
    if (!dateParam) {
      return null;
    }
  
    const date = typeof dateParam === 'object' ? dateParam : new Date(dateParam);
    const DAY_IN_MS = 86400000; // 24 * 60 * 60 * 1000
    const today = new Date();
    const yesterday = new Date(today.getTime() - DAY_IN_MS);
    const seconds = Math.round((today.getTime() - date) / 1000);
    const minutes = Math.round(seconds / 60);
    const isToday = today.toDateString() === date.toDateString();
    const isYesterday = yesterday.toDateString() === date.toDateString();
    const isThisYear = today.getFullYear() === date.getFullYear();
  
  
    if (seconds < 5) {
      return 'now';
    } else if (seconds < 60) {
      return `${ seconds } seconds ago`;
    } else if (seconds < 90) {
      return 'about a minute ago';
    } else if (minutes < 60) {
      return `${ minutes } minutes ago`;
    } else if (isToday) {
      return this.getFormattedDate(date, 'Today'); // Today at 10:20
    } else if (isYesterday) {
      return this.getFormattedDate(date, 'Yesterday'); // Yesterday at 10:20
    } else if (isThisYear) {
      return this.getFormattedDate(date, false, true); // 10. January at 10:20
    }
  
    return this.getFormattedDate(date); // 10. January 2017. at 10:20
  }
  
   getFormattedDate(date, prefomattedDate?, hideYear?) {
    const day = date.getDate();
    const month = this.MONTH_NAMES[date.getMonth()];
    const year = date.getFullYear();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';
    hours %= 12;
    hours = hours || 12;    
    if (minutes < 10) {
      // Adding leading zero to minutes
      minutes = `0${ minutes }`;
    }
  
    if (prefomattedDate) {
      // Today at 10:20
      // Yesterday at 10:20
      return `${ prefomattedDate }  ${ hours }:${ minutes }`+ampm;
    }
  
    if (hideYear) {
      // 10. January at 10:20
      return `${ day }. ${ month }  ${ hours }:${ minutes }`+ampm;
    }
  
    // 10. January 2017. at 10:20
    return `${ day }. ${ month } ${ year }.  ${ hours }:${ minutes }`+ampm;
  }

  NavigateToUrl(Url,NotificationId){
    this.MarkAsRead(NotificationId);
    this.router.navigateByUrl(Url);
  }

  getClass(item){
   if(item.IsRead==0){
    return 'nrow_active row';
   }
    return 'nrow_inactive row';
  }
}
