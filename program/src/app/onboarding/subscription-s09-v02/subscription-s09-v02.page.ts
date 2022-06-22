import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OnboardingService } from '../onboarding.service';

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
        if(this.myprograms.length !== 0) {
          this.myprograms.forEach((r) => {
            if(r['AutoRenew'] === 1) {
              this.autorenew(r['ActKey'])
            }
          })
        }
  }

  autorenew(key) {
    this.service.donotautorenew(key).subscribe((res) => {
       if(res) return true;
       else return false
    })
  }

  sendInvite(data) {
    let obj = {
      ActKey: data['ActKey'],
      Email: data['Email'],
      Name: data['Name'],
      Msg: data['Msg'],
      MySelf: data['MySelf'],
    }

    this.service.sendinvite(obj)
      .subscribe(res => {
        
        alert('Successfully Invited');
      },
        (error: HttpErrorResponse) => {

        },
        () => {
          // this.router.navigate(["/onboarding/assign-key"])
        })
  }

  getAssignClick(value, name) {
    this.openAssign = true;
    this.activeKey = value
    this.activeName = name
  }

  donotautorenew(key, val='') {
    if(val === '') {
      this.service.donotautorenew(key).subscribe((res) => {

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

  submitAssignKey() {
    this.service.assignKey({
      "ActKey": this.activeKey,
      "Email": this.email,
      "Name": this.activeName,
      "Msg": this.message,
      "Myself": this.myself
    })
      .subscribe(res => {
        

      })
  }

  emailKeyup(event) {
    this.email = event.target.value;
  }

  messageKeyup(event) {
    this.message = event.target.value
  }
 
  myselfEvent(event) {
    this.myself = event.checked ? 1 : 0
  }
}
