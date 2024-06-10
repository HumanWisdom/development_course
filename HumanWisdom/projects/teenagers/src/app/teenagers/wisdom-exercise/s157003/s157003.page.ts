import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import "bcswipe";
import { TeenagersService } from '../../teenagers.service';
import { SharedService } from '../../../../../../shared/services/shared.service';

declare var $: any;
@Component({
  selector: 'HumanWisdom-s157003',
  templateUrl: './s157003.page.html',
  styleUrls: ['./s157003.page.scss'],
})
export class S157003Page implements OnInit {
  dayclass = 'intro'
  isShowTranscript = false;
  isShowAudio = false;
  isShowButton = false;
  enableintro = true;
  enableday1 = false;
  enableday2 = false;
  enableday3 = false;
  enableday4 = false;
  enableday5 = false;
  enableday6 = false;
  enableAlert = false;
  vistedScreens: any[] = [];
  currentDay: number = 0;
  nextDay: number = null;
  maxDay = 0;
  endTime: any;
  startTime: any;
  moduleId: number = 157;
  slideStart = 0;
  totalSlidesCount = 6;
  screenNumber = '157003p0';
  details: string = '1/6'
  totalTime: any;
  bookmark: number = 0;
  screenType: string = "8";
  userId: any = localStorage.getItem('userId');
  totalDays=6;
  DaysWithIntro=7;
  lastClick = 0;
  delay = 20;
  methodSTartTime: any;
  methodEndTime: any;
  constructor(private elementRef: ElementRef,
    public service: TeenagersService, private teenagers: TeenagersService,public router:Router) {
    this.startTime = Date.now()
  }

  ngOnInit() {
    this.teenagers.GetWisdomScreens(157).subscribe((x: any) => {
   if (x) {
    var data = x.filter(x => x.ScreenNo.includes('157003'));
    
    let completed=data?.filter(x=>x.completed=="0");  
    
    let visitedScreen = data?.filter(x=>x.completed=="1");  

    for(let item of visitedScreen){
      this.vistedScreens.push({
        "ScreenNo": item.ScreenNo,
        "ModuleID": 157,
        "SessionID": 0,
     });
    }
     if(window.history.state.day && window.history.state.day !=null ){
      this.getdayevent(window.history.state.day);
     }else if(visitedScreen.length == this.DaysWithIntro || completed.length == this.DaysWithIntro){
           this.currentDay=0;
      this.getdayevent(this.currentDay.toString());
     }
     else if(completed.length>0){
      this.currentDay = +completed[0].ScreenNo.substring(7, 8);
      this.getdayevent(this.currentDay.toString());
     }
  
   }
   });
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
      this.screenNumber = "157003p0";
      this.dayclass = "intro";
      this.currentDay = 0;
    }
    else if (event === '1') {
      this.startTime = Date.now()
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
      this.screenNumber = "157003p1";
      this.dayclass = '1';
    }
    else if (event === '2') {
      this.startTime = Date.now()
      this.slideStart = 0;
      this.currentDay = 2;
      this.totalSlidesCount = 8;
      this.details = this.slideStart + '/' + this.totalSlidesCount;
      this.enableintro = false;
      this.enableday1 = false;
      this.enableday2 = true;
      this.enableday3 = false;
      this.enableday4 = false;
      this.enableday5 = false;
      this.screenNumber = "157003p2";
      this.dayclass = '2';
    }
    else if (event === '3') {
      this.startTime = Date.now()
      this.slideStart = 0;
      this.currentDay = 3;
      this.totalSlidesCount = 5;
      this.details = this.slideStart + '/' + this.totalSlidesCount;
      this.enableintro = false;
      this.enableday1 = false;
      this.enableday2 = false;
      this.enableday3 = true;
      this.enableday4 = false;
      this.enableday5 = false;
      this.enableday6 = false;
      this.screenNumber = "157003p3";
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
      this.screenNumber = "157003p4";
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
      this.screenNumber = "157003p5";
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
      this.screenNumber = "157003p6";
      this.dayclass = '6';
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
          "ScreenNo": '157003p' + (parseInt(this.screenNumber.substring(7, 8))),
          "ModuleID": 157,
          "SessionID": 0,
        })
        if(this.currentDay>this.totalDays){
          this.router.navigate(['teenagers/wisdom-exercise/s157004']);
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
  // getClass(day) {
  //   var dayclass = '';
  //   var className = '';
  //   if (day === '157003p0') {
  //     dayclass = "0";
  //   }
  //   else if (day === '157003p1') {
  //     dayclass = '1';
  //   }
  //   else if (day === '157003p2') {
  //     dayclass = '2';
  //   }
  //   else if (day === '157003p3') {
  //     dayclass = '3';
  //   }
  //   else if (day === '157003p4') {
  //     dayclass = '4';
  //   }
  //   else if (day === '157003p5') {
  //     dayclass = '5';
  //   }
  //   else if (day === '157003p6') {
  //     dayclass = '6';
  //   }

  //   if (this.currentDay.toString() == dayclass) {
  //     className += 'editable ';
  //   }
  //   if (this.vistedScreens.some(x => x.ScreenNo == day)) {
  //     className += 'inactive ';
  //   }
  //   if (this.nextDay == +(dayclass)) {
  //     className = 'nextDayButton ';
  //   }
  //   return className;
  // }

  getClass(day) {
    return SharedService.GetExerciseClassName(day,this.currentDay,this.vistedScreens,this.nextDay)
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
        //this.router.navigate(['/teenagerss/conditioning/s234'])
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
  guestEvent($event){
    this.enableAlert = true;
  }
  getAlertcloseEvent(event) {
    if(event=='ok'){
      this.enableAlert = false;
      this.router.navigate(['/log-in']);
    }else{
      this.enableAlert = false;
    }
  }
}