import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'bcswipe';
import { Router } from '@angular/router';
import { Platform } from '@angular/cdk/platform';
import { LogEventService } from '../../../shared/services/log-event.service';
import { CommonService } from '../../../shared/services/common.service';
import { trigger, transition, style, animate } from '@angular/animations';
import { HammerGestureConfig } from '@angular/platform-browser';
import { SharedService } from '../../services/shared.service';
import { ProgramType } from '../../../shared/models/program-model';
import { NgNavigatorShareService } from 'ng-navigator-share';
import { NavigationService } from '../../services/navigation.service';
import {Location } from '@angular/common'
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
  isloggedIn = localStorage.getItem("isloggedin") === 'T' ? true : false;
  enablepopup = false;
  isSubscribe = false;
  Subscriber: any;
  guest = true;
  placeholder = 'Answer here'
  enableAlert = false;
  content = ''
  dailyInspirationTitle = '';
  isVoices=false;
  DailyInspirationLink;
  DailyInspirationImg = '';
  enableBtn = false;
  dailyInsModule = '';
  path:any;
  address:any;
  isIOS:boolean = false;
 currentSection = 0;
  isAdults = false;
  teenTalkTitle = '';
  teenTalkLink = '';
  teenTalkImg = '';
  podcastTitle = '';
  podcastLink = '';
  podcastImg = '';
  sectionList: number[] = [0, 2, 3, 5];
  currentIndex = 0;
  constructor(
    private route: ActivatedRoute,
    private commonService: CommonService,
    public router: Router,
    public logeventservice: LogEventService,
    public navigationService: NavigationService,
    private ngNavigatorShareService: NgNavigatorShareService,
    private location:Location,
    private platform:Platform
  ) {
    this.guest = localStorage.getItem('guest') === 'T' ? true : false;
  }


  ngOnInit() {
    // this.isAdults = SharedService.isAdultProgram();
    if (SharedService.ProgramId == ProgramType.Adults) {
      this.isAdults = true;
    } else {
      this.isAdults = false;
    }
    this.isIOS = SharedService.initializeIosCheck(this.platform);
    this.setAudioControlsBackground(); 
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
    }
    $('.carousel').bcSwipe({ threshold: 50 });
    this.address =  this.router.url;

    if (this.guest || !this.isloggedIn) {
      this.placeholder = 'Login to use this feature' ;
    }
    // else if(this.Subscriber === '0') {
    //   this.placeholder = 'Please subscribe to access your online journal';
    // }

    this.getdailyquestion();

   /*  setTimeout(() => {
      let video = document?.getElementsByTagName('video')[0];

      video?.addEventListener("timeupdate", (function () {
        if ((video.duration - video.currentTime) <= 5) {
          this.enableBtn = true;
        }else {
          this.enableBtn = false;
        }
      }).bind(this));


    }, 4000) */
  }

  capitalizeFirstLetter(inputString: string): string {
    return inputString.charAt(0).toUpperCase() + inputString.slice(1);
  }

  resolveMediaUrl(url: string): string {
    if (!url) return '';
    if (url.includes('videopage')) {
      const parts = url.split('/');
      const code = parts[2];
      let name = code.split('-videos')[0];
      let link = code.split('-videos')[1];
      let path = `${name}/videos${link?.replaceAll('-', '/')}`;
      if (path.includes('teenagers')) {
        path = path.replaceAll('-', '/');
      }
      path = path.replaceAll('~', '-');
      path = path.replace(/\/+/g, '/');
      return `https://d1tenzemoxuh75.cloudfront.net/${path}`;
    } else if (url.includes('audiopage')) {
      const parts = url.split('/');
      const audioUrl = parts[2];
      let path = audioUrl.replace(/\~/g, '/');
      path = path.replace(/\/+/g, '/');
      return `https://d1tenzemoxuh75.cloudfront.net/${path}`;
    }
    return '';
  }

  getdailyquestion() {
    const programId = SharedService.ProgramId;
    this.commonService.getTodayDailyPractise(programId).subscribe((res: any[]) => {
      if (res && res.length > 0) {
        const date = new Date().getDate();
        const isOdd = date % 2 !== 0;

        // 1. Daily Inspiration / Short video (type 5 & 6)
        const shortVideos = res.filter(item => item.dailyPractTypeID === '5' || item.dailyPractTypeID === '6');
        let selectedShort = null;
        if (shortVideos.length > 1) {
          selectedShort = isOdd ? shortVideos.find(x => x.dailyPractTypeID === '5') : shortVideos.find(x => x.dailyPractTypeID === '6');
          if (!selectedShort) selectedShort = shortVideos[0];
        } else if (shortVideos.length === 1) {
          selectedShort = shortVideos[0];
        }

        if (selectedShort) {
          this.dailyInspirationTitle = selectedShort.title;
          this.dailyInspirationTitle = this.dailyInspirationTitle.replace(/:(\S)/, ': $1');
          this.DailyInspirationLink = selectedShort.Text_URL || this.resolveMediaUrl(selectedShort.url);
          if (this.DailyInspirationLink.includes('cloudfront.net')) {
            this.DailyInspirationImg = selectedShort.imgPath || "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/daily_inspiration/portrait_new/" + this.DailyInspirationLink.substring(this.DailyInspirationLink.lastIndexOf('/')).toString().split('.')[1].toString() + ".webp";
          } else {
            this.DailyInspirationImg = selectedShort.imgPath || "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/daily_inspiration/portrait_new/default.webp";
          }
          this.isVoices = selectedShort.dailyPractTypeID === '6';
          this.dailyInsModule = selectedShort.url ? selectedShort.url.split('/').pop().replaceAll('/', '') : '';
          this.enableVideo = true;
        }

        // 2. Quote of the day (type 2)
        const quoteItem = res.find(item => item.dailyPractTypeID === '2');
        if (quoteItem) {
          this.dailyinstext = quoteItem.Text_URL;
          this.dailyinsAuthor = quoteItem.title;
        }

        // 3. Try This Today / Challenge (type 4)
        const challengeItem = res.find(item => item.dailyPractTypeID === '4');
        if (challengeItem) {
          this.trythistoday = challengeItem.Text_URL;
        }

        // Build sectionList based on program and odd/even day
        const tempSections: number[] = [0]; // Daily Inspiration is always index 0

        if (this.isAdults) {
          const breathingItem = res.find(item => item.dailyPractTypeID === '1');
          const meditationItem = res.find(item => item.dailyPractTypeID === '3');
          
          let selectType: 'breathing' | 'meditation' = 'breathing';
          if (breathingItem && meditationItem) {
            selectType = isOdd ? 'breathing' : 'meditation';
          } else if (breathingItem) {
            selectType = 'breathing';
          } else if (meditationItem) {
            selectType = 'meditation';
          }

          if (selectType === 'breathing' && breathingItem) {
            this.dailybreathTitle = breathingItem.title;
            this.videoLink = breathingItem.Text_URL || this.resolveMediaUrl(breathingItem.url);
            this.enableVideo = true;
            tempSections.push(1); // Breathing exercise section
          } else if (selectType === 'meditation' && meditationItem) {
            this.audioTitle = meditationItem.title;
            this.audioLink = meditationItem.Text_URL || this.resolveMediaUrl(meditationItem.url);
            tempSections.push(4); // Meditation section
          }
        } else {
          const teenTalkItem = res.find(item => item.dailyPractTypeID === '8');
          const podcastItem = res.find(item => item.dailyPractTypeID === '9');

          let selectType: 'teentalk' | 'podcast' = 'teentalk';
          if (teenTalkItem && podcastItem) {
            selectType = isOdd ? 'teentalk' : 'podcast';
          } else if (teenTalkItem) {
            selectType = 'teentalk';
          } else if (podcastItem) {
            selectType = 'podcast';
          }

          if (selectType === 'teentalk' && teenTalkItem) {
            this.teenTalkTitle = teenTalkItem.title;
            this.teenTalkLink = teenTalkItem.Text_URL || this.resolveMediaUrl(teenTalkItem.url);
            this.teenTalkImg = teenTalkItem.imgPath;
            this.videoLink = this.teenTalkLink;
            tempSections.push(8); // TeenTalk section
          } else if (selectType === 'podcast' && podcastItem) {
            this.podcastTitle = podcastItem.title;
            this.podcastLink = podcastItem.Text_URL || this.resolveMediaUrl(podcastItem.url);
            this.podcastImg = podcastItem.imgPath;
            this.audioLink = this.podcastLink;
            tempSections.push(9); // Podcast section
          }
        }

        // Add standard journal, quote, and challenge
        tempSections.push(2); // Question of the day (Journal)
        tempSections.push(3); // Quote of the day
        tempSections.push(5); // Challenge

        this.sectionList = tempSections;

        // Set current index based on dailyid
        const idx = this.sectionList.indexOf(+this.dailyid);
        if (idx !== -1) {
          this.currentIndex = idx;
          this.currentSection = this.sectionList[this.currentIndex];
        } else {
          this.currentIndex = 0;
          this.currentSection = this.sectionList[0];
        }
      }
    });
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
    if (!this.isloggedIn) {
      this.content = "Subscribe to activate your online journal";
      this.enableAlert = true;
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
  routeToUrl(link) {
    this.router.navigate(["/"+SharedService.getprogramName()+"/" + link])
  }
  

  next(event) {
    window.scrollTo(0,0);
    this.currentIndex++;
    if(this.currentIndex >= this.sectionList.length){
      this.currentIndex = 0;
    }
    this.direction = 'left';
    this.Logevent(event);
    this.currentSection = this.sectionList[this.currentIndex];
    this.dailyid = this.currentSection.toString();
    this.enableVideo = false;
    setTimeout(() => {
      this.enableVideo = true;
    }, 500);
  }

  back(event) {
    window.scrollTo(0,0);
    this.Logevent(event);
    if(this.currentIndex == 0){
      this.currentIndex = this.sectionList.length - 1;
    }else{
      this.currentIndex--;
    }
    this.currentSection = this.sectionList[this.currentIndex];
    this.dailyid = this.currentSection.toString();
    this.enableVideo = false;
    setTimeout(() => {
      this.enableVideo = true;
    }, 500);
    this.direction = 'right';
  }

  getAlertcloseEvent() {
    this.enableAlert = false;
    this.questext="";

    this.content = '';
  }

  routetovoices(){
       
      this.router.navigate(["/"+SharedService.getprogramName()+"/" + "wisdom-shorts"], { queryParams: { "pref": "voices" } })
  
  }
  routeToDashboard() {
    var url = this.navigationService.navigateToBackLink();
    if (url != null) {
      this.router.navigateByUrl(url);
    } else {
      this.location.back();
    }
  }
  share() {
    this.shareUrl(SharedService.ProgramId);
    this.ngNavigatorShareService.share({
      title: 'HappierMe Program',
      text:  "Hi! I've been using the HappierMe app and wanted to share something you may find interesting. Let me know what you think",
      url: this.path
    }).then((response) => {
      
    })
      .catch((error) => {
        console.log(error);
      });
  }

  setAudioControlsBackground() {
    const backgroundColor = this.isAdults ? 'rgb(18, 15, 64)' : '#0C2B5F';
  
    // Create a new <style> element
    const style = document.createElement('style');
    style.textContent = `
      audio::-webkit-media-controls-enclosure {
        background: ${backgroundColor} !important;
      }
    `;
  
    // Append the <style> element to the document head
    document.head.appendChild(style);
  }

  shareUrl(programType:ProgramType) {
    switch (programType) {
      case ProgramType.Adults:
          this.path = SharedService.AdultsBaseUrl + this.address 
        break;
      case ProgramType.Teenagers:
        this.path = SharedService.TeenagerBaseUrl + this.address 
        break;
      default:
          this.path = SharedService.AdultsBaseUrl + this.address
    }
  }


}
