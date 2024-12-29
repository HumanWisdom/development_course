import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from '../../../shared/services/common.service';
import { OnboardingService } from '../../../shared/services/onboarding.service';
import { SharedService } from '../../../shared/services/shared.service';
import { TeenagersService } from '../../../teenagers/src/app/teenagers/teenagers.service';
import { ProgramType } from '../../../shared/models/program-model';

@Component({
  selector: 'app-social-login',
  templateUrl: './social-login.page.html',
  styleUrls: ['./social-login.page.scss'],
})
export class SocialLoginPage implements OnInit {

  public dasboardUrl = '/teenagers/teenager-dashboard';
  //get global settings here
  public text = 2
  public video = 3
  public audio = 4
  public question = 6
  public reflection = 5
  public feedbackSurvey = 7
  public moduleId = 7
  public userId = 100
  public userName: any
  public qrList: any
  public goToPage: any
  public saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  public loginResponse = JSON.parse(localStorage.getItem("loginResponse"))
  public points: any
  public daysVisited: any
  public timeSpent: any
  public percentage: any
  public bookmarks = []
  public resume = []
  public resumeLastvisited = [];
  public dashboardFeature = [];
  public bookmarkLength: any
  searchinp = '';
  public dash = false;
  public isSubscriber = false;
  public guideP = '50';
  searchResult = [];
  isEnableHam = true;
  public Subscriber: any
  public alertMsg: any
  public friendemail = ''
  public friendname = ''
  public name = ''
  public streak = ''
  // public sorrowandlossP
  public isloggedIn = false
  public x = []
  public isSubscribe = false
  public enablebanner = false;
  public modaldata = {}
  public firstpage = true;
  public secondpage = false;
  public thirdpage = false;
  public fourthpage = false;
  public fifthpage = false;
  public sixthpage = false;
  public activationCode: any = ''
  public countryCode: any = '';
  public email: any = '';
  public verificationCode: any;
  public loginpassword: any = '';
  public loginemail: any = '';
  public subthirdpage = false;
  public subfirstpage = true;
  public subsecondpage = false;
  public user: any
  public idToken: any
  public socialFirstName: any
  public socialLastName: any
  public socialEmail: any
  public yearormonth = ''
  public personalisedList = []
  public lifestoriesList = []
  public shortsList = []
  public sId: any
  hcwhP: any
  public moduleList = [];
  public exerciseNo: string = '';
  public Title: string = '';
  public day: string = '';
  public bullyingP: any
  public making_better_decisionsP: any
  public diversity_and_inclusionP: any
  public dealingwithdepressionP: any
  public externalapprovalP: any
  //static progress mapping
  public wisdomExerciseList = [];
  mediaAudio = "https://d1tenzemoxuh75.cloudfront.net"
  mediaVideo = "https://d1tenzemoxuh75.cloudfront.net"
  mediaPercent: any
  freeScreens = []
  currentList = [];
  maxExceriseCount = "12;";
  public YourTopicofChoice = [];
  public registrationForm: any;
  public isIos = false;
  public tourTotalIndex = 9;
  public tourIndex = 1;
  dashboardShorts = [];
  isAdults = false;
  constructor(public service: TeenagersService,private commonService:CommonService,private router:Router,private route:ActivatedRoute, public services: OnboardingService) { }

  ngOnInit(){
       if (SharedService.ProgramId == ProgramType.Adults) {
          this.isAdults = true;
        } else {
          this.isAdults = false;
        }
      this.route.queryParams.subscribe(params => {
          authtoken = params?.authtoken
        });
       let authtoken = JSON.parse(localStorage.getItem("token"))
         if(localStorage.getItem('appleLogin')=='T'){
          this.commonService.loginUrlSubs.subscribe(res=>{
            if(res){
              localStorage.setItem('appleLogin','F');
              setTimeout(() => {
              this.commonService.loginSubjectUnsubscribe();
            }, 500); 
            this.router.navigate([res]);
            }
          })
         // this.commonService.verifyTokenAndHandleResponse(authtoken);
        }
        
        if (authtoken) {
          console.log("APPPLE LOGIN");
          this.services.setDataRecievedState(false);
          localStorage.setItem('socialLogin', 'T');
          this.service.verifytoken(authtoken).subscribe((res) => {
    
            if (res) {
              localStorage.setItem("email", res['Email'])
              localStorage.setItem("name", res['Name'])
              let namedata = localStorage.getItem('name').split(' ')
              localStorage.setItem("FnName", namedata[0])
              localStorage.setItem("LName", namedata[1] ? namedata[1] : '')
              localStorage.setItem("Subscriber", res['Subscriber']);
              this.isSubscriber = SharedService.isSubscriber();
              this.loginadult(res);
              this.services.setDataRecievedState(true);
              if(res["LastVisit"] &&  new Date(res["LastVisit"]).getDate()){
                if(new Date().getDate() > new Date(res["LastVisit"]).getDate()){
                  SharedService.FirstLoginOfTheDay =true;
                }
                else 
                {
                  SharedService.FirstLoginOfTheDay =false;
                }
                console.log(SharedService.FirstLoginOfTheDay)
              }
            } else {
              localStorage.setItem("email", 'guest@humanwisdom.me');
              localStorage.setItem("pswd", '12345');
              localStorage.setItem('guest', 'T');
              localStorage.setItem('isloggedin', 'F');
              this.services.setDataRecievedState(true);
            }
          }, error => {
            localStorage.setItem("email", 'guest@humanwisdom.me');
            localStorage.setItem("pswd", '12345');
            localStorage.setItem('guest', 'T');
            localStorage.setItem('isloggedin', 'F');
    
          },
          )
        } else {
          this.services.setDataRecievedState(true);
        }
  }

