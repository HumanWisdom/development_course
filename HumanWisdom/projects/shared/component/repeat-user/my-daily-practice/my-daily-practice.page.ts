import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../services/shared.service';
import { ProgramType } from '../../../models/program-model';
import { CommonService } from '../../../services/common.service';
import { ActivatedRoute, Router, Routes } from '@angular/router';

@Component({
  selector: 'app-my-daily-practice',
  templateUrl: './my-daily-practice.page.html',
  styleUrls: ['./my-daily-practice.page.scss'],
})
export class MyDailyPracticePage implements OnInit {
  isAdults = false;
  dailybreathTitle:string ='';
  videoLink:string ='';
  enableVideo:boolean;
  dailyInspirationTitle:string='';
  DailyInspirationLink:string='';
  isVoices:boolean;
  dailyInsModule:string =''
  DailyInspirationImg:string='';
  dailyinsAuthor:string='';
  dailyinstext:string='';
  audioTitle:string ='';
  audioLink:string='';
  trythistoday:string='';
  dailyqusrefid:string='';
  dailyqus:string='';
  questext:string='';
  enableAlert:boolean = false;
  content:string='';
  DailyInspirationTime :string='';
  audioTime:string='';
  DailyInspirationImage:string= '';
  userId = JSON.parse(localStorage.getItem("userId"))
  isloggedIn = localStorage.getItem("isloggedin") === 'T' ? true : false;
  breatheTime:string = '';
  constructor(private  commonService:CommonService,private router:Router) { }

  ngOnInit() {
  if (SharedService.ProgramId == ProgramType.Adults) {
      this.isAdults = true;
    } else {
      this.isAdults = false;
    }
    this.getdailyquestion();
    this.getdailyques();
  }

  getdailyquestion() {
    this.commonService.getDailypractiseQuestionbreath().subscribe((res) => {
      if (res) {
        this.dailybreathTitle = res.split(';')[0]
        this.videoLink = res.split(';')[1];
        this.enableVideo = true;
        this.breatheTime =  res.split(';')[2];
      }
    })
    this.commonService.getDailyInspirationQuestion().subscribe((res) => {
      if (res) {
        this.dailyInspirationTitle = res.split(';')[0]
        this.DailyInspirationLink = res.split(';')[1];
        this.DailyInspirationImage = res.split(';')[2];
        this.DailyInspirationTime = res.split(';')[4];
       if(res.split(';')[3]==="6")
       { 
        this.isVoices = true; 

       }


        this.dailyInsModule = res.split(';')[2] ? res.split(';')[2]?.toString()?.replaceAll('/', '') : "";
       // this.DailyInspirationImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/daily_inspiration/portrait" + this.DailyInspirationLink.substring(this.DailyInspirationLink.lastIndexOf('/')).toString().replace("mp4", "webp")
       
       //https://d1tenzemoxuh75.cloudfront.net/assets/images/tiles/dashboard/wisdom_shorts/wisdom_shorts_109.webp 
       
       this.DailyInspirationImg = "https://d1tenzemoxuh75.cloudfront.net/assets/images/tiles/dashboard/wisdom_shorts/wisdom_shorts_" + this.DailyInspirationLink.substring(this.DailyInspirationLink.lastIndexOf('/')).toString().split('.')[1].toString()  +".webp"

       this.enableVideo = true;
      }
    })
    this.commonService.getDailypractiseQuestionins().subscribe((res) => {
      if (res) {
        //this.dailyinstext = res;
        this.dailyinsAuthor = res.split(';')[0]
        this.dailyinstext = res.split(';')[1];
      }
    })
    this.commonService.getDailypractiseQuestionmeditation().subscribe((res) => {
      if (res) {
        this.audioTitle = res.split(';')[0]
        this.audioLink = res.split(';')[1];
        this.audioTime = res.split(';')[2];
      }
    })
    this.commonService.getDailypractiseQuestiontoday().subscribe((res) => {
      if (res) {
        this.trythistoday = res;
      }
    })
  }

  getdailyques() {
    this.commonService.getDailypractiseQuestion().subscribe((res) => {
      if (res) {
        this.dailyqus = res.split(':')[1]
        this.dailyqusrefid = res.split(':')[0]
      }
    })
  }

  subdailyques() {
    if (!this.isloggedIn) {
      this.content = "Subscribe to activate your online journal";
      this.enableAlert = true;
      // alert("Subscribe to activate your online journal");
    } else {
      let obj = {
        ReflectionId: this.dailyqusrefid,
        SubscriberId: this.userId,
        Resp: this.questext
      }
      this.commonService.submitDailypractiseQuestion(obj).subscribe((res) => {
        if (res) {
          this.content = "Successfully added to journal";
          this.enableAlert = true;
          this.questext='';
          
          // window.alert('Successfully added daily question')
        }
      })
    }
  }

  
  routeDailyPractice(id){
    this.router.navigate([SharedService.getprogramName()+'/'+'daily-practise/'+id])
  }
  routeToDailyCheckIn(){
    this.router.navigate([SharedService.getprogramName()+'/daily-checkin'])
  }
  routeToDashboard(){
    this.router.navigate([SharedService.getDashboardUrls()]);
  }
}
