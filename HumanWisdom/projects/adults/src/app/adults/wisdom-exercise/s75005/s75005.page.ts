import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdultsService } from '../../adults.service';
declare var $: any;
@Component({
  selector: 'HumanWisdom-s75005',
  templateUrl: './s75005.page.html',
  styleUrls: ['./s75005.page.scss'],
})
export class S75005Page implements OnInit {
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
  enableday7 = false;
  enableday8 = false;
  enableday9 = false;
  enableday10 = false;
  enableday11 = false;
  enableday12 = false;
  enableday13 = false;
  enableday14 = false;

  slideStart = 0;
  totalSlidesCount = 5;
  details: string = '1/5'
  vistedScreens: any[] = [];
  currentDay: number = 0;
  nextDay: number = null;
  maxDay = 0;
  endTime: any;
  startTime: any;
  moduleId: number = 75;
  screenNumber = '75005p0';
  totalTime: any;
  bookmark: number = 0;
  screenType: string = "8";
  totaldays=14;
  DaysWithIntro=15;
  userId: any = localStorage.getItem('userId');
  lastClick = 0;
  isShowButton = false;
  delay = 20;
  methodSTartTime: any;
  methodEndTime: any;
  constructor(private elementRef: ElementRef,
    public service: AdultsService, private adult: AdultsService,public router:Router) {
    this.startTime = Date.now()
  }

  onSwipe($event) {
    if (this.lastClick >= (Date.now() - this.delay))
  {
    return;
  }
    this.lastClick = Date.now();
    $event.srcEvent.stopPropagation()
    $event.srcEvent.cancelBubble=true;
    this.methodSTartTime=Date.now();
    let eventText="";
    const x = Math.abs($event.deltaX) > 40 ? ($event.deltaX > 0 ? 'right' : 'left'):'';
    const y = Math.abs($event.deltaY) > 40 ? ($event.deltaY > 0 ? 'down' : 'up') : '';
  
    eventText += `${x} ${y}<br/>`;
    if(eventText.includes("right")){
      $('#mdp_carousel').carousel('prev');
    this.back();
    }else if(eventText.includes("left")){
      $('#mdp_carousel').carousel('next');
      this.next();
    }
    else if(eventText.includes('down')){
      window.scrollTo({
        behavior:'smooth',
        top:0
      });
      return;
    }
    else if(eventText.includes('up')){
      window.scrollTo({
        behavior:'smooth',
        top:800
      });
    }
    else{
      this.next();
      $('#mdp_carousel').carousel('next');
    }
  }
  
