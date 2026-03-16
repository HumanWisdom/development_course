import { Platform } from '@angular/cdk/platform';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogEventService } from "../../../shared/services/log-event.service";
import { OnboardingService } from '../../../shared/services/onboarding.service';
import { SharedService } from '../../../shared/services/shared.service';
import { AdultsService } from '../../../adults/src/app/adults/adults.service';
import { ProgramType } from '../../../shared/models/program-model';
import { Location } from '@angular/common';
import { NavigationService } from '../../services/navigation.service';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  loginResponse:any;
  overallPercentage :any;
  actKeys:any;
  myPrograms = []
  weekDays :any;
  sun = 0
  mon = 0
  tue = 0
  wed = 0
  thu = 0
  fri = 0
  sat = 0
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
  isloggedIn = false;

  constructor(private router: Router, private Onboardingservice: OnboardingService,
    private adultsService: AdultsService,
    public platform: Platform, public logeventservice: LogEventService,private location:Location , 
      private navigationService: NavigationService) {
      // this.initialize();
      let data = localStorage.getItem('loginResponse');
      if(data){
        this.loginResponse = JSON.parse(data);
        if(this.loginResponse){
          this. actKeys = this.loginResponse?.ActKeys
          this. weekDays = this.loginResponse?.WkDays.split(",")
          this.score = (+this.loginResponse.hwScore) - (+this.loginResponse.hwPrevScore);
          this.overallPercentage = this.loginResponse.OverallPercentage || this.loginResponse.overallPercentage || 0;
         }
      }else{
        this.initialize();
      }
  
     this. myPrograms = []
    let userId = localStorage.getItem("userID");
    this.RoleID = +localStorage.getItem("RoleID");
    this.Onboardingservice.getpaymentdetail(userId).subscribe((res) => {
      if (res) {
        this.paymentDetail = res[0]
      }
    })
    this.isPartner = localStorage.getItem('IsPartner') == '1';
    if (this.platform.IOS || this.iOS()) {
      this.enablepayment = false;
    }
    

    if (this.score > 0) {
      this.direction = "up";
    } else if (this.score < 0) {
      this.score = -(this.score);
      this.direction = "down";
    } else {
      this.direction = "";
    }
    if (SharedService.ProgramId == ProgramType.Adults) {
      this.isAdults = true;
    } else {
      this.isAdults = false;
    }
  }

initialize(){
  this.loginResponse= {
    Streak:'',
    WkHours:'',
    hwScore:'',
    Surveys:'',
    Notes:'',
    Modules:'',
    Points:'',
    Name:''
  }
}

  ngOnInit() {
    let userId = JSON.parse(localStorage.getItem("userId"))
    if(userId!=undefined && userId!=null && userId!="563"){
      this.isloggedIn = true;
    }
    this.email = localStorage.getItem("email")
    this.myPrograms = this.actKeys?.filter(x => x.MySelf == "1")
    if (this.weekDays.includes("Sunday") )
      this.sun = 1
    else if (new Date().getDay() >0)
        this.sun = 2
      

    if (this.weekDays.includes("Monday"))
      this.mon = 1
     else if (new Date().getDay() >1)
        this.mon = 2

    if (this.weekDays.includes("Tuesday"))
      this.tue = 1
     else if (new Date().getDay() >2)
        this.tue = 2

    if (this.weekDays.includes("Wednesday"))
      this.wed = 1
     else if (new Date().getDay() >3)
        this.wed = 2
      
    if (this.weekDays.includes("Thursday"))
      this.thu = 1
     else if (new Date().getDay() >4)
        this.thu = 2

    if (this.weekDays.includes("Friday"))
      this.fri = 1
    else if (new Date().getDay() >5)
        this.fri = 2

    if (this.weekDays.includes("Saturday"))
      this.sat = 1
    else if (new Date().getDay() >6)
        this.sat = 2

    setTimeout(() => {
      this.Onboardingservice.getuser(userId).subscribe((res) => {
        let userdetail = res[0];
        // this.url = userdetail['UserImagePath'].split('\\')[1] + '?' + (new Date()).getTime();
        if(userdetail['UserImagePath']!="")
        {
          this.url = userdetail['UserImagePath'].replace('\\', '/') + '?' + (new Date()).getTime();
        }
        this.userData = res[0];
        // this.overallPercentage = this.userData?.OverallPercentage || this.userData?.overallPercentage || 0;
      })

      this.adultsService.getPoints(userId).subscribe(res => {
         if(res) {
            this.overallPercentage = parseInt(res.overallPercentage) || 0;
         }
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
    this.logeventservice.logEvent('click_invite_friends');

    const url = this.isAdults ? '/adults/refer-friend' : '/teenagers/refer-friend';
    this.router.navigate([url]);
  }

  survey() {
    this.logeventservice.logEvent('click_happiness_survey');

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
    this.logeventservice.logEvent('click_deleteMyData');

    this.contentText = 'Are you sure you want to delete your data? Your entire account, including content and purchases will be deleted.';
    this.isCancel = true;
    this.enableAlert = true;
  }

    back(){
      let url =  this.navigationService.navigateToSkippedBackLink();
      if(url){
        this.router.navigate([url]);

      }else{
        url = SharedService.getDashboardUrls();
        this.router.navigate([url]);
      } 

/* 
      let url = SharedService.getDashboardUrls();
      if(url){
        this.router.navigate([url]);
      }else{
        this.location.back();
      } */
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
      this.logeventservice.logEvent('click_deleteMyData_Ok');

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
    // if (this.platform.isBrowser) {
      localStorage.setItem("isloggedin", "F");
      localStorage.setItem("guest", "T");
      localStorage.setItem("navigateToUpgradeToPremium", "false");
      localStorage.setItem("btnClickBecomePartner", "false");
      // this.router.navigate(["/adults/onboarding/login"]);
      this.router.navigate(['/' + SharedService.getprogramName() + '/onboarding/login'])
    // } else {

      this.clickButtonById("liLogout");
    // }
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
