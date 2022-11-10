import { Component, ElementRef, OnInit } from '@angular/core';
import { AdultsService } from '../../adults.service';
//import { colorSets } from '@swimlane/ngx-charts';

@Component({
  selector: 'HumanWisdom-s75011',
  templateUrl: './s75011.page.html',
  styleUrls: ['./s75011.page.scss'],
})
export class S75011Page implements OnInit {
  dayclass = 'intro'
  isShowTranscript=false;
  isShowAudio=false;
  enableintro = true;
  enableday1 = false;
  enableday2 = false;
  enableday3 = false;
  enableday4 = false;
  enableday5 = false;
  enableday6 = false;
  enableday7 = false;
  enableday8 = false;

  slideStart=0;
  totalSlidesCount=3;
  details: string = '1/3'
  vistedScreens: any[] = [];
  currentDay: number = 0;
  nextDay: number = null;
  maxDay = 0;
  endTime: any;
  startTime: any;
  moduleId: number = 75;
  screenNumber='750011p0';
  totalTime:any;
  bookmark: number = 0;
  screenType: string = "8";
  userId: string = localStorage.getItem('userId');
  constructor(private elementRef: ElementRef,
    public service: AdultsService, private adult: AdultsService) {
    this.startTime = Date.now()
  }

  ngOnInit() {
    this.adult.GetVisitedScreen(this.moduleId).subscribe((x: any) => {
      if (x) {
        var data =x.filter(x=>x.ScreenNo.includes('750011'));
        this.vistedScreens = data?.sort((a, b) => +b.ScreenNo.substring(7, b.ScreenNo.length) > +a.ScreenNo.substring(7,  b.ScreenNo.length) ? 1 : -1);
        this.currentDay = +this.vistedScreens[0].ScreenNo.substring(7,this.vistedScreens[0].ScreenNo.length ) + 1;
        this.maxDay = this.currentDay;
        this.getdayevent(this.currentDay.toString());
      }
    });
  }
  getdayevent(event) {
    if (event === 'intro' || event == '0') {
      this.slideStart=0;
      this.totalSlidesCount=3;
      this.details=this.slideStart+'/'+this.totalSlidesCount;
      this.enableintro = true;
      this.enableday1 = false;
      this.enableday2 = false;
      this.enableday3 = false;
      this.enableday4 = false;
      this.enableday5 = false;
      this.enableday6 = false;
      this.enableday7 = false;
      this.enableday8 = false;
      this.screenNumber = "750011p0";
      this.dayclass = "0";
      this.currentDay = 0;
    }
    else if (event === '1') {
      this.isShowTranscript=false;
      this.slideStart=0;
      this.totalSlidesCount=7;
      this.details=this.slideStart+'/'+this.totalSlidesCount;
      this.enableintro = false;
      this.enableday1 = true;
      this.enableday2 = false;
      this.enableday3 = false;
      this.enableday4 = false;
      this.enableday5 = false;
      this.enableday6 = false;
      this.enableday7 = false;
      this.enableday8 = false;
      this.screenNumber = "750011p1";
      this.dayclass = "1";
      this.currentDay = 1;
    }
    else if (event === '2') {
      this.slideStart=0;
      this.totalSlidesCount=7;
      this.details=this.slideStart+'/'+this.totalSlidesCount;
      this.enableintro = false;
      this.enableday1 = false;
      this.enableday2 = true;
      this.enableday3 = false;
      this.enableday4 = false;
      this.enableday5 = false;
      this.enableday6 = false;
      this.enableday7 = false;
      this.enableday8 = false;
      this.screenNumber = "750011p2";
      this.dayclass = "2";
      this.currentDay = 2;
    }
    else if (event === '3') {
      this.slideStart=0;
      this.totalSlidesCount=7;
      this.details=this.slideStart+'/'+this.totalSlidesCount;
      this.enableintro = false;
      this.enableday1 = false;
      this.enableday2 = false;
      this.enableday3 = true;
      this.enableday4 = false;
      this.enableday5 = false;
      this.enableday6 = false;
      this.enableday7 = false;
      this.enableday8 = false;
      this.screenNumber = "750011p3";
      this.dayclass = "3";
      this.currentDay = 3;
    }
    else if (event === '4') {
      this.slideStart=0;
      this.totalSlidesCount=5;
      this.details=this.slideStart+'/'+this.totalSlidesCount;
      this.enableintro = false;
      this.enableday1 = false;
      this.enableday2 = false;
      this.enableday3 = false;
      this.enableday4 = true;
      this.enableday5 = false;
      this.enableday6 = false;
      this.enableday7 = false;
      this.enableday8 = false;
      this.screenNumber = "750011p4";
      this.dayclass = "4";
      this.currentDay = 4;
    }
    else if (event === '5') {
      this.slideStart=0;
      this.totalSlidesCount=7;
      this.details=this.slideStart+'/'+this.totalSlidesCount;
      this.enableintro = false;
      this.enableday1 = false;
      this.enableday2 = false;
      this.enableday3 = false;
      this.enableday4 = false;
      this.enableday5 = true;
      this.enableday6 = false;
      this.enableday7 = false;
      this.enableday8 = false;
      this.screenNumber = "750011p5";
      this.dayclass = "5";
      this.currentDay = 5;
    }
    else if (event === '6') {
      this.slideStart=0;
      this.totalSlidesCount=7;
      this.details=this.slideStart+'/'+this.totalSlidesCount;
      this.enableintro = false;
      this.enableday1 = false;
      this.enableday2 = false;
      this.enableday3 = false;
      this.enableday4 = false;
      this.enableday5 = false;
      this.enableday6 = true;
      this.enableday7 = false;
      this.enableday8 = false;
      this.screenNumber = "750011p6";
      this.dayclass = "6";
      this.currentDay = 6;
    }
    else if (event === '7') {
      this.slideStart=0;
      this.totalSlidesCount=6;
      this.details=this.slideStart+'/'+this.totalSlidesCount;
      this.enableintro = false;
      this.enableday1 = false;
      this.enableday2 = false;
      this.enableday3 = false;
      this.enableday4 = false;
      this.enableday5 = false;
      this.enableday6 = false;
      this.enableday7 = true;
      this.enableday8 = false;
      this.screenNumber = "750011p7";
      this.dayclass = "7";
      this.currentDay = 7;
    }
    else if (event === '8') {
      this.slideStart=0;
      this.totalSlidesCount=6;
      this.details=this.slideStart+'/'+this.totalSlidesCount;
      this.enableintro = false;
      this.enableday1 = false;
      this.enableday2 = false;
      this.enableday3 = false;
      this.enableday4 = false;
      this.enableday5 = false;
      this.enableday6 = false;
      this.enableday7 = false;
      this.enableday8 = true;
      this.screenNumber = "750011p8";
      this.dayclass = "8";
      this.currentDay = 8;
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
            this.submitProgress();
          }, 400);
        }

      } else if (this.slideStart == this.totalSlidesCount) {
        this.currentDay = this.currentDay + 1;
        this.vistedScreens.push({
          "ScreenNo": '750011p' + (parseInt(this.screenNumber.substring(7, this.screenNumber.length))),
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
    if (day === '750011p0') {
      dayclass = "0";
    }
    else if (day === '750011p1') {
      dayclass = '1';
    }
    else if (day === '750011p2') {
      dayclass = '2';
    }
    else if (day === '750011p3') {
      dayclass = '3';
    }
    else if (day === '750011p4') {
      dayclass = '4';
    }
    else if (day === '750011p5') {
      dayclass = '5';
    }
    else if (day === '750011p6') {
      dayclass = '6';
    }
    else if (day === '750011p7') {
      dayclass = '7';
    }
    else if (day === '750011p7') {
      dayclass = '8';
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