import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OnboardingService } from '../../../../../shared/services/onboarding.service';

@Component({
  selector: 'app-subscription-s09-v02',
  templateUrl: './subscription-s09-v02.page.html',
  styleUrls: ['./subscription-s09-v02.page.scss'],
})
export class SubscriptionS09V02Page implements OnInit {
  public myprograms = [];
  public notmyprograms = [];
  public openAssign = false;
  public activeKey = '';
  public activeName = '';
  public email = '';
  public message = '';
  public myself = 0;
  public startinvite = 'Send Invite'
  public currentid = '';
  public previd = '';

  constructor(private service: OnboardingService,
    private dc: ChangeDetectorRef,
    private router: Router) { }

  ngOnInit() {
    let userId = JSON.parse(localStorage.getItem("userId"))
    this.service.myprogram(userId)
      .subscribe(res => {
        
        this.myprograms = res.filter((d) => d['Active'] === 1)
        this.notmyprograms = res.filter((d) => d['Active'] === 0)
        this.dc.detectChanges()
      },
        (error: HttpErrorResponse) => {

        },
        () => {
          // this.router.navigate(["/onboarding/assign-key"])
        })
  }

  autorenew(key, val='', id='') {
    this.service.autorenew(key).subscribe((res) => {
if(res) {
  document.getElementById(val).style.display = 'block'
  document.getElementById('autorenew' + id).style.display = 'none'
}
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
        this.myprograms = res.filter((d) => d['Active'] === 1)
        this.notmyprograms = res.filter((d) => d['Active'] === 0)
        this.dc.detectChanges()
      },
        (error: HttpErrorResponse) => {

        },
        () => {
          // this.router.navigate(["/onboarding/assign-key"])
        })
  }

  getAssignClick(data) {
    this.currentid = data['ActKey'];
    this.email = ''
    this.message = ''
    this.myself = 0;
    this.startinvite = 'Send Invite';
    (<HTMLInputElement>document.getElementById(this.currentid + 'checkbox')).checked = false
    if(this.previd === ''){
      document.getElementById(this.currentid).style.display = 'block';
      this.previd = this.currentid;
    }else if(this.currentid === this.previd){
      document.getElementById(this.currentid).style.display = 'block';
    }else {
      document.getElementById(this.currentid).style.display = 'block';
      document.getElementById(this.previd).style.display = 'none';
      this.previd = this.currentid;
    }
  }

  donotautorenew(key, val='', id='', donot='') {
    if(donot === 'donot') {
      this.service.donotautorenew(key).subscribe((res) => {
        if(res) {
          document.getElementById(val).style.display = 'block'
          document.getElementById('donotautorenew' + id).style.display = 'none'
        }
      })
    }else if(val === 'compare') {
     return new Date(key['ExpDate']).getTime() > new Date().getTime()
    }else {
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
}
