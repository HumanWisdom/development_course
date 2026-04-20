import { AfterViewInit, Component, ElementRef, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import "bcswipe";
import { AdultsService } from "../../adults.service";
import "hammerjs";
import { SharedService } from "../../../../../../shared/services/shared.service";
declare var $: any;
declare var bootstrap: any;
var moveleft = false;
@Component({
  selector: "HumanWisdom-s75002",
  templateUrl: "./s75002.page.html",
  styleUrls: ["./s75002.page.scss"],
})
export class S75002Page implements OnInit, AfterViewInit {
  dayclass = "intro";
  enableAlert =false;
  isShowTranscript = false;
  isShowAudio = true;
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
  isShowButton=false;
  totalTime: any;
  screenType: string = "8";
  screenNumber: string = "75002p0";
  userId: any = localStorage.getItem("userId");
  endTime: any;
  startTime: any;
  lastClick = 0;
  delay = 20;
  moduleId: number = 75;
  bookmark: number = 0;
  slideStart = 0;
  totalSlidesCount = 6;
  details: string = "1/8";
  vistedScreens: any[] = [];
  currentDay: number = 0;
  nextDay: number = null;
  maxDay = 0;
  totalDays = 5;
  DaysWithIntro = 6;
  methodSTartTime: any;
  methodEndTime: any;
  constructor(
    private elementRef: ElementRef,
    public service: AdultsService,
    private adult: AdultsService,
    public router: Router
  ) {
    this.startTime = Date.now();
  }

  ngOnInit() {
    this.adult.GetWisdomScreens().subscribe((x: any) => {
      if (x) {
        var data = x.filter((x) => x.ScreenNo.includes("75002"));

        let completed = data?.filter((x) => x.completed == "0");

        let visitedScreen = data?.filter((x) => x.completed == "1");

        for (let item of visitedScreen) {
          this.vistedScreens.push({
            ScreenNo: item.ScreenNo,
            ModuleID: 75,
            SessionID: 0,
          });
        }

        if (window.history.state.day && window.history.state.day != null) {
          this.getdayevent(window.history.state.day);
        } else if (
          visitedScreen.length == this.DaysWithIntro ||
          completed.length == this.DaysWithIntro
        ) {
          this.currentDay = 0;
          this.getdayevent(this.currentDay.toString());
        } else if (completed.length > 0) {
          this.currentDay = +completed[0].ScreenNo.substring(6, 7);
          this.getdayevent(this.currentDay.toString());
        }
      }
    });
  }

  ngAfterViewInit(): void {
    $(".carousel").bcSwipe({ threshold: 50 });
    var container = document.querySelector(".carousel");
   // container.addEventListener("touchmove", this.moveTouch.bind(this), false);
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
      
      if(eventText.includes("right")){
        if (this.enableintro && this.slideStart <= 1) return;
        $(`#${carouselId}`).carousel('prev');
        this.back();
      }else if(eventText.includes("left")){
        if (this.enableday5 && this.slideStart >= this.totalSlidesCount) return;
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
        if (this.enableday5 && this.slideStart >= this.totalSlidesCount) return;
        this.next();
        $(`#${carouselId}`).carousel('next');
      }
  }
  // moveTouch(e) {
  //   if (this.lastClick >= Date.now() - this.delay) {
  //     return;
  //   }
  //   this.lastClick = Date.now();
  //   if (moveleft) {
  //     this.next();
  //   } else {
  //     this.back();
  //   }
  // }
  getClass(day) {
    return SharedService.GetExerciseClassName(day,this.currentDay,this.vistedScreens,this.nextDay)
  }

  getdayevent(event, isBack = false) {
    if (event === "intro" || event === "0") {
      this.startTime = Date.now();
      this.slideStart = 0;
      this.totalSlidesCount = 6;
      this.details = this.slideStart + "/" + this.totalSlidesCount;
      this.enableintro = true;
      this.currentDay = 0;
      this.enableday1 = false;
      this.enableday2 = false;
      this.enableday3 = false;
      this.enableday4 = false;
      this.enableday5 = false;
      this.screenNumber = "75002p0";
      this.dayclass = "intro";
    } else if (event === "1") {
      this.startTime = Date.now();
      this.slideStart = 0;
      this.currentDay = 1;
      this.totalSlidesCount = 5;
      this.details = this.slideStart + "/" + this.totalSlidesCount;
      this.enableintro = false;
      this.enableday1 = true;
      this.enableday2 = false;
      this.enableday3 = false;
      this.enableday4 = false;
      this.enableday5 = false;
      this.screenNumber = "75002p1";
      this.dayclass = "1";
    } else if (event === "2") {
      this.startTime = Date.now();
      this.slideStart = 0;
      this.currentDay = 2;
      this.totalSlidesCount = 5;
      this.details = this.slideStart + "/" + this.totalSlidesCount;
      this.enableintro = false;
      this.enableday1 = false;
      this.enableday2 = true;
      this.enableday3 = false;
      this.enableday4 = false;
      this.enableday5 = false;
      this.screenNumber = "75002p2";
      this.dayclass = "2";
    } else if (event === "3") {
      this.startTime = Date.now();
      this.slideStart = 0;
      this.currentDay = 3;
      this.totalSlidesCount = 4;
      this.details = this.slideStart + "/" + this.totalSlidesCount;
      this.enableintro = false;
      this.enableday1 = false;
      this.enableday2 = false;
      this.enableday3 = true;
      this.enableday4 = false;
      this.enableday5 = false;
      this.screenNumber = "75002p3";
      this.dayclass = "3";
    } else if (event === "4") {
      this.startTime = Date.now();
      this.slideStart = 0;
      this.totalSlidesCount = 4;
      this.currentDay = 4;
      this.details = this.slideStart + "/" + this.totalSlidesCount;
      this.enableintro = false;
      this.enableday1 = false;
      this.enableday2 = false;
      this.enableday3 = false;
      this.enableday4 = true;
      this.enableday5 = false;
      this.screenNumber = "75002p4";
      this.dayclass = "4";
    } else if (event === "5") {
      this.startTime = Date.now();
      this.slideStart = 0;
      this.totalSlidesCount = 4;
      this.currentDay = 5;
      this.details = this.slideStart + "/" + this.totalSlidesCount;
      this.enableintro = false;
      this.enableday1 = false;
      this.enableday2 = false;
      this.enableday3 = false;
      this.enableday4 = false;
      this.enableday5 = true;
      this.screenNumber = "75002p5";
      this.dayclass = "5";
    }

    if (isBack) {
      this.slideStart = this.totalSlidesCount;
      this.details =
        (this.slideStart > 9 ? this.slideStart : "0" + this.slideStart) +
        "/" +
        (this.totalSlidesCount > 9
          ? this.totalSlidesCount
          : "0" + this.totalSlidesCount);
      
      setTimeout(() => {
        let carouselId = this.dayclass === 'intro' ? '#mdp_carousel_intro' : `#mdp_carousel_day${this.dayclass}`;
        $(carouselId).carousel(this.totalSlidesCount - 1);
        this.setHint();

        setTimeout(() => {
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
        }, 100);
      }, 700);
    } else {
      this.next();
    }

    setTimeout(() => {
      var element = document.querySelector(".we_ft .editable");
      if (element) {
        element.scrollIntoView({ behavior: "smooth", inline: "center" });
      }
    }, 2000);
  }

  next() {
    if (this.enableday5 && this.slideStart >= this.totalSlidesCount) return;
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
          ScreenNo: "75002p" + parseInt(this.screenNumber.substring(6, 7)),
          ModuleID: 75,
          SessionID: 0,
        });
        if (this.currentDay > this.totalDays) {
          this.router.navigate(["adults/wisdom-exercise/s75003"]);
        } else {
          this.getdayevent(this.currentDay.toString());
        }
      } else {
        this.slideStart = 1;
      }
      this.details =
        (this.slideStart > 9 ? this.slideStart : "0" + this.slideStart) +
        "/" +
        (this.totalSlidesCount > 9
          ? this.totalSlidesCount
          : "0" + this.totalSlidesCount);
      var data =
        this.elementRef.nativeElement.querySelectorAll(".active")[1]?.firstChild
          ?.children[0]?.children[1]?.children[0]?.lastChild?.classList.value;
      if (data == undefined) {
        data =
          this.elementRef.nativeElement.querySelectorAll(".active")[0]
            ?.firstChild?.children[0]?.children[1]?.children[0]?.lastChild
            ?.classList.value;
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

  back() {
    if (this.enableintro && this.slideStart <= 1) return;
    window.scrollTo(0,0);
    this.nextDay = null;
    this.resetHintValue();
    
    setTimeout(() => {
      if (this.slideStart < 1) {
        this.slideStart = this.totalSlidesCount;
      } else if (this.slideStart == 1) {
        this.currentDay = this.currentDay - 1;
        this.getdayevent(this.currentDay.toString(), true);
      } else {
        this.slideStart = this.slideStart - 1;
      }
      this.details =
        (this.slideStart > 9 ? this.slideStart : "0" + this.slideStart) +
        "/" +
        (this.totalSlidesCount > 9
          ? this.totalSlidesCount
          : "0" + this.totalSlidesCount);
      var data =
        this.elementRef.nativeElement.querySelectorAll(".active")[1]?.firstChild
          ?.children[0]?.children[1]?.children[0]?.lastChild?.classList.value;
      if (data == undefined) {
        data =
          this.elementRef.nativeElement.querySelectorAll(".active")[0]
            ?.firstChild?.children[0]?.children[1]?.children[0]?.lastChild
            ?.classList.value;
      }
      if (data == "audio-test") {
        this.isShowTranscript = true;
        this.isShowAudio=false;
      this.isShowButton=true;
      } else {
        this.isShowTranscript = false;
        this.isShowAudio = false;
        this.isShowButton=false;
      }
      
      this.setHint();
    }, 700);
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
  submitProgress() {
    this.service
      .submitProgressText({
        ScrNumber: this.screenNumber,
        UserId: +this.userId,
        BookMark: this.bookmark,
        ModuleId: this.moduleId,
        screenType: this.screenType,
        timeSpent: this.totalTime,
      })
      .subscribe(
        (res) => {
          // this.bookmarkList=res.GetBkMrkScr.map(a=>parseInt(a.ScrNo))
          // localStorage.setItem("bookmarkList",JSON.stringify(this.bookmarkList))
        },
        (error) => {
          console.log(error);
        },
        () => {
          //this.router.navigate(['/adults/conditioning/s234'])
        }
      );
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

  goBack() {
    // Check if we came from micro-learning end screen
    const fromMicroLearningEnd = localStorage.getItem('fromMicroLearningEnd');
    const microLearningEndUrl = localStorage.getItem('microLearningEndUrl');
    
    if (fromMicroLearningEnd === 'true' && microLearningEndUrl) {
      // Clear the flags and navigate back to micro-learning end screen
      localStorage.removeItem('fromMicroLearningEnd');
      localStorage.removeItem('microLearningEndUrl');
      this.router.navigateByUrl(microLearningEndUrl);
    } else {
      // Default: go to home
      this.router.navigate(['/adults/home']);
    }
  }
}
