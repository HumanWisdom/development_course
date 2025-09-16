import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TeenagersService } from '../../teenagers.service';
import { JournalWeComponent } from '../../../../../../shared/component/journal-we/journal-we.component';
import { SharedService } from '../../../../../../shared/services/shared.service';

declare var $: any;
@Component({
  selector: 'HumanWisdom-s157004',
  templateUrl: './s157004.page.html',
  styleUrls: ['./s157004.page.scss'],
})
export class S157004Page implements OnInit {
  @ViewChild(JournalWeComponent) jr:any;
  dayclass = 'intro'
  enableAlert = false;
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
  isShowButton = false;
  vistedScreens: any[] = [];
  currentDay: number = 0;
  nextDay: number = null;
  maxDay = 0;
  endTime: any;
  startTime: any;
  moduleId: number = 157;
  slideStart = 0;
  totalSlidesCount = 6;
  screenNumber = '157004p0';
  details: string = '1/6'
  totalTime: any;
  bookmark: number = 0;
  screenType: string = "8";
  userId: any = localStorage.getItem('userId');
  totaldays=10;
  DaysWithIntro=10;
  lastClick = 0;
  delay = 20;
  methodSTartTime: any;
  methodEndTime: any;
  showModel =  false;

  constructor(private elementRef: ElementRef,
    public service: TeenagersService, private teenagers: TeenagersService,public router:Router) {
    this.startTime = Date.now()
  }

  ngOnInit() {
    this.teenagers.GetWisdomScreens(157).subscribe((x: any) => {
   if (x) {
    var data = x.filter(x => x.ScreenNo.includes('157004'));
    
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
      let carouselId = '';
      
      if (this.enableintro) carouselId = 'mdp_carousel_intro';
      else if (this.enableday1) carouselId = 'mdp_carousel_day1';
      else if (this.enableday2) carouselId = 'mdp_carousel_day2';
      else if (this.enableday3) carouselId = 'mdp_carousel_day3';
      else if (this.enableday4) carouselId = 'mdp_carousel_day4';
      else if (this.enableday5) carouselId = 'mdp_carousel_day5';
      else if (this.enableday6) carouselId = 'mdp_carousel_day6';
      else if (this.enableday7) carouselId = 'mdp_carousel_day7';
      else if (this.enableday8) carouselId = 'mdp_carousel_day8';
      else if (this.enableday9) carouselId = 'mdp_carousel_day9';
      else if (this.enableday10) carouselId = 'mdp_carousel_day10';
      
      if(eventText.includes("right")){
        $(`#${carouselId}`).carousel('prev');
        this.back();
      }else if(eventText.includes("left")){
        $(`#${carouselId}`).carousel('next');
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
        $(`#${carouselId}`).carousel('next');
      }
  }

  getdayevent(event) {
    if (event === 'intro') {
      this.slideStart = 0;
      this.totalSlidesCount = 6;
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
      this.screenNumber = "157004p0";
      this.dayclass = "intro";
      this.currentDay = 0;
    }
    else if (event === '1') {
      this.slideStart = 0;
      this.totalSlidesCount = 6;
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
      this.screenNumber = "157004p1";
      this.dayclass = "1";
      this.currentDay = 1;
    }
    else if (event === '2') {
      this.slideStart = 0;
      this.totalSlidesCount = 6;
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
      this.enableday8 = false;
      this.enableday9 = false;
      this.enableday10 = false;
      this.screenNumber = "157004p2";
      this.dayclass = "2";
      this.currentDay = 2;
    }
    else if (event === '3') {
      this.slideStart = 0;
      this.totalSlidesCount = 8;
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
      this.screenNumber = "157004p3";
      this.dayclass = "3";
      this.currentDay = 3;
    }
    else if (event === '4') {
      this.slideStart = 0;
      this.totalSlidesCount = 7;
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
      this.screenNumber = "157004p4";
      this.dayclass = "4";
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
      this.screenNumber = "157004p5";
      this.dayclass = "5";
      this.currentDay = 5;
    }
    else if (event === '6') {
      this.slideStart = 0;
      this.totalSlidesCount = 7;
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
      this.screenNumber = "157004p6";
      this.dayclass = "6";
      this.currentDay = 6;
    }
    else if (event === '7') {
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
      this.enableday7 = true;
      this.enableday8 = false;
      this.enableday9 = false;
      this.enableday10 = false;
      this.screenNumber = "157004p7";
      this.dayclass = "7";
      this.currentDay = 7;
    }
    else if (event === '8') {
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
      this.enableday8 = true;
      this.enableday9 = false;
      this.enableday10 = false;
      this.screenNumber = "157004p8";
      this.dayclass = "8";
      this.currentDay = 8;
    }
    else if (event === '9') {
      this.slideStart = 0;
      this.totalSlidesCount = 8;
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
      this.screenNumber = "157004p9";
      this.dayclass = "9";
      this.currentDay = 9;
    }
    else if (event === '10') {
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
      this.enableday10 = true;
      this.screenNumber = "157004p10";
      this.dayclass = "10";
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
          "ScreenNo": '157004p' + (parseInt(this.screenNumber.substring(7, 8))),
          "ModuleID": 157,
          "SessionID": 0,
        })
        if(this.currentDay>this.totaldays){
          this.router.navigate(['teenagers/wisdom-exercise/s157005']);
        }else{
          this.getdayevent(this.currentDay.toString());
        }
      } else {
        this.slideStart = 1;
      }
      this.details = (this.slideStart > 10 ? this.slideStart : '0' + this.slideStart) + '/' + (this.totalSlidesCount > 10 ? this.totalSlidesCount : '0' + this.totalSlidesCount);
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
      this.details = (this.slideStart > 10 ? this.slideStart : '0' + this.slideStart) + '/' + (this.totalSlidesCount > 10 ? this.totalSlidesCount : '0' + this.totalSlidesCount);
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

    // Defer DOM class updates until after Angular renders the modal via *ngIf
    setTimeout(() => {
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
    }, 0);
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