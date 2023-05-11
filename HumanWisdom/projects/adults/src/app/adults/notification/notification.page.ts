import { Component, OnInit } from '@angular/core';
import { AdultsService } from '../adults.service';
import { NotificationModel } from '../../adults/notification/notification-model';
import { OnboardingService } from 'src/app/onboarding/onboarding.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'HumanWisdom-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {
  notificationModel: NotificationModel[];
  olderNotitification: NotificationModel[];
  MONTH_NAMES = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  constructor(
    private adultService: AdultsService,
    private datePipe: DatePipe,
    public router: Router
  ) {}

  ngOnInit() {
    this.notificationModel = [];
    this.olderNotitification = [];
    this.getNotificationList();
  }

  convertUTCToIST(date: any) {
    var dateUTC: any = new Date(date);
    dateUTC = dateUTC.getTime();
    var dateIST = new Date(dateUTC);
    dateIST.setHours(dateIST.getHours() + 5);
    dateIST.setMinutes(dateIST.getMinutes() + 30);
    let selectedDateString = this.datePipe.transform(
      dateIST,
      'M/d/yy, h:mm:ss a'
    );
    return selectedDateString;
  }

  getNotificationList() {
    this.adultService.getNotificationList().subscribe((res) => {
      if (res) {
        this.notificationModel = res.slice(0, 10) as NotificationModel[];
        for (var i = 0; i < this.notificationModel.length; i++) {
          let updatedDate = this.convertUTCToIST(
            this.notificationModel[i].UpdatedDate
          );
          this.notificationModel[i].Time = this.time_ago(updatedDate);
        }
        res.slice(11, res.length).map((item, i) => {
          this.olderNotitification.push(item);
        });
        for (var i = 0; i < this.olderNotitification.length; i++) {
          this.olderNotitification[i].Time = this.time_ago(
            this.olderNotitification[i].UpdatedDate
          );
        }
      }
    });
  }

  MarkAsRead(NotificationId) {
    this.adultService
      .MarkNotificationAsRead(NotificationId)
      .subscribe((res) => {
        if (res) {
          // this.getNotificationList();
        }
      });
  }

  time_ago(dateParam) {
    if (!dateParam) {
      return null;
    }

    const date =
      typeof dateParam === 'object' ? dateParam : new Date(dateParam);
    const DAY_IN_MS = 86400000; // 24 * 60 * 60 * 1000
    const today = new Date();
    const yesterday = new Date(today.getTime() - DAY_IN_MS);
    const seconds = Math.round((today.getTime() - date) / 1000);
    const minutes = Math.round(seconds / 60);
    const hours = Math.round(minutes / 60);
    const isToday = today.toDateString() === date.toDateString();
    const isYesterday = yesterday.toDateString() === date.toDateString();
    const isThisYear = today.getFullYear() === date.getFullYear();
    const months =
      today.getMonth() -
      date.getMonth() +
      12 * (today.getFullYear() - date.getFullYear());
    // if (seconds < 5) {
    //   return 'now';
    // } else if (seconds < 60) {
    //   return `${ seconds } seconds ago`;
    // } else if (seconds < 90) {
    //   return 'about a minute ago';
    //}

    if (isToday) {
      if(minutes<=1){
        return '1m ago';
      }
      if (minutes < 30) {
        return `${minutes}m ago`;
      }
      if (minutes > 30 && minutes < 60) {
        return `1h ago`;
      }
      if (hours >= 1 || hours <= 24) {
        return `${hours}h ago`;
      }
      //return this.getFormattedDate(date, 'Today'); // Today at 10:20
    } else if (isYesterday) {
      return 'Yesterday' // Yesterday at 10:20
    } else if (isThisYear) {
      if (months <= 1) {
        return `${date.getDate()}  ${this.MONTH_NAMES[date.getMonth()]}`;
      } else if (months > 1) {
        return `${this.MONTH_NAMES[date.getMonth()]}`;
      }
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
      minutes = `0${minutes}`;
    }

    if (prefomattedDate) {
      // Today at 10:20
      // Yesterday at 10:20
      return `${prefomattedDate}  ${hours}:${minutes}` + ampm;
    }

    if (hideYear) {
      // 10. January at 10:20
      return `${day} ${month?.substring(0, 3)}`;
      // //${ hours }:${ minutes }`+ampm;
    }

    // 10. January 2017. at 10:20
    return `${month} ${year}`;
  }

  NavigateToUrl(Url, NotificationId) {
    this.MarkAsRead(NotificationId);
    this.router.navigateByUrl(Url);
  }

  getClass(item) {
    if (item.IsRead == 0) {
      return 'nrow_active row';
    }
    return 'nrow_inactive row';
  }
}
