import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdultsService } from "../../adults.service";

@Component({
  selector: 'app-s64070',
  templateUrl: './s64070.page.html',
  styleUrls: ['./s64070.page.scss'],
})
export class S64070Page implements OnInit {

  bg_tn = "bg_teal"
  bg_cft = "bg_teal"
  bg = "feedback_survey_footer"

  userId: any
  //saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = localStorage.getItem("moduleId")
  screenType = localStorage.getItem("feedbackSurvey")
  screenNumber = 64070
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  rId = 701
  reflection: any
  reflectionA: any
  //r64070 = JSON.parse(sessionStorage.getItem("r64070"))
  r64070 = sessionStorage.getItem("r64070") !== 'null' ? sessionStorage.getItem("r64070") : '';

  constructor(private router: Router,
    private service: AdultsService,
    private location: Location) { }

  ngOnInit() {
    console.log(this.r64070)
    this.createScreen()


    this.reflectionA = this.qrList.ListOfReflection


    this.findReflection()
    if (this.saveUsername == false) { this.userId = JSON.parse(sessionStorage.getItem("userId")) }
    else { this.userId = JSON.parse(localStorage.getItem("userId")) }
    this.startTime = Date.now();


    // multistep wizard
    $(document).ready(function () {
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
      $("section").not("section:nth-of-type(1)").css('transform', 'translateX(100px)');

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
        var rect = makeSVG("rect", { x: positionX + 12, y: 9, width: 176, height: 6 });
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

      // $('#svg_form_time rect').css('fill',base_color);
      // $('#svg_form_time circle').css('fill',base_color);
      // $("circle:nth-of-type(1)").css("fill", active_color);

      // first
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

      // progress points
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
      // /progress points

      // progress points
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
      // /progress points

    });
    // /multistep wizard

  }




  createScreen() {
    this.service.createScreen({
      "ScrId": 0,
      "ModuleId": this.moduleId,
      "GSetID": this.screenType,
      "ScreenNo": this.screenNumber
    }).subscribe(res => {

    })


  }

  findReflection() {
    for (var i = 0; i < this.reflectionA.length; i++) {



      if (this.rId == this.reflectionA[i].ReflectionId) {
        this.reflection = this.reflectionA[i].Que
        // this.optionList.push(this.questionA[i])
      }

    }
    console.log(this.reflection)

  }

  submitProgress() {

    this.endTime = Date.now();
    this.totalTime = this.endTime - this.startTime;
    sessionStorage.setItem("r64070", this.r64070)
    //this.r64070 = sessionStorage.getItem("r64070")
    console.log(this.r64070)

    this.service.submitProgressReflection({
      "ScrNumber": this.screenNumber,
      "UserId": this.userId,
      "BookMark": this.bookmark,
      "ModuleId": this.moduleId,
      "screenType": this.screenType,
      "timeSpent": this.totalTime,
      "ReflectionId": this.rId,
      "Resp": this.r64070
    }).subscribe(res => {

    },
      error => {
        console.log(error)
        this.router.navigate(['/adults/dealing-with-death/s64071'])
      },
      () => {
        this.router.navigate(['/adults/dealing-with-death/s64071'])
      })
  }


  prev() {
    this.router.navigate(['/adults/dealing-with-death/s64069'])

  }
  ngOnDestroy() {



  }


}
