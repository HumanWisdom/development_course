import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'bcswipe';
import { Router } from '@angular/router';
import { LogEventService } from '../../../shared/services/log-event.service';
import { CommonService } from '../../../shared/services/common.service';
import { trigger, transition, style, animate } from '@angular/animations';
import { HammerGestureConfig } from '@angular/platform-browser';
import { SharedService } from '../../services/shared.service';
declare var $: any;
@Component({
  selector: 'app-daily-practice',
  templateUrl: './daily-practice.page.html',
  styleUrls: ['./daily-practice.page.scss'],
  animations: [
    trigger('slideAnimation', [
      // Wildcard transition for swipe left (next)
      transition('* => left', [
        style({ transform: 'translateX(100%)' }), // start from right
        animate('0.7s ease-in-out', style({ transform: 'translateX(0)' }))
      ]),
      // Wildcard transition for swipe right (previous)
      transition('* => right', [
        style({ transform: 'translateX(-100%)' }), // start from left
        animate('0.7s ease-in-out', style({ transform: 'translateX(0)' }))
      ])
    ])
  ]
})
export class DailyPracticePage implements OnInit {
  @ViewChild('videoPlayer') videoPlayer: ElementRef;
  enableVideo = false;
  yellow = "#FFC455"
  title = "Exploring anger"
  mediaAudio = JSON.parse(localStorage.getItem("mediaAudio"))
  audioLink;
  direction: string = '';
  poster = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/video_posters/introduction/dpv_02.svg"
  videoLink = '';
  dailyid ='0';
  dailyqus = ''
  dailyqusrefid = ''
  userId = ''
  trythistoday = ''
  questext = ''
  dailyinsAuthor = ''
  dailyinstext = ''
  audioTitle = ''
  dailybreathTitle = ''
  isloggedIn = false
  enablepopup = false;
  isSubscribe = false;
  Subscriber: any;
  guest = true;
  placeholder = 'Answer here'
  enableAlert = false;
  content = ''
  dailyInspirationTitle = '';
  DailyInspirationLink;
  DailyInspirationImg = '';
  enableBtn = false;
  dailyInsModule = '';
 currentSection = 0;
  isAdults = true;
  constructor(
    private route: ActivatedRoute,
    private commonService: CommonService,
    public router: Router,
    public logeventservice: LogEventService
  ) {
    this.guest = localStorage.getItem('guest') === 'T' ? true : false;
  }


  ngOnInit() {
    this.isAdults = SharedService.isAdultProgram();
    let popup = JSON.parse(localStorage.getItem("Subscriber"))
    if (popup === 1) this.enablepopup = true
    this.isSubscribe = popup === 0 ? false : true;
    this.dailyid = this.route.snapshot.paramMap.get('id')
    this.currentSection = +this.dailyid;
    this.getdailyques();
    this.userId = JSON.parse(localStorage.getItem("userId"))
    let islogin = localStorage.getItem("isloggedin");
    if (islogin === 'T') {
      this.isloggedIn = true;
      this.Subscriber = localStorage.getItem('Subscriber')
    };
    $('.carousel').bcSwipe({ threshold: 50 });

    if (this.guest || !this.isloggedIn || this.Subscriber === '0') {
      this.placeholder = 'Please subscribe to access your online journal';
    }

    this.getdailyquestion();

    setTimeout(() => {
      let video = document?.getElementsByTagName('video')[0];

      video?.addEventListener("timeupdate", (function () {
        if ((video.duration - video.currentTime) <= 5) {
          this.enableBtn = true;
        }else {
          this.enableBtn = false;
        }
      }).bind(this));


    }, 4000)
  }

  getdailyquestion() {
    this.commonService.getDailypractiseQuestionbreath().subscribe((res) => {
      if (res) {
        this.dailybreathTitle = res.split(';')[0]
        this.videoLink = res.split(';')[1];
        this.enableVideo = true;
      }
    })
    this.commonService.getDailyInspirationQuestion().subscribe((res) => {
      if (res) {
        this.dailyInspirationTitle = res.split(';')[0]
        this.DailyInspirationLink = res.split(';')[1];
        this.dailyInsModule = res.split(';')[2] ? res.split(';')[2]?.toString()?.replaceAll('/', '') : "";
        this.DailyInspirationImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/daily_inspiration/portrait" + this.DailyInspirationLink.substring(this.DailyInspirationLink.lastIndexOf('/')).toString().replace("mp4", "webp")
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
    this.logeventservice.logEvent('click_add_answer_here');
    if (!this.isloggedIn || !this.isSubscribe) {
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
          this.content = "Successfully added daily question";
          this.enableAlert = true;
          // window.alert('Successfully added daily question')
        }
      })
    }
  }


  Logevent(evtName) {
    this.logeventservice.logEvent(evtName);
  }

  routeModule() {
    this.router.navigate(["/"+SharedService.getprogramName()+"/" + this.dailyInsModule])
  }

  next(event) {
    this.currentSection++;
    if(this.currentSection>=6){
      this.currentSection = 0;
    }
    this.direction = 'left';
    this.Logevent(event);
    this.dailyid = ((+this.dailyid + 1) % 6).toString();
    this.enableVideo = false;
    setTimeout(() => {
      this.enableVideo = true;
    }, 500);
  }

  back(event) {
    this.Logevent(event);
    this.dailyid = ((+this.dailyid - 1 + 6) % 6).toString()
    this.enableVideo = false;
    setTimeout(() => {
      this.enableVideo = true;
    }, 500);
    if(this.currentSection==0){
      this.currentSection=5;
    }else{
      this.currentSection--;
    }
      this.direction = 'right';
  }

  getAlertcloseEvent() {
    this.enableAlert = false;
    this.content = '';
  }

  routeToDashboard(){
    this.router.navigate([SharedService.getDashboardUrls()])
  }
}
