import { Component, ElementRef, OnInit } from '@angular/core';
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'HumanWisdom-s75003',
  templateUrl: './s75003.page.html',
  styleUrls: ['./s75003.page.scss'],
})
export class S75003Page implements OnInit {
  dayclass = 'intro'
  isShowTranscript = false;
  isShowAudio = false;
  enableintro = true;
  enableday1 = false;
  enableday2 = false;
  enableday3 = false;
  enableday4 = false;
  enableday5 = false;
  enableday6 = false;
  vistedScreens: any[] = [];
  currentDay: number = 0;
  nextDay: number = null;
  maxDay = 0;
  endTime: any;
  startTime: any;
  moduleId: number = 75;
  slideStart = 0;
  totalSlidesCount = 6;
  screenNumber = '';
  details: string = '1/6'
  totalTime: any;
  bookmark: number = 0;
  screenType: string = "8";
  userId: any = localStorage.getItem('userId');
  constructor(private elementRef: ElementRef,
    public service: AdultsService, private adult: AdultsService) {
    this.startTime = Date.now()
  }

  ngOnInit() {
    this.adult.GetVisitedScreen(this.moduleId).subscribe((x: any) => {
      if (x) {
        var data = x.filter(x => x.ScreenNo.includes('75003'));
        this.vistedScreens = data?.sort((a, b) => +b.ScreenNo.substring(6, 7) > +a.ScreenNo.substring(6, 7) ? 1 : -1);
        if(window.history.state.day && window.history.state.day !=null ){
          this.getdayevent(window.history.state.day);
       }else{
        this.currentDay = +this.vistedScreens[0].ScreenNo.substring(6, 7) + 1;
        this.maxDay = this.currentDay;
        this.getdayevent(this.currentDay.toString());
       }
       setTimeout(() => {
        var data=document.getElementsByClassName('editable');
          document.getElementsByClassName('we_ft')[0].scrollTo({
              behavior: 'smooth',
              left: data[0].getBoundingClientRect().right-420
            })
        }, 2000); 
      }
    })
  }

  getdayevent(event) {
    if (event === 'intro') {
      this.startTime = Date.now()
      this.slideStart = 0;
      this.totalSlidesCount = 6;
      this.details = this.slideStart + '/' + this.totalSlidesCount;
      this.enableintro = true;
      this.currentDay = 0;
      this.enableday1 = false;
      this.enableday2 = false;
      this.enableday3 = false;
      this.enableday4 = false;
      this.enableday5 = false;
      this.enableday6 = false;
      this.screenNumber = "75003p0";
      this.dayclass = "intro";
      this.currentDay = 0;
    }
    else if (event === '1') {
      this.startTime = Date.now()
      this.isShowTranscript = false;
      this.slideStart = 0;
      this.currentDay = 1;
      this.totalSlidesCount = 5;
      this.details = this.slideStart + '/' + this.totalSlidesCount;
      this.enableintro = false;
      this.enableday1 = true;
      this.enableday2 = false;
      this.enableday3 = false;
      this.enableday4 = false;
      this.enableday5 = false;
      this.enableday6 = false;
      this.screenNumber = "75003p1";
      this.dayclass = '1';
    }
    else if (event === '2') {
      this.startTime = Date.now()
      this.slideStart = 0;
      this.currentDay = 2;
      this.totalSlidesCount = 7;
      this.details = this.slideStart + '/' + this.totalSlidesCount;
      this.enableintro = false;
      this.enableday1 = false;
      this.enableday2 = true;
      this.enableday3 = false;
      this.enableday4 = false;
      this.enableday5 = false;
      this.screenNumber = "75003p2";
      this.dayclass = '2';
    }
    else if (event === '3') {
      this.startTime = Date.now()
      this.slideStart = 0;
      this.currentDay = 3;
      this.totalSlidesCount = 4;
      this.details = this.slideStart + '/' + this.totalSlidesCount;
      this.enableintro = false;
      this.enableday1 = false;
      this.enableday2 = false;
      this.enableday3 = true;
      this.enableday4 = false;
      this.enableday5 = false;
      this.enableday6 = false;
      this.screenNumber = "75003p3";
      this.dayclass = '3';
    }
    else if (event === '4') {
      this.startTime = Date.now()
      this.slideStart = 0;
      this.totalSlidesCount = 5;
      this.currentDay = 4;
      this.details = this.slideStart + '/' + this.totalSlidesCount;
      this.enableintro = false;
      this.enableday1 = false;
      this.enableday2 = false;
      this.enableday3 = false;
      this.enableday4 = true;
      this.enableday5 = false;
      this.enableday6 = false;
      this.screenNumber = "75003p4";
      this.dayclass = '4';
    }
    else if (event === '5') {
      this.startTime = Date.now()
      this.slideStart = 0;
      this.totalSlidesCount = 6;
      this.currentDay = 5;
      this.details = this.slideStart + '/' + this.totalSlidesCount;
      this.enableintro = false;
      this.enableday1 = false;
      this.enableday2 = false;
      this.enableday3 = false;
      this.enableday4 = false;
      this.enableday5 = true;
      this.enableday5 = true;
      this.enableday6 = false;
      this.screenNumber = "75003p5";
      this.dayclass = '5';
    }
    else if (event === '6') {
      this.startTime = Date.now()
      this.slideStart = 0;
      this.totalSlidesCount = 5;
      this.currentDay = 6
      this.details = this.slideStart + '/' + this.totalSlidesCount;
      this.enableintro = false;
      this.enableday1 = false;
      this.enableday2 = false;
      this.enableday3 = false;
      this.enableday4 = false;
      this.enableday5 = false;
      this.enableday6 = true;
      this.screenNumber = "75003p6";
      this.dayclass = '6';
    }
    this.next();
  }

