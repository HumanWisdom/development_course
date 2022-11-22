import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'HumanWisdom-s75008',
  templateUrl: './s75008.page.html',
  styleUrls: ['./s75008.page.scss'],
})
export class S75008Page implements OnInit {

  // active_color = "#FFC455";
  // base_color = "rgba(255,255,255,0.2)";
  // child =1;

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
  screenNumber = '75008p0';
  totalTime: any;
  bookmark: number = 0;
  screenType: string = "8";
  totaldays=7;
  userId: any = localStorage.getItem('userId');
  constructor(private elementRef: ElementRef,
    public service: AdultsService, private adult: AdultsService,public router:Router) {
    this.startTime = Date.now()
  }

  ngOnInit() {

    this.adult.GetVisitedScreen(this.moduleId).subscribe((x: any) => {
      if (x) {
        var data = x.filter(x => x.ScreenNo.includes('75008'));
        this.vistedScreens = data?.sort((a, b) => +b.ScreenNo.substring(6, 7) > +a.ScreenNo.substring(6, 7) ? 1 : -1);
        if(data && data.length>=this.totaldays){
          this.getdayevent("intro");
        }
       else if(window.history.state.day && window.history.state.day !=null ){
          this.getdayevent(window.history.state.day);
       }else{
        if(this.vistedScreens[0]!=null){
          this.currentDay = +this.vistedScreens[0].ScreenNo.substring(6, 7) + 1;
          this.maxDay = this.currentDay;
          this.getdayevent(this.currentDay.toString());
        }else{
          this.maxDay = this.currentDay;
          this.getdayevent(this.currentDay.toString());
        }
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
      this.screenNumber = "75008p0";
      this.dayclass = '0';
      this.currentDay = 0;
    }
    else if (event === '1') {
      this.slideStart = 0;
      this.totalSlidesCount = 7;
      this.details = this.slideStart + '/' + this.totalSlidesCount;
      this.enableintro = false;
      this.enableday1 = true;
      this.enableday2 = false;
      this.enableday3 = false;
      this.enableday4 = false;
      this.enableday5 = false;
      this.enableday6 = false;
      this.enableday7 = false;
      this.screenNumber = "75008p1";
      this.dayclass = '1';
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
      this.screenNumber = "75008p2";
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
      this.screenNumber = "75008p3";
      this.dayclass = '3';
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
      this.screenNumber = "75008p4";
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
      this.screenNumber = "75008p5";
      this.dayclass = '5';
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
      this.screenNumber = "75008p6";
      this.dayclass = '6';
      this.currentDay = 6;
    }
    else if (event === '7') {
      this.slideStart = 0;
      this.totalSlidesCount = 11;
      this.details = this.slideStart + '/' + this.totalSlidesCount;
      this.enableintro = false;
      this.enableday1 = false;
      this.enableday2 = false;
      this.enableday3 = false;
      this.enableday4 = false;
      this.enableday5 = false;
      this.enableday6 = false;
      this.enableday7 = true;
      this.screenNumber = "75008p7";
      this.dayclass = '7';
      this.currentDay = 7;

      setTimeout(() => {
  
      // multistep wizard
      $( document ).ready(function() {

        var base_color = "rgba(36.5,36.5,36.5,0.2)";
        var active_color = "#FFC455";

        var i;
        
        var child = 1;
        var length = $("section").length - 1;
        $("#prev").addClass("disabled");
        $("#submit").addClass("disabled");
        
        $("section").not("section:nth-of-type(1)").hide();
        $("section").not("section:nth-of-type(1)").css('transform','translateX(100px)');
        
        var svgWidth = length * 200 + 24;
        $("#svg_wrap").html(
          '<svg version="1.1" id="svg_form_time" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 ' +
            svgWidth +
            ' 24" xml:space="preserve"></svg>'
        );
        
        function makeSVG(tag, attrs) {
          var el = document.createElementNS("http://www.w3.org/2000/svg", tag);
          for (var k in attrs) el.setAttribute(k, attrs[k]);
          return el;
        }
        
        for (i = 0; i < length; i++) {
          var positionX = 12 + i * 200;
        var rect = makeSVG("rect", { x: positionX+12, y: 9, width: 176, height: 6 });
          document.getElementById("svg_form_time").appendChild(rect);
          // <g><rect x="12" y="9" width="200" height="6"></rect></g>'
          var circle = makeSVG("circle", {
            cx: positionX,
            cy: 12,
            r: 12,
            width: positionX,
            height: 6
          });
          document.getElementById("svg_form_time").appendChild(circle);
        }
        
        var circle = makeSVG("circle", {
          cx: positionX + 200,
          cy: 12,
          r: 12,
          width: positionX,
          height: 6
        });
        document.getElementById("svg_form_time").appendChild(circle);
        
        $('#svg_form_time rect').css('fill',base_color);
        $('#svg_form_time circle').css('fill',base_color);
        $("circle:nth-of-type(1)").css("fill", active_color);
        
        
      
          
        
      });
      // /multistep wizard
  
      }, 3000);
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
          "ScreenNo": '75008p' + (parseInt(this.screenNumber.substring(6, 7))),
          "ModuleID": 75,
          "SessionID": 0,
        })
        if(this.currentDay>this.totaldays){
          this.router.navigate(['adults/wisdom-exercise/s75009']);
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
    if (day === '75008p0') {
      dayclass = "0";
    }
    else if (day === '75008p1') {
      dayclass = '1';
    }
    else if (day === '75008p2') {
      dayclass = '2';
    }
    else if (day === '75008p3') {
      dayclass = '3';
    }
    else if (day === '75008p4') {
      dayclass = '4';
    }
    else if (day === '75008p5') {
      dayclass = '5';
    }
    else if (day === '75008p6') {
      dayclass = '6';
    }
    else if (day === '75008p7') {
      dayclass = '7';
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