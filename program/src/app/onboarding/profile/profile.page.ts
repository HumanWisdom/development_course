import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OnboardingService } from './../onboarding.service';


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
  paymentDetail;
  RoleID = 0
  url = ''
  userData:any;
  constructor(private router: Router, private Onboardingservice: OnboardingService) {
    let userId = JSON.parse(localStorage.getItem("userId"))
    this.RoleID = JSON.parse(localStorage.getItem("RoleID"))
    this.Onboardingservice.getpaymentdetail(userId).subscribe((res) => {
      if (res) {
        this.paymentDetail = res[0]
      }
    })
  }

  ngOnInit() {
    let userId = JSON.parse(localStorage.getItem("userId"))

    this.email = localStorage.getItem("email")

    console.log(this.loginResponse, this.actKeys)

    this.myPrograms = this.actKeys.filter(x => x.MySelf == "1")
    console.log(this.myPrograms)

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
        this.url = userdetail['UserImagePath'].split('\\')[1];
        this.userData=res[0];

      })
    }, 3000)


  }
  survey() {
    this.router.navigate(["/adults/wisdom-survey"], { state: { 'isUseCloseButton': true } });
  }

  getAffiliate() {
    let userId = JSON.parse(localStorage.getItem("userId"))
    window.location.href = `https://humanwisdom.me/Admin/#/frameworks/affiliate-s01-a/${userId}`;
  }

  deleteMyData(){
   let isSubscribe
    console.log(this.userData);
    var retVal;
    let sub: any = localStorage.getItem('Subscriber');
    if (sub === '0') {
      isSubscribe = true;
    } else {
    isSubscribe = false;
    }
    retVal = confirm("Are you sure you want to delete your data?");
    if( retVal == true ) {
      this.Onboardingservice.deleteMyData({
        UserID: localStorage.getItem("userId").toString(),
        Email: localStorage.getItem("email")
        }).
      subscribe(res=>
        {
         
        },
        error=>{
          console.log(error)
        },
        ()=>{
          if(!isSubscribe){
            alert("We will delete your data once your subscription period ends");
          }else{
            alert("Your data will be deleted from our system in a few days");
          }
        }
      )
    } else {
      return false;
    }

  }

}
