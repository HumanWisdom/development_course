import { Platform } from '@angular/cdk/platform';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogEventService } from "../../../shared/services/log-event.service";
import { OnboardingService } from '../../../shared/services/onboarding.service';
import { SharedService } from '../../../shared/services/shared.service';
import { ProgramType } from '../../../shared/models/program-model';
import { Location } from '@angular/common';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  loginResponse = JSON.parse(localStorage.getItem("loginResponse"))
  overallPercentage = JSON.parse(localStorage.getItem("overallPercentage"))
  actKeys = this.loginResponse.ActKeys
  myPrograms = []
  weekDays = this.loginResponse.WkDays.split(",")
  sun = false
  mon = false
  tue = false
  wed = false
  thu = false
  fri = false
  sat = false
  email;
  direction = "up";
  paymentDetail;
  RoleID = 0
  url = ''
  userData: any;
  enablepayment = true;
  isPartner = false;
  isDeleted = false;
  enableSuccessAlert = false;
  partnerOption = localStorage.getItem('PartnerOption');
  score = 0;
  isSubscribe = false;
  enableAlert = false;
  contentText = 'Are you sure you want to delete your data?';
  isCancel = true;
  isAdults: boolean = true;

  constructor(private router: Router, private Onboardingservice: OnboardingService,
    public platform: Platform, public logeventservice: LogEventService,private location:Location) {
    let userId = JSON.parse(localStorage.getItem("userId"))
    this.RoleID = JSON.parse(localStorage.getItem("RoleID"))
    this.Onboardingservice.getpaymentdetail(userId).subscribe((res) => {
      if (res) {
        this.paymentDetail = res[0]
      }
    })
    this.isPartner = localStorage.getItem('IsPartner') == '1';
    if (this.platform.IOS || this.iOS()) {
      this.enablepayment = false;
    }
    this.score = (+this.loginResponse.hwScore) - (+this.loginResponse.hwPrevScore);

    if (this.score > 0 || this.score == 0) {
      this.direction = "up";
    } else {
      this.score = -(this.score);
      this.direction = "down";
    }
    if (SharedService.ProgramId == ProgramType.Adults) {
      this.isAdults = true;
    } else {
      this.isAdults = false;
    }
  }

  ngOnInit() {
    let userId = JSON.parse(localStorage.getItem("userId"))
    this.email = localStorage.getItem("email")
    this.myPrograms = this.actKeys.filter(x => x.MySelf == "1")
    if (this.weekDays.includes("Sunday"))
      this.sun = true
    if (this.weekDays.includes("Monday"))
      this.mon = true
    if (this.weekDays.includes("Tuesday"))
      this.tue = true
    if (this.weekDays.includes("Wednesday"))
      this.wed = true
    if (this.weekDays.includes("Thursday"))
      this.thu = true
    if (this.weekDays.includes("Friday"))
      this.fri = true
    if (this.weekDays.includes("Saturday"))
      this.sat = true

    setTimeout(() => {
      this.Onboardingservice.getuser(userId).subscribe((res) => {
        let userdetail = res[0];
        // this.url = userdetail['UserImagePath'].split('\\')[1] + '?' + (new Date()).getTime();
        if(userdetail['UserImagePath']!="")
        {
          this.url = userdetail['UserImagePath'].replace('\\', '/') + '?' + (new Date()).getTime();
        }
        this.userData = res[0];
      })
    }, 1000)
    let nameupdate = localStorage.getItem(
      "nameupdate"
    );
    if (nameupdate) {
      this.loginResponse['Name'] = nameupdate
    }

    let sub: any = localStorage.getItem('Subscriber');
    if (sub === '0') {
      this.isSubscribe = false;
    } else {
      this.isSubscribe = true;
    }
  }

  handleReferFriendClick() {
    const url = this.isAdults ? '/adults/refer-friend' : '/teenagers/refer-friend';
    this.router.navigate([url]);
  }

  survey() {
    this.router.navigate(['/' + SharedService.getprogramName() + "/wisdom-survey"], { state: { 'isUseCloseButton': true } });
  }

  getAffiliate() {
    if (this.partnerOption == 'ReceiveIncome') {
      this.router.navigate(['adults/partnership-report/income-activity']);
    } else {
      this.router.navigate(['/adults/partnership-report/tree-plantation-report']);
    }
    // let userId = JSON.parse(localStorage.getItem("userId"))
    // window.location.href = `https://humanwisdom.me/Admin/#/frameworks/affiliate-s01-a/${userId}`;
  }

  deleteMyData() {
    this.contentText = 'Are you sure you want to delete your data? Your entire account, including content and purchases will be deleted.';
    this.isCancel = true;
    this.enableAlert = true;
  }

    back(){
      let url = SharedService.getDashboardUrls();
      if(url){
        this.router.navigate([url]);
      }else{
        this.location.back();
      }
    }



  Logevent(route, params, evtName) {
    this.logeventservice.logEvent(evtName);
    if (route.includes('dashboard')) {
      if (this.isAdults) {
        this.router.navigate(['/' + SharedService.getprogramName() + route])
      } else {
        this.router.navigate(['/teenagers/teenager-dashboard'])
      }
    } else {
      this.router.navigate(['/' + SharedService.getprogramName() + route])
    }

  }

  getAlertcloseEvent(event) {
    this.enableAlert = false;
    let isSubscribe
    var retVal;
    let sub: any = localStorage.getItem('Subscriber');
    if (sub === '0') {
      isSubscribe = true;
    } else {
      isSubscribe = false;
    }
    if (event === 'ok' && this.contentText === 'Are you sure you want to delete your data? Your entire account, including content and purchases will be deleted.') {
      this.Onboardingservice.deleteMyData({
        UserID: localStorage.getItem("userId").toString(),
        Email: localStorage.getItem("email")
      }).
        subscribe(res => {

        },
          error => {
            console.log(error)
          },
          () => {
            /*  if (!isSubscribe) {
               this.isCancel = false;
               this.enableAlert = true;
               this.contentText = "We will delete your data once your subscription period ends";
               this.Logout();
             } else {
               this.isCancel = false;
               this.enableAlert = true;
               this.contentText = "Your data will be deleted from our system within the next 7 days"
             } */
            this.isCancel = false;
            this.enableAlert = true;
            this.isDeleted = true;
            this.contentText = "Your data has been deleted successfuly.";

          }
        )
    } else if (this.isDeleted) {
      this.Logout();
    }
  }

  Logout() {
    const accessObj: any = window;
    (accessObj)?.Moengage?.destroy_session();
    this.logeventservice.logEvent('click_logout_Hamburger');
    if (this.platform.isBrowser) {
      localStorage.setItem("isloggedin", "F");
      localStorage.setItem("guest", "T");
      localStorage.setItem("navigateToUpgradeToPremium", "false");
      localStorage.setItem("btnClickBecomePartner", "false");
      this.router.navigate(["/adults/onboarding/login"]);
    } else {

      this.clickButtonById("liLogout");
    }
  }

  clickButtonById(buttonId: string): void {
    const buttonElement: HTMLButtonElement | null = document.getElementById(buttonId) as HTMLButtonElement;

    if (buttonElement) {
      buttonElement.click();
    } else {
      console.error(`Button with ID '${buttonId}' not found`);
    }
  }

  iOS() {
    return [
      'iPad Simulator',
      'iPhone Simulator',
      'iPod Simulator',
      'iPad',
      'iPhone',
      'iPod'
    ].includes(navigator.platform)
      // iPad on iOS 13 detection
      || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
  }

}