  ngOnInit() {
     this.adult.GetWisdomScreens().subscribe((x: any) => {
    if (x) {
     var data = x.filter(x => x.ScreenNo.includes('75005'));
     
     let completed=data?.filter(x=>x.completed=="0");  
     
     let visitedScreen = data?.filter(x=>x.completed=="1");  

     for(let item of visitedScreen){
      this.vistedScreens.push({
        "ScreenNo": item.ScreenNo,
        "ModuleID": 75,
        "SessionID": 0,
     });
    }

    if(window.history.state.day && window.history.state.day !=null ){
      this.getdayevent(window.history.state.day);
     }
     
     else if(visitedScreen.length == this.DaysWithIntro || completed.length == this.DaysWithIntro){
           this.currentDay=0;
      this.getdayevent(this.currentDay.toString());
     }
     
     else if(completed.length>0){
      this.currentDay = +completed[0].ScreenNo.substring(6, 7);
      this.getdayevent(this.currentDay.toString());
     }
    }
    });
  }
  getdayevent(event) {
    if (event === 'intro') {
      this.slideStart = 0;
      this.totalSlidesCount = 5;
      this.details = this.slideStart + '/' + this.totalSlidesCount;
      this.enableintro = true;
      this.enableday1 = false;
      this.enableday2 = false;
      this.enableday3 = false;
      this.enableday4 = false;
      this.enableday5 = false;
      this.enableday6 = false;
      this.enableday7 = false;
      this.enableday8 = false;
      this.enableday9 = false;
      this.enableday10 = false;
      this.enableday11 = false;
      this.enableday12 = false;
      this.enableday13 = false;
      this.enableday14 = false;
      this.screenNumber = "75005p0";
      this.dayclass = '0';
      this.currentDay = 0;
    }
    else if (event === '1') {
      this.slideStart = 0;
      this.totalSlidesCount = 5;
      this.details = this.slideStart + '/' + this.totalSlidesCount;
      this.enableintro = false;
      this.enableday1 = true;
      this.enableday2 = false;
      this.enableday3 = false;
      this.enableday4 = false;
      this.enableday5 = false;
      this.enableday6 = false;
      this.enableday7 = false;
      this.enableday8 = false;
      this.enableday9 = false;
      this.enableday10 = false;
      this.enableday11 = false;
      this.enableday12 = false;
      this.enableday13 = false;
      this.enableday14 = false;
      this.screenNumber = "75005p1";
      this.dayclass = '1';
      this.currentDay = 1;
    }
    else if (event === '2') {
      this.slideStart = 0;
      this.totalSlidesCount = 5;
      this.details = this.slideStart + '/' + this.totalSlidesCount;
      this.enableintro = false;
      this.enableday1 = false;
      this.enableday2 = true;
      this.enableday3 = false;
      this.enableday4 = false;
      this.enableday5 = false;
      this.enableday6 = false;
      this.enableday7 = false;
      this.enableday8 = false;
      this.enableday9 = false;
      this.enableday10 = false;
      this.enableday11 = false;
      this.enableday12 = false;
      this.enableday13 = false;
      this.enableday14 = false;
      this.screenNumber = "75005p2";
      this.dayclass = '2';
      this.currentDay = 2;
    }
    else if (event === '3') {
      this.slideStart = 0;
      this.totalSlidesCount = 5;
      this.details = this.slideStart + '/' + this.totalSlidesCount;
      this.enableintro = false;
      this.enableday1 = false;
      this.enableday2 = false;
      this.enableday3 = true;
      this.enableday4 = false;
      this.enableday5 = false;
      this.enableday6 = false;
      this.enableday7 = false;
      this.enableday8 = false;
      this.enableday9 = false;
      this.enableday10 = false;
      this.enableday11 = false;
      this.enableday12 = false;
      this.enableday13 = false;
      this.enableday14 = false;
      this.screenNumber = "75005p3";
      this.dayclass = '3';
      this.currentDay = 3;
    }
    else if (event === '4') {
      this.slideStart = 0;
      this.totalSlidesCount = 6;
      this.details = this.slideStart + '/' + this.totalSlidesCount;
      this.enableintro = false;
      this.enableday1 = false;
      this.enableday2 = false;
      this.enableday3 = false;
      this.enableday4 = true;
      this.enableday5 = false;
      this.enableday6 = false;
      this.enableday7 = false;
      this.enableday8 = false;
      this.enableday9 = false;
      this.enableday10 = false;
      this.enableday11 = false;
      this.enableday12 = false;
      this.enableday13 = false;
      this.enableday14 = false;
      this.screenNumber = "75005p4";
      this.dayclass = '4';
      this.currentDay = 4;
    }
    else if (event === '5') {
      this.slideStart = 0;
      this.totalSlidesCount = 6;
      this.details = this.slideStart + '/' + this.totalSlidesCount;
      this.enableintro = false;
      this.enableday1 = false;
      this.enableday2 = false;
      this.enableday3 = false;
      this.enableday4 = false;
      this.enableday5 = true;
      this.enableday6 = false;
      this.enableday7 = false;
      this.enableday8 = false;
      this.enableday9 = false;
      this.enableday10 = false;
      this.enableday11 = false;
      this.enableday12 = false;
      this.enableday13 = false;
      this.enableday14 = false;
      this.screenNumber = "75005p5";
      this.dayclass = '5';
      this.currentDay = 5;
    }
    else if (event === '6') {
      this.slideStart = 0;
      this.totalSlidesCount = 6;
      this.details = this.slideStart + '/' + this.totalSlidesCount;
      this.enableintro = false;
      this.enableday1 = false;
      this.enableday2 = false;
      this.enableday3 = false;
      this.enableday4 = false;
      this.enableday5 = false;
      this.enableday6 = true;
      this.enableday7 = false;
      this.enableday8 = false;
      this.enableday9 = false;
      this.enableday10 = false;
      this.enableday11 = false;
      this.enableday12 = false;
      this.enableday13 = false;
      this.enableday14 = false;
      this.screenNumber = "75005p6";
      this.dayclass = '6';
      this.currentDay = 6;
    }
    else if (event === '7') {
      this.slideStart = 0;
      this.totalSlidesCount = 6;
      this.details = this.slideStart + '/' + this.totalSlidesCount;
      this.enableintro = false;
      this.enableday1 = false;
      this.enableday2 = false;
      this.enableday3 = false;
      this.enableday4 = false;
      this.enableday5 = false;
      this.enableday6 = false;
      this.enableday7 = true;
      this.enableday8 = false;
      this.enableday9 = false;
      this.enableday10 = false;
      this.enableday11 = false;
      this.enableday12 = false;
      this.enableday13 = false;
      this.enableday14 = false;
      this.screenNumber = "75005p7";
      this.dayclass = '7';
      this.currentDay = 7;
    }
    else if (event === '8') {
      this.slideStart = 0;
      this.totalSlidesCount = 5;
      this.details = this.slideStart + '/' + this.totalSlidesCount;
      this.enableintro = false;
      this.enableday1 = false;
      this.enableday2 = false;
      this.enableday3 = false;
      this.enableday4 = false;
      this.enableday5 = false;
      this.enableday6 = false;
      this.enableday7 = false;
      this.enableday8 = true;
      this.enableday9 = false;
      this.enableday10 = false;
      this.enableday11 = false;
      this.enableday12 = false;
      this.enableday13 = false;
      this.enableday14 = false;
      this.screenNumber = "75005p8";
      this.dayclass = '8';
      this.currentDay = 8;
    }
    else if (event === '9') {
      this.slideStart = 0;
      this.totalSlidesCount = 4;
      this.details = this.slideStart + '/' + this.totalSlidesCount;
      this.enableintro = false;
      this.enableday1 = false;
      this.enableday2 = false;
      this.enableday3 = false;
      this.enableday4 = false;
      this.enableday5 = false;
      this.enableday6 = false;
      this.enableday7 = false;
      this.enableday8 = false;
      this.enableday9 = true;
      this.enableday10 = false;
      this.enableday11 = false;
      this.enableday12 = false;
      this.enableday13 = false;
      this.enableday14 = false;
      this.screenNumber = "75005p9";
      this.dayclass = '9';
      this.currentDay = 9;
    }
    else if (event === '10') {
      this.slideStart = 0;
      this.totalSlidesCount = 5;
      this.details = this.slideStart + '/' + this.totalSlidesCount;
      this.enableintro = false;
      this.enableday1 = false;
      this.enableday2 = false;
      this.enableday3 = false;
      this.enableday4 = false;
      this.enableday5 = false;
      this.enableday6 = false;
      this.enableday7 = false;
      this.enableday8 = false;
      this.enableday9 = false;
      this.enableday10 = true;
      this.enableday11 = false;
      this.enableday12 = false;
      this.enableday13 = false;
      this.enableday14 = false;
      this.screenNumber = "75005p10";
      this.dayclass = '10';
      this.currentDay = 10;
    }
    else if (event === '11') {
      this.slideStart = 0;
      this.totalSlidesCount = 7;
      this.details = this.slideStart + '/' + this.totalSlidesCount;
      this.enableintro = false;
      this.enableday1 = false;
      this.enableday2 = false;
      this.enableday3 = false;
      this.enableday4 = false;
      this.enableday5 = false;
      this.enableday6 = false;
      this.enableday7 = false;
      this.enableday8 = false;
      this.enableday9 = false;
      this.enableday10 = false;
      this.enableday11 = true;
      this.enableday12 = false;
      this.enableday13 = false;
      this.enableday14 = false;
      this.screenNumber = "75005p11";
      this.dayclass = '11';
      this.currentDay = 11;
    }
    else if (event === '12') {
      this.slideStart = 0;
      this.totalSlidesCount = 6;
      this.details = this.slideStart + '/' + this.totalSlidesCount;
      this.enableintro = false;
      this.enableday1 = false;
      this.enableday2 = false;
      this.enableday3 = false;
      this.enableday4 = false;
      this.enableday5 = false;
      this.enableday6 = false;
      this.enableday7 = false;
      this.enableday8 = false;
      this.enableday9 = false;
      this.enableday10 = false;
      this.enableday11 = false;
      this.enableday12 = true;
      this.enableday13 = false;
      this.enableday14 = false;
      this.screenNumber = "75005p12";
      this.dayclass = '12';
      this.currentDay = 12;
    }
    else if (event === '13') {
      this.slideStart = 0;
      this.totalSlidesCount = 6;
      this.details = this.slideStart + '/' + this.totalSlidesCount;
      this.enableintro = false;
      this.enableday1 = false;
      this.enableday2 = false;
      this.enableday3 = false;
      this.enableday4 = false;
      this.enableday5 = false;
      this.enableday6 = false;
      this.enableday7 = false;
      this.enableday8 = false;
      this.enableday9 = false;
      this.enableday10 = false;
      this.enableday11 = false;
      this.enableday12 = false;
      this.enableday13 = true;
      this.enableday14 = false;
      this.screenNumber = "75005p13";
      this.dayclass = '13';
      this.currentDay = 13;
    }
    else if (event === '14') {
      this.slideStart = 0;
      this.totalSlidesCount = 5;
      this.details = this.slideStart + '/' + this.totalSlidesCount;
      this.enableintro = false;
      this.enableday1 = false;
      this.enableday2 = false;
      this.enableday3 = false;
      this.enableday4 = false;
      this.enableday5 = false;
      this.enableday6 = false;
      this.enableday7 = false;
      this.enableday8 = false;
      this.enableday9 = false;
      this.enableday10 = false;
      this.enableday11 = false;
      this.enableday12 = false;
      this.enableday13 = false;
      this.enableday14 = true;
      this.screenNumber = "75005p14";
      this.dayclass = '14';
      this.currentDay = 14;
    }
    this.next();
    setTimeout(() => {
          var element = document.querySelector(".we_ft .editable");
          element.scrollIntoView({behavior: "smooth" ,inline: "center"});
      }, 2000);

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
          "ScreenNo": '75005p' + (parseInt(this.screenNumber.substring(6, this.screenNumber.length))),
          "ModuleID": 75,
          "SessionID": 0,
        })
        if(this.currentDay>this.totaldays){
          this.router.navigate(['adults/wisdom-exercise/s75006']);
        }else{
          this.getdayevent(this.currentDay.toString());
        }
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
      if (data == "audio-test") {
        this.isShowButton=true;
        this.isShowTranscript = true;
        this.isShowAudio=false;
      } else {
        this.isShowButton=false;
        this.isShowTranscript = false;
        this.isShowAudio = false;
      }
    }, 700);
  }
  getClass(day) {
    var dayclass = '';
    var className = '';
    if (day === '75005p0') {
      dayclass = "0";
    }
    else if (day === '75005p1') {
      dayclass = '1';
    }
    else if (day === '75005p2') {
      dayclass = '2';
    }
    else if (day === '75005p3') {
      dayclass = '3';
    }
    else if (day === '75005p4') {
      dayclass = '4';
    }
    else if (day === '75005p5') {
      dayclass = '5';
    }
    else if (day === '75005p6') {
      dayclass = '6';
    }
    else if (day === '75005p7') {
      dayclass = '7';
    }
    else if (day === '75005p8') {
      dayclass = '8';
    }
    else if (day === '75005p9') {
      dayclass = '9';
    }
    else if (day === '75005p10') {
      dayclass = '10';
    }
    else if (day === '75005p11') {
      dayclass = '11';
    }
    else if (day === '75005p12') {
      dayclass = '12';
    }
    else if (day === '75005p13') {
      dayclass = '13';
    }
    else if (day === '75005p14') {
      dayclass = '14';
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
        children[1]?.children[0]?.lastChild?.classList.value;
        if (data == undefined) {
          data = this.elementRef.nativeElement.querySelectorAll('.active')[0]?.firstChild?.children[0]?.
            children[1]?.children[0]?.lastChild?.classList.value;
        }
        if (data == "audio-test") {
          this.isShowButton=true;
          this.isShowTranscript = true;
          this.isShowAudio=false;
        } else {
          this.isShowButton=false;
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