import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeenagersService } from '../../teenagers.service';
import { SharedService } from '../../../../../../shared/services/shared.service';
declare var $: any;
@Component({
  selector: 'HumanWisdom-s157007',
  templateUrl: './s157007.page.html',
  styleUrls: ['./s157007.page.scss'],
})
export class S157007Page implements OnInit {
  dayclass = 'intro'
  enableAlert=false;
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

  slideStart = 0;
  totalSlidesCount = 4;
  totaldays=7;
  details: string = '1/4'
  vistedScreens: any[] = [];
  currentDay: number = 0;
  nextDay: number = null;
  maxDay = 0;
  endTime: any;
  startTime: any;
  moduleId: number = 157;
  screenNumber = '157007p0';
  DaysWithIntro = 8;
  totalTime: any;
  bookmark: number = 0;
  screenType: string = "8";
  userId: any = localStorage.getItem('userId');
  lastClick = 0;
  delay = 20;
  isShowButton =false;
  methodSTartTime: any;
  methodEndTime: any;
  isShowBulb=false;
  hintValue:any;
  constructor(private elementRef: ElementRef,
    public service: TeenagersService, private teenagers: TeenagersService,public router:Router) {
    this.startTime = Date.now()
  }

  ngOnInit() {
    this.teenagers.GetWisdomScreens(157).subscribe((x: any) => {
   if (x) {
    var data = x.filter(x => x.ScreenNo.includes('157007'));
    
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
     }
     
     else if(visitedScreen.length == this.DaysWithIntro || completed.length == this.DaysWithIntro){
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

  getdayevent(event) {
    if (event === 'intro') {
      this.slideStart = 0;
      this.totalSlidesCount = 4;
      this.details = this.slideStart + '/' + this.totalSlidesCount;
      this.enableintro = true;
      this.enableday1 = false;
      this.enableday2 = false;
      this.enableday3 = false;
      this.enableday4 = false;
      this.enableday5 = false;
      this.enableday6 = false;
      this.enableday7 = false;
      this.screenNumber = "157007p0";
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
      this.screenNumber = "157007p1";
      this.dayclass = '1';
      this.currentDay = 1;
    }
    else if (event === '2') {
      this.slideStart = 0;
      this.totalSlidesCount = 4;
      this.details = this.slideStart + '/' + this.totalSlidesCount;
      this.enableintro = false;
      this.enableday1 = false;
      this.enableday2 = true;
      this.enableday3 = false;
      this.enableday4 = false;
      this.enableday5 = false;
      this.enableday6 = false;
      this.enableday7 = false;
      this.screenNumber = "157007p2";
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
      this.screenNumber = "157007p3";
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
      this.screenNumber = "157007p4";
      this.dayclass = '4';
      this.currentDay = 4;
    }
    else if (event === '5') {
      this.slideStart = 0;
      this.totalSlidesCount = 4;
      this.details = this.slideStart + '/' + this.totalSlidesCount;
      this.enableintro = false;
      this.enableday1 = false;
      this.enableday2 = false;
      this.enableday3 = false;
      this.enableday4 = false;
      this.enableday5 = true;
      this.enableday6 = false;
      this.enableday7 = false;
      this.screenNumber = "157007p5";
      this.dayclass = '5';
      this.currentDay = 5;
    }
    else if (event === '6') {
      this.slideStart = 0;
      this.totalSlidesCount = 5;
      this.details = this.slideStart + '/' + this.totalSlidesCount;
      this.enableintro = false;
      this.enableday1 = false;
      this.enableday2 = false;
      this.enableday3 = false;
      this.enableday4 = false;
      this.enableday5 = false;
      this.enableday6 = true;
      this.enableday7 = false;
      this.screenNumber = "157007p6";
      this.dayclass = '6';
      this.currentDay = 6;
    }
    else if (event === '7') {
      this.slideStart = 0;
      this.totalSlidesCount = 9;
      this.details = this.slideStart + '/' + this.totalSlidesCount;
      this.enableintro = false;
      this.enableday1 = false;
      this.enableday2 = false;
      this.enableday3 = false;
      this.enableday4 = false;
      this.enableday5 = false;
      this.enableday6 = false;
      this.enableday7 = true;
      this.screenNumber = "157007p7";
      this.dayclass = '7';
      this.currentDay = 7;
    }
    this.next();
    setTimeout(() => {
      var element = document.querySelector(".we_ft .editable");
      element.scrollIntoView({behavior: "smooth" ,inline: "center"});
  }, 2000);
  }


  next() {
    this.nextDay = null;
    this.resetHintValue();
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
          "ScreenNo": '157007p' + (parseInt(this.screenNumber.substring(7, 8))),
          "ModuleID": 157,
          "SessionID": 0,
        })
        if(this.currentDay>this.totaldays){
          this.router.navigate(['teenagers/wisdom-exercise/s157008']);
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
      this.setHint();
    }, 700);
  }

  // getClass(day) {
  //   var dayclass = '';
  //   var className = '';
  //   if (day === '157007p0') {
  //     dayclass = "0";
  //   }
  //   else if (day === '157007p1') {
  //     dayclass = '1';
  //   }
  //   else if (day === '157007p2') {
  //     dayclass = '2';
  //   }
  //   else if (day === '157007p3') {
  //     dayclass = '3';
  //   }
  //   else if (day === '157007p4') {
  //     dayclass = '4';
  //   }
  //   else if (day === '157007p5') {
  //     dayclass = '5';
  //   }
  //   else if (day === '157007p6') {
  //     dayclass = '6';
  //   }
  //   else if (day === '157007p7') {
  //     dayclass = '7';
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
    this.resetHintValue();
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
        this.setHint();
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

  resetHintValue(){
    this.isShowBulb = false;
    this.hintValue = '';
  }

  setHint(){
    var hintDetails = document.getElementsByClassName('active');
    if(hintDetails && hintDetails!=null){
    var journalWe =  hintDetails[0].querySelector('app-journal-we') as any;
    if(journalWe!=null && journalWe.dataset.hint){
      this.hintValue = journalWe.dataset;
      this.isShowBulb = true;
      const element = document.getElementById('hinttext');
        element.innerHTML = this.hintValue.hint;
    }
    }
  }
}