  loginadult(res) {
    this.loginResponse = res
    let NoOfVisits = this.loginResponse.NoOfVisits
    this.userId = res.UserId
    if (res.Subscriber === 0) {
      this.isSubscribe = true;
    }
    let guest = localStorage.getItem('guest');
    // if (guest === 'T') localStorage.setItem('guest', 'F')
    if (res['Email'] === "guest@humanwisdom.me") localStorage.setItem('guest', 'T')
    else localStorage.setItem("guest", 'F')

    sessionStorage.setItem("loginResponse", JSON.stringify(this.loginResponse))
    localStorage.setItem("loginResponse", JSON.stringify(this.loginResponse))
    localStorage.setItem("token", JSON.stringify(res.access_token))
    localStorage.setItem("Subscriber", res.Subscriber)
    localStorage.setItem("userId", JSON.stringify(this.userId))
    localStorage.setItem("email", res['Email'])
    localStorage.setItem("name", res.Name)
    let nameupdate = localStorage.getItem(
      "nameupdate"
    );
    if (nameupdate) {
      this.name = nameupdate
    } else {
      this.name = res.Name
    }
    this.streak = res.Streak

    let namedata = localStorage.getItem('name').split(' ')
    this.modaldata['email'] = localStorage.getItem('email');
    this.modaldata['firstname'] = namedata[0];
    this.modaldata['lastname'] = namedata[1] ? namedata[1] : '';
    // this.getProgress()
    // this.freescreens();
    localStorage.setItem("text", JSON.stringify(this.text))
    localStorage.setItem("video", JSON.stringify(this.video))
    localStorage.setItem("audio", JSON.stringify(this.audio))
    localStorage.setItem("moduleId", JSON.stringify(this.moduleId))
    localStorage.setItem("question", JSON.stringify(this.question))
    localStorage.setItem("reflection", JSON.stringify(this.reflection))
    localStorage.setItem("feedbackSurvey", JSON.stringify(this.feedbackSurvey))
    this.userId = JSON.parse(localStorage.getItem("userId"))
    this.Subscriber = localStorage.getItem('Subscriber')
    localStorage.setItem("mediaAudio", JSON.stringify(this.mediaAudio))
    localStorage.setItem("mediaVideo", JSON.stringify(this.mediaVideo))
    let isRoutedFromLogin = NoOfVisits.toString() === '1' ? true : false;
    if (localStorage.getItem("token") && (this.saveUsername == true)) {
      this.userId = JSON.parse(localStorage.getItem("userId"))
      this.userName = JSON.parse(localStorage.getItem("userName"))
    }
    else {
      this.userId = JSON.parse(sessionStorage.getItem("userId"))
      this.userName = JSON.parse(sessionStorage.getItem("userName"))
    }
    // this.getBookmarks()
    if (res.UserId == 0) {
    }
    else {
      this.userId = res.UserId
      this.userName = res.Name
      sessionStorage.setItem("loginResponse", JSON.stringify(this.loginResponse))
      localStorage.setItem("userId", JSON.stringify(this.userId))
      localStorage.setItem("token", JSON.stringify(res.access_token))
      if(isRoutedFromLogin){
        this.commonService.loginSubject(`${SharedService.getprogramName()}/changetopic`);
      }else{
        this.commonService.loginSubject(`${SharedService.getprogramName()}/repeat-user`);
      }
      if (this.saveUsername == true) {
        localStorage.setItem("userId", JSON.stringify(this.userId))
        localStorage.setItem("userEmail", JSON.stringify(res.Email))
        localStorage.setItem("userName", JSON.stringify(this.userName))

      } else {
        sessionStorage.setItem("userId", JSON.stringify(this.userId))
        sessionStorage.setItem("userEmail", JSON.stringify(res.Email))
        sessionStorage.setItem("userName", JSON.stringify(this.userName))
      }

    }

  }

}
