import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OnboardingService } from '../../../../../shared/services/onboarding.service';
import { SharedService } from '../../../../../shared/services/shared.service';
import { Constant } from '../../../../../shared/services/constant';
import { Location } from '@angular/common';
import {
  Platform,
} from "@angular/cdk/platform";
@Component({
  selector: 'app-subscription-s09-v02',
  templateUrl: './subscription-s09-v02.page.html',
  styleUrls: ['./subscription-s09-v02.page.scss'],
})
export class SubscriptionS09V02Page implements OnInit {
  public myprograms = [];
  public notmyprograms = [];
  public notStarted = [];
  public openAssign = false;
  public activeKey = '';
  public activeName = '';
  public email = '';
  public message = '';
  public myself = 0;
  public startinvite = 'Send Invite'
  public currentid = '';
  public previd = '';
  public isActiveSubscription = false;
  public userId: any = '';
  constructor(private service: OnboardingService,
    private dc: ChangeDetectorRef,
    private router: Router,
    private location: Location,
    public platform: Platform) { }

  ngOnInit() {
    this.isActiveSubscription = SharedService.isSubscriber();
    this.getProgramData();
  }

  autorenew(key, val = '', id = '') {
    this.service.autorenew(key).subscribe((res) => {
      if (res) {
        this.getProgramData();
        if (val != '') {
          document.getElementById(val).style.display = 'block'
        }
        if (id != '') {
          document.getElementById('autorenew' + id).style.display = 'none'
        }
      }
    })
  }

  getProgramData() {
    this.userId = JSON.parse(localStorage.getItem("userId"))
    this.service.myprogram(this.userId)
      .subscribe(res => {
        if (this.platform.IOS) {
          this.myprograms = res.filter((d) => new Date(d['ExpDate']).getTime() > new Date().getTime() && !d['ExpDate']?.includes('1900'))
          this.notmyprograms = res.filter((d) => new Date(d['ExpDate']).getTime() < new Date().getTime() && !d['ExpDate']?.includes('1900'));
          this.notStarted = res.filter((d) => d['ExpDate']?.includes('1900'));
        }
        else {
          this.myprograms = res.filter((d) => d['Active'] === 1 && d['IOS'] == 0 && new Date(d['ExpDate']).getTime() > new Date().getTime() && !d['ExpDate']?.includes('1900'))
          this.notmyprograms = res.filter((d) => d['Active'] === 0 && d['IOS'] == 0 && new Date(d['ExpDate']).getTime() < new Date().getTime() && !d['ExpDate']?.includes('1900'))
          this.notStarted = res.filter((d) => d['ExpDate']?.includes('1900'));
        }

        this.dc.detectChanges()
      },
        (error: HttpErrorResponse) => {

        },
        () => {
          // this.router.navigate(["/onboarding/assign-key"])
        })
  }

  sendInvite(data) {
    let obj = {
      "ActKey": data['ActKey'],
      "Email": this.email,
      "Name": data['Name'],
      "Msg": this.message,
      "Myself": this.myself
    }

    this.service.sendinvite(obj)
      .subscribe(res => {

        alert('Successfully Invited');
        if (this.platform.IOS) {
          this.myprograms = res.filter((d) => d['Active'] === 1)
          this.notmyprograms = res.filter((d) => d['Active'] === 0);
        }
        else {
          this.myprograms = res.filter((d) => d['Active'] === 1 && d['IOS'] == 0)
          this.notmyprograms = res.filter((d) => d['Active'] === 0 && d['IOS'] == 0)
        }
        this.dc.detectChanges()
      },
        (error: HttpErrorResponse) => {

        },
        () => {
          // this.router.navigate(["/onboarding/assign-key"])
        })
  }

  getAssignClick(data) {
    this.message = ''
    this.myself = 0;
    this.startinvite = 'Send Invite';
    (<HTMLInputElement>document.getElementById(this.currentid + 'checkbox')).checked = false
    if (this.previd === '') {
      document.getElementById(this.currentid).style.display = 'block';
      this.previd = this.currentid;
    } else if (this.currentid === this.previd) {
      document.getElementById(this.currentid).style.display = 'block';
    } else {
      document.getElementById(this.currentid).style.display = 'block';
      document.getElementById(this.previd).style.display = 'none';
      this.previd = this.currentid;
    }
  }

  donotautorenew(key, val = '', id = '', donot = '') {
    if (donot === 'donot') {
      this.service.donotautorenew(key).subscribe((res) => {
        if (res) {
          this.getProgramData();
          document.getElementById(val).style.display = 'block'
          document.getElementById('donotautorenew' + id).style.display = 'none'
        }
      })
    }

    //else if (donot ='autorenew'){
    //   this.autorenew(key,val,id);
    // }
    else if (val === 'compare') {
      return new Date(key['ExpDate']).getTime() > new Date().getTime()
    } else {
      return new Date(key['ExpDate']).getTime() > new Date().getTime()
    }
  }

  cancelAsign() {
    this.openAssign = false;
  }

  submitAssignKey(data) {
    this.sendInvite(data)
  }

  emailKeyup(event) {
    this.email = event.target.value;
  }

  messageKeyup(event) {
    this.message = event.target.value
  }

  myselfEvent(event) {
    this.myself = event.checked ? 1 : 0
    this.startinvite = event.checked ? 'Start Program' : 'Send Invite'
  }

  RouteToManageSubscription(item) {
    if(item.BoughtBy == this.userId){
      if (item.canceled == 0) {
        if ((new Date(item['ExpDate']).getTime() > new Date().getTime()) || item.Active == 1) {
          SharedService.setDataInLocalStorage(Constant.ManageSubscriptionData, JSON.stringify(item));
          this.router.navigate(["/myprogram/manage-subscription"]);
        }
      }
    }
  }

  goBack() {
    this.location.back();
  }

  buyAgain(item) {
    SharedService.setDataInLocalStorage('BuyAgain', JSON.stringify(item));
    this.router.navigate(["/onboarding/add-to-cart"]);

  }

  ReviveSubscription(item) {
    this.service.ReviveSubscription(item.ActKey).subscribe(res => {
      if (res) {
        this.getProgramData();
      }
    })
  }

  getGifteeDetails(item) {
    if (item.MySelf == '0' && item.BoughtBy == this.userId) {
      if (item.ConsumerEmail == '' || item.ConsumerEmail == null) {
        return 'Giftee has deleted their data';
      }
      if (item.ConsumedName == '' || item.ConsumedName == null) {
        return item.ConsumerEmail;
      } else {
        return item.ConsumedName
      }
    }
  else if (item.ConsumedName == '' || item.ConsumedName == null) {
      return item.ConsumerEmail;
    } else {
      return item.ConsumedName
    }
  }


  getFontSize(item){
    const font='font-size: 12px';
    if (item.MySelf == '0' && item.BoughtBy == this.userId) {
      if (item.ConsumerEmail == '' || item.ConsumerEmail == null) {
        return font;
      }
      if (item.ConsumedName == '' || item.ConsumedName == null) {
        return font;
      } else {
        return 'font-size: 15px';
      }
    }
    if (item.ConsumedName == '' || item.ConsumedName == null) {
      return font;
    } else {
      return 'font-size: 15px';
    }
  }

}
