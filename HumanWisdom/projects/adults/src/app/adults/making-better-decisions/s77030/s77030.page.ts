import { Component, OnInit } from '@angular/core';
import { AdultsService } from "../../adults.service"
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'HumanWisdom-s77030',
  templateUrl: './s77030.page.html',
  styleUrls: ['./s77030.page.scss'],
})
export class S77030Page implements OnInit {

  bg_tn="bg_light_blue"
  bg_cft="bg_light_blue"
  bg="light_blue_w1"
  toc="making-better-decisions/s77001"
  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  screenType=localStorage.getItem("text")
  moduleId=localStorage.getItem("moduleId")
  screenNumber=77030
  startTime:any
  endTime:any
  totalTime:any
  bookmark=0
  path=this.router.url
  bookmarkList=JSON.parse(localStorage.getItem("bookmarkList"))
 
  constructor(
    private router: Router,
    private service:AdultsService,
    private location:Location
  ) { }

  ngOnInit() 
  {
    // multistep wizard
    $( document ).ready(function() {
      // var base_color = "rgb(230,230,230)";
      // var active_color = "rgb(237, 40, 70)";
      var base_color = "rgba(255,255,255,0.2)";
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
        '<svg version="1.1" id="svg_form_time" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 ' + svgWidth + ' 24" xml:space="preserve"></svg>'
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

      // to be copied
      $("#svg_form_time rect").css("fill", active_color);
      $("#svg_form_time circle").css("fill", active_color);
      $("#prev").removeClass("disabled");
      if (child >= length) {
        $(this).addClass("disabled");
        $('#submit').removeClass("disabled");
      }
      if (child <= length) {
        child++;
      }
      var circle_child = child + 1;
      $("#svg_form_time rect:nth-of-type(n + " + child + ")").css(
        "fill",
        base_color
      );
      $("#svg_form_time circle:nth-of-type(n + " + circle_child + ")").css(
        "fill",
        base_color
      );
      // /to be copied
    });
    // /multistep wizard

    //localStorage.removeItem("bookmarkList")
    this.createScreen()
    
    if(this.saveUsername==false)
      {this.userId=JSON.parse(sessionStorage.getItem("userId"))}
    else
      {this.userId=JSON.parse(localStorage.getItem("userId"))}
    this.startTime = Date.now();

    if(JSON.parse(sessionStorage.getItem("bookmark77030"))==0)
      this.bookmark=0
    else if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmark77030"))==1)
      this.bookmark=1
  }

  receiveBookmark(e)
  {
    console.log(e)

    if(e==true)
      this.bookmark=1
    else
      this.bookmark=0
    sessionStorage.setItem("bookmark77030",JSON.stringify(this.bookmark))
  }

  createScreen()
  {
    this.service.createScreen({
      "ScrId":0,
      "ModuleId":this.moduleId,
      "GSetID":this.screenType,
      "ScreenNo":this.screenNumber
    }).subscribe(res=>
      {
        
      })
  }

  submitProgress()
  {
    this.endTime = Date.now();
    this.totalTime = this.endTime - this.startTime;
    this.router.navigate(['/adults/making-better-decisions/s77031'])
    if (this.userId === 563) return;

    this.service.submitProgressText({
      "ScrNumber":this.screenNumber,
      "UserId":this.userId,
      "BookMark":this.bookmark,
      "ModuleId":this.moduleId,
      "screenType":this.screenType,
      "timeSpent":this.totalTime
    }).subscribe(res=>
      { 
        this.bookmarkList=res.GetBkMrkScr.map(a=>parseInt(a.ScrNo))
        localStorage.setItem("bookmarkList",JSON.stringify(this.bookmarkList))
      },
      error=>{console.log(error)},
      ()=>{
        //this.router.navigate(['/adults/making-better-decisions/s77030'])
      })
  }

  prev()
  {
    this.router.navigate(['/adults/making-better-decisions/s77029'])
  }

  ngOnDestroy()
  {}
}