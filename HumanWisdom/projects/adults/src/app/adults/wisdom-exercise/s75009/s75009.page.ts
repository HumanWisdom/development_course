import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdultsService } from '../../adults.service';
import { SharedService } from '../../../../../../shared/services/shared.service';
declare var $: any;
@Component({
  selector: 'HumanWisdom-s75009',
  templateUrl: './s75009.page.html',
  styleUrls: ['./s75009.page.scss'],
})
export class S75009Page implements OnInit {
  dayclass = 'intro'
  isShowTranscript = false;
  isShowAudio = false;
  isShowBulb = false;
  hintValue: any;
  showHintModal = false;
  hintMessage = '';
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
  lastClick = 0;
  delay = 20;
  methodSTartTime: any;
  methodEndTime: any;
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
  screenNumber = '75009p0';
  totalTime: any;
  bookmark: number = 0;
  screenType: string = "8";
  DaysWithIntro=11;
  enableAlert= false;
  userId: any = localStorage.getItem('userId');
  totaldays=10;
  isShowButton = false;
  constructor(private elementRef: ElementRef,
    public service: AdultsService, private adult: AdultsService,public router :Router) {
    this.startTime = Date.now()
  }

  ngOnInit() {
    this.adult.GetWisdomScreens().subscribe((x: any) => {
   if (x) {
    var data = x.filter(x => x.ScreenNo.includes('75009'));
    
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
    }else if(visitedScreen.length == this.DaysWithIntro || completed.length == this.DaysWithIntro){
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
      this.screenNumber = "75009p0";
      this.dayclass = '0';
      this.currentDay = 0;
    }
    else if (event === '1') {
      this.isShowTranscript = false;
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
      this.screenNumber = "75009p1";
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
      this.screenNumber = "75009p2";
      this.dayclass = '2';
      this.currentDay = 2;
    }
    else if (event === '3') {
      this.slideStart = 0;
      this.totalSlidesCount = 4;
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
      this.screenNumber = "75009p3";
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
      this.screenNumber = "75009p4";
      this.dayclass = '4';
      this.currentDay = 4;
    }
    else if (event === '5') {
      this.slideStart = 0;
      this.totalSlidesCount = 5;
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
      this.screenNumber = "75009p5";
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
      this.screenNumber = "75009p6";
      this.dayclass = '6';
      this.currentDay = 6;
    }
    else if (event === '7') {
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
      this.enableday7 = true;
      this.enableday8 = false;
      this.enableday9 = false;
      this.enableday10 = false;
      this.screenNumber = "75009p7";
      this.dayclass = '7';
      this.currentDay = 7;
    }
    else if (event === '8') {
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
      this.enableday8 = true;
      this.enableday9 = false;
      this.enableday10 = false;
      this.screenNumber = "75009p8";
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
      this.screenNumber = "75009p9";
      this.dayclass = '9';
      this.currentDay = 9;
    }
    else if (event === '10') {
      this.slideStart = 0;
      this.totalSlidesCount = 10;
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
      this.screenNumber = "75009p10";
      this.dayclass = '10';
      this.currentDay = 10;
    }
    this.next();
    setTimeout(() => {
      var element = document.querySelector(".we_ft .editable");
      element.scrollIntoView({behavior: "smooth" ,inline: "center"});
  }, 2000);
  }

  next() {
    window.scrollTo(0,0);
    this.nextDay = null;
    this.resetHintValue();

    setTimeout(() => {
      if (this.slideStart < this.totalSlidesCount) {
        this.slideStart++;

        if (this.slideStart == this.totalSlidesCount) {
          this.nextDay = this.currentDay + 1;
          setTimeout(() => {
            this.endTime = Date.now();
            this.totalTime = this.endTime - this.startTime;
            if (this.userId !== 563) this.submitProgress();
          }, 400);
        }

      } else if (this.slideStart == this.totalSlidesCount) {
        this.vistedScreens.push({
          "ScreenNo": this.screenNumber,
          "ModuleID": 75,
          "SessionID": 0,
        });

        this.currentDay++;

        if (this.currentDay > 10) { // After Day 10 go to next session
          this.router.navigate(['adults/wisdom-exercise/s75010']);
        } else {
          this.getdayevent(this.currentDay.toString());
        }
      } else {
        this.slideStart = 1;
      }

      this.details = (this.slideStart > 9 ? this.slideStart : '0' + this.slideStart) 
        + '/' + (this.totalSlidesCount > 9 ? this.totalSlidesCount : '0' + this.totalSlidesCount);

      let data = this.elementRef.nativeElement.querySelectorAll('.active')[1]?.firstChild?.children[0]
        ?.children[1]?.children[0]?.lastChild?.classList.value;

      if (!data) {
        data = this.elementRef.nativeElement.querySelectorAll('.active')[0]?.firstChild?.children[0]
          ?.children[1]?.children[0]?.lastChild?.classList.value;
      }

      if (data === "audio-test") {
        this.isShowButton = true;
        this.isShowTranscript = true;
        this.isShowAudio = false;
      } else {
        this.isShowButton = false;
        this.isShowTranscript = false;
        this.isShowAudio = false;
      }

      this.setHint();
    }, 700);
  }

  getClass(day) {
    return SharedService.GetExerciseClassName(day,this.currentDay,this.vistedScreens,this.nextDay)
  }

  back() {
    window.scrollTo(0,0);
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
      $('#mdp_carousel_intro, #mdp_carousel_day1, #mdp_carousel_day2, #mdp_carousel_day3, #mdp_carousel_day4, #mdp_carousel_day5, #mdp_carousel_day6, #mdp_carousel_day7, #mdp_carousel_day8, #mdp_carousel_day9, #mdp_carousel_day10').carousel('prev');
    this.back();
    }else if(eventText.includes("left")){
      $('#mdp_carousel_intro, #mdp_carousel_day1, #mdp_carousel_day2, #mdp_carousel_day3, #mdp_carousel_day4, #mdp_carousel_day5, #mdp_carousel_day6, #mdp_carousel_day7, #mdp_carousel_day8, #mdp_carousel_day9, #mdp_carousel_day10').carousel('next');
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
      $('#mdp_carousel_intro, #mdp_carousel_day1, #mdp_carousel_day2, #mdp_carousel_day3, #mdp_carousel_day4, #mdp_carousel_day5, #mdp_carousel_day6, #mdp_carousel_day7, #mdp_carousel_day8, #mdp_carousel_day9, #mdp_carousel_day10').carousel('next');
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
    try {
      const activeSlides = document.getElementsByClassName('active');
      if(activeSlides && activeSlides.length>0){
        const container: any = activeSlides[0];
        const journalWe = container.querySelector('app-journal-we') as any;
        if(journalWe!=null && journalWe.dataset && journalWe.dataset.hint){
          this.hintValue = journalWe.dataset;
          this.isShowBulb = true;
          const element = document.getElementById('hinttext');
          if(element){
            element.innerHTML = this.hintValue.hint;
            console.log('Hint text set:', this.hintValue.hint);
          } else {
            console.log('Hint text element not found');
          }
        }
      }
    } catch (error) {
      console.error('Error setting hint:', error);
    }
  }

openHintModal() {
  try {
    // Get the hint from the currently active carousel item
    const activeItem = document.querySelector('.carousel-item.active app-journal-we');
    if (activeItem) {
      const hint = (activeItem as HTMLElement).getAttribute('data-hint');
      this.hintMessage = hint || '';
    }

    this.showHintModal = true;

    const modalElement = document.getElementById('ex_modal');
    if (modalElement) {
      modalElement.classList.add('show');
      document.body.classList.add('modal-open');

      // Add backdrop if it doesn't exist
      if (!document.querySelector('.modal-backdrop')) {
        const backdrop = document.createElement('div');
        backdrop.className = 'modal-backdrop fade show';
        document.body.appendChild(backdrop);
      }
    }
  } catch (error) {
    console.error('Error opening modal:', error);
  }
}

closeHintModal() {
  try {
    this.showHintModal = false;
    const modalElement = document.getElementById('ex_modal');
    if (modalElement) {
      modalElement.classList.remove('show');
      document.body.classList.remove('modal-open');

      const backdrop = document.querySelector('.modal-backdrop');
      if (backdrop) {
        backdrop.remove();
      }
    }
  } catch (error) {
    console.error('Error closing modal:', error);
  }
}

}