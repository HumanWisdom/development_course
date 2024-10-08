import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'bcswipe';
import { Router } from '@angular/router';
import { LogEventService } from '../../../../../shared/services/log-event.service';
import { AdultsService } from '../../../../../adults/src/app/adults/adults.service';
import { SharedService } from '../../../../../shared/services/shared.service';

declare var $: any;
@Component({
  selector: 'app-daily-practice',
  templateUrl: './daily-practice.page.html',
  styleUrls: ['./daily-practice.page.scss'],
})
export class DailyPracticePage implements OnInit {
  @ViewChild('videoPlayer') videoPlayer: ElementRef;
  enableVideo = false;
  yellow = "#FFC455"
  title = "Exploring anger"
  mediaAudio = JSON.parse(localStorage.getItem("mediaAudio"))
  audioLink;

  poster = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/video_posters/introduction/dpv_02.svg"
  videoLink;
  dailyid = '0'
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
  isAdults: boolean;
  dailyInspirationTitle = '';
  DailyInspirationLink;
  dailyInsModule = '';
  enableBtn = false;

  constructor(
    private route: ActivatedRoute,
    private service: AdultsService,
    public router: Router,
    public logeventservice: LogEventService
  ) {
    this.isAdults = SharedService.isAdultProgram();
    this.guest = localStorage.getItem('guest') === 'T' ? true : false;
  }

  ngOnInit() {
    this.setAudioControlsBackground();
    let popup = JSON.parse(localStorage.getItem("Subscriber"))
    if (popup === 1) this.enablepopup = true
    this.isSubscribe = popup === 0 ? false : true;
    this.dailyid = this.route.snapshot.paramMap.get('id')
    this.getdailyques();
    this.userId = JSON.parse(localStorage.getItem("userId"))
    let islogin = localStorage.getItem("isloggedin");
    if (islogin === 'T') {
      this.isloggedIn = true;
      this.Subscriber = localStorage.getItem('Subscriber')
    };
    $('.carousel').bcSwipe({ threshold: 50 });

    if (this.guest || !this.isloggedIn || this.Subscriber === '0') {
      this.placeholder = 'Start your free trial to access your online journal';
    }

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

    this.getdailyquestion();

  }

  getdailyquestion() {
    this.service.getDailypractiseQuestionbreath().subscribe((res) => {
      if (res) {
        this.dailybreathTitle = res.split(';')[0]
        this.videoLink = res.split(';')[1];
        this.enableVideo = true;
      }
    })
    this.service.getDailyInspirationQuestion().subscribe((res) => {
      if (res) {
        this.dailyInspirationTitle = res.split(';')[0]
        this.DailyInspirationLink = res.split(';')[1];
        this.dailyInsModule = res.split(';')[2] ? res.split(';')[2]?.toString()?.replaceAll('/', '') : "";
        this.enableVideo = true;
      }
    })
    this.service.getDailypractiseQuestionins().subscribe((res) => {
      if (res) {
        //this.dailyinstext = res;
        this.dailyinsAuthor = res.split(';')[0]
        this.dailyinstext = res.split(';')[1];
      }
    })
    this.service.getDailypractiseQuestionmeditation().subscribe((res) => {
      if (res) {
        this.audioTitle = res.split(';')[0]
        this.audioLink = res.split(';')[1];
      }
    })
    this.service.getDailypractiseQuestiontoday().subscribe((res) => {
      if (res) {
        this.trythistoday = res;
      }
    })
  }

  getdailyques() {
    this.service.getDailypractiseQuestion().subscribe((res) => {
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
      this.service.submitDailypractiseQuestion(obj).subscribe((res) => {
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
    this.router.navigate(["/teenagers/" + this.dailyInsModule])
  }

  next(event) {
    this.Logevent(event);
    this.enableVideo = false;
    setTimeout(() => {
      this.enableVideo = true;
    }, 500);
  }

  back(event) {
    this.Logevent(event);
    this.enableVideo = false;
    setTimeout(() => {
      this.enableVideo = true;
    }, 500);
  }

  getAlertcloseEvent() {
    this.enableAlert = false;
    this.content = '';
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
}