  next() {
    this.nextDay = null;
    setTimeout(() => {
      if (this.slideStart < this.totalSlidesCount) {
        this.slideStart = this.slideStart + 1;
        if (this.slideStart == this.totalSlidesCount) {
          this.nextDay = this.currentDay + 1;
          setTimeout(() => {
            this.endTime = Date.now();
            this.totalTime = this.endTime - this.startTime;
            if (this.userId !== 563) this.submitProgress();
          }, 400);
        }

      } else if (this.slideStart == this.totalSlidesCount) {
        this.currentDay = this.currentDay + 1;
        this.vistedScreens.push({
          "ScreenNo": '75003p' + (parseInt(this.screenNumber.substring(6, 7))),
          "ModuleID": 75,
          "SessionID": 0,
        })
        this.getdayevent(this.currentDay.toString());
      } else {
        this.slideStart = 1;
      }
      this.details = (this.slideStart > 9 ? this.slideStart : '0' + this.slideStart) + '/' + (this.totalSlidesCount > 9 ? this.totalSlidesCount : '0' + this.totalSlidesCount);
      var data = this.elementRef.nativeElement.querySelectorAll('.active')[1]?.firstChild?.children[0]?.
        children[1]?.children[0]?.lastChild?.classList.value;
      if (data == undefined) {
        data = this.elementRef.nativeElement.querySelectorAll('.active')[0]?.firstChild?.children[0]?.
          children[1]?.children[0]?.lastChild?.classList.value;
      }
      if (data == 'audio-test') {
        this.isShowTranscript = true;
      } else {
        this.isShowTranscript = false;
        this.isShowAudio = false;
      }
    }, 700);
  }
  getClass(day) {
    var dayclass = '';
    var className = '';
    if (day === '75003p0') {
      dayclass = "0";
    }
    else if (day === '75003p1') {
      dayclass = '1';
    }
    else if (day === '75003p2') {
      dayclass = '2';
    }
    else if (day === '75003p3') {
      dayclass = '3';
    }
    else if (day === '75003p4') {
      dayclass = '4';
    }
    else if (day === '75003p5') {
      dayclass = '5';
    }
    else if (day === '75003p6') {
      dayclass = '6';
    }

    if (this.currentDay.toString() == dayclass) {
      className += 'editable ';
    }
    if (this.vistedScreens.some(x => x.ScreenNo == day)) {
      className += 'inactive ';
    }
    if (this.nextDay == +(dayclass)) {
      className = 'nextDayButton ';
    }
    return className;
  }
  back() {
    this.nextDay = null;
    setTimeout(() => {
      if (this.slideStart < 1) {
        this.slideStart = this.totalSlidesCount
      }
      else if (this.slideStart == 1) {
        this.currentDay = this.currentDay - 1;
        this.getdayevent(this.currentDay.toString())
      }
      else {
        this.slideStart = this.slideStart - 1;
      }
      this.details = (this.slideStart > 9 ? this.slideStart : '0' + this.slideStart) + '/' + (this.totalSlidesCount > 9 ? this.totalSlidesCount : '0' + this.totalSlidesCount);
      var data = this.elementRef.nativeElement.querySelectorAll('.active')[1]?.firstChild?.children[0]?.
        children[1]?.children[0]?.lastChild?.classList.value
      if (data == 'audio-test') {
        this.isShowTranscript = true;
      } else {
        this.isShowTranscript = false;
        this.isShowAudio = false;
      }
    }, 700);
  }

  submitProgress() {
    this.service.submitProgressText({
      "ScrNumber": this.screenNumber,
      "UserId": +this.userId,
      "BookMark": this.bookmark,
      "ModuleId": this.moduleId,
      "screenType": this.screenType,
      "timeSpent": this.totalTime
    }).subscribe(res => {

      // this.bookmarkList=res.GetBkMrkScr.map(a=>parseInt(a.ScrNo))
      // localStorage.setItem("bookmarkList",JSON.stringify(this.bookmarkList))
    },
      error => { console.log(error) },
      () => {
        //this.router.navigate(['/adults/conditioning/s234'])
      })
  }

  changeType() {
    if (this.isShowTranscript) {
      this.isShowTranscript = false;
      this.isShowAudio = true;
    } else {
      this.isShowTranscript = true;
      this.isShowAudio = false;
    }
  }

}