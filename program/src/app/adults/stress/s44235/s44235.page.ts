import { Options } from '@angular-slider/ngx-slider';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as noUiSlider from 'node_modules/propellerkit-range-slider/node_modules/nouislider/';
import * as wNumb from 'node_modules/propellerkit-range-slider/node_modules/wnumb/';
import { AdultsService } from "../../adults.service";


@Component({
  selector: 'app-s44235',
  templateUrl: './s44235.page.html',
  styleUrls: ['./s44235.page.scss'],
})
export class S44235Page implements OnInit {

  bg_tn = "bg_dark_blue"
  bg_cft = "bg_dark_blue"
  bg = "feedback_survey_footer"

  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = JSON.parse(localStorage.getItem("moduleId"))
  screenType = JSON.parse(localStorage.getItem("feedbackSurvey"))
  screenNumber = 44235
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  x = []
  q1 = 51
  q2 = 52
  q3 = 53
  q4 = 54
  q5 = 55
  optionList1 = []
  optionList2 = []
  optionList3 = []
  optionList4 = []
  optionList5 = []
  s1: any
  s2: any
  s3: any
  s4: any
  s5: any
  question: any
  optionList = []
  questionA: any
  checkedRight = false
  option: any
  sessionOption = JSON.parse(sessionStorage.getItem("sessionOption"))
  sendOption = []
  value1: number = 100
  value2: number = 100
  value3: number = 100
  value4: number = 100
  value5: number = 100
  dummychange: any
  options1: Options = {
    floor: 0,
    ceil: 5
  }
  options2: Options = {
    floor: 0,
    ceil: 5
  }
  options3: Options = {
    floor: 0,
    ceil: 5
  }
  options4: Options = {
    floor: 0,
    ceil: 5
  }

  options5: Options = {
    floor: 0,
    ceil: 5
  }
  rating1 = 0
  rating2 = 0
  rating3 = 0
  rating4 = 0
  rating5 = 0

  constructor(private router: Router,
    private service: AdultsService,
    private location: Location) { }

  ngOnInit() {


    // single handle slider with visible tooltip
    var pmdSliderTooltip = document.getElementById('pmd-slider-tooltip');
    noUiSlider.create(pmdSliderTooltip, {
      start: [3],
      connect: 'lower',
      tooltips: [wNumb({ decimals: 0 })],
      range: {
        'min': [0],
        'max': [5]
      }
    });
    // /single handle slider with visible tooltip

    // multistep wizard
    $(document).ready(function () {
      // var base_color = "rgb(44235,44235,44235)";
      // var active_color = "rgb(237, 40, 70)";
      var base_color = "rgba(255,255,255,0.2)";
      var active_color = "#60A757";

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

      $('#svg_form_time rect').css('fill', base_color);
      $('#svg_form_time circle').css('fill', base_color);
      $("circle:nth-of-type(1)").css("fill", active_color);


      $(".mt_btn").click(function () {
        $("#svg_form_time rect").css("fill", active_color);
        $("#svg_form_time circle").css("fill", active_color);
        var id = $(this).attr("id");
        if (id == "next") {
          $("#prev").removeClass("disabled");
          if (child >= length) {
            $(this).addClass("disabled");
            $('#submit').removeClass("disabled");
          }
          if (child <= length) {
            child++;
          }
        } else if (id == "prev") {
          $("#next").removeClass("disabled");
          $('#submit').addClass("disabled");
          if (child <= 2) {
            $(this).addClass("disabled");
          }
          if (child > 1) {
            child--;
          }
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
        var currentSection = $("section:nth-of-type(" + child + ")");
        currentSection.fadeIn();
        currentSection.css('transform', 'translateX(0)');
        currentSection.prevAll('section').css('transform', 'translateX(-100px)');
        currentSection.nextAll('section').css('transform', 'translateX(100px)');
        $('section').not(currentSection).hide();
      });

    });
    // /multistep wizard

    this.createScreen()

    console.log(this.qrList.ListOfQueOpts)
    this.questionA = this.qrList.ListOfQueOpts

    this.q1 = this.findQuestion(147).Question
    this.optionList1 = this.findQuestion(147).optionList
    this.q2 = this.findQuestion(148).Question
    this.optionList2 = this.findQuestion(148).optionList
    this.q3 = this.findQuestion(149).Question
    this.optionList3 = this.findQuestion(149).optionList
    this.q4 = this.findQuestion(150).Question
    this.optionList4 = this.findQuestion(150).optionList
    this.q5 = this.findQuestion(151).Question
    this.optionList5 = this.findQuestion(151).optionList
    console.log(this.q1, this.optionList1)
    console.log(this.q2, this.optionList2)
    console.log(this.q3, this.optionList3)
    console.log(this.q4, this.optionList4)
    console.log(this.q5, this.optionList5)


    if (this.saveUsername == false) { this.userId = JSON.parse(sessionStorage.getItem("userId")) }
    else { this.userId = JSON.parse(localStorage.getItem("userId")) }
    this.startTime = Date.now();
  }

  receiveBookmark(e) {
    console.log(e)
    if (e == true)
      this.bookmark = 1
    else
      this.bookmark = 0
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

  findQuestion(q) {
    var optionList = []
    console.log(q, "questionId")
    for (var i = 0; i < this.questionA.length; i++) {
      if (this.questionA[i].CorrectAns == "0")
        this.questionA[i].CorrectAns = false
      else
        this.questionA[i].CorrectAns = true


      if (q == this.questionA[i].QueId) {

        var question = this.questionA[i].Que

        optionList.push(this.questionA[i])

        //this.optionList.push(this.questionA[i])

      }


    }
    console.log(question, optionList)
    return ({ "Question": question, "optionList": optionList })

  }
  receiveRating(e) {
    console.log(e)
    e = JSON.parse(e)

    switch (e.Id) {
      case "1": {
        this.rating1 = e.Rating
        this.s1 = this.optionList1.find(x => x.Points == e.Rating).OptId
        console.log("selected rating", this.s1)
        break;

      }
      case "2": {
        this.optionList2.forEach((x) => { x.OptId = parseInt(x.OptId) });
        this.optionList2.sort((a, b) => a.OptId - b.OptId);
        this.s2 = this.optionList2.find(x => this.optionList2.indexOf(x) + 1 == e.Rating).OptId
        console.log(this.s2)
        break;

      }
      case "3": {
        this.rating1 = e.Rating
        this.s3 = this.optionList3.find(x => x.Points == e.Rating).OptId
        console.log("selected rating", this.s1)
        break;

      } case "4": {
        this.rating1 = e.Rating
        this.s4 = this.optionList4.find(x => x.Points == e.Rating).OptId
        console.log("selected rating", this.s1)
        break;

      } case "5": {
        this.rating1 = e.Rating
        this.s5 = this.optionList5.find(x => x.Points == e.Rating).OptId
        console.log("selected rating", this.s1)
        break;

      }
      default: {
        console.log("week")
        break;
      }
    }


  }




  submitProgress() {
    this.endTime = Date.now();
    this.totalTime = this.endTime - this.startTime;

    this.router.navigate(['/adults/stress/s44236'])

    var optionT = [this.s1, this.s2, this.s3, this.s4, this.s5]
    this.option = optionT.join()
    this.service.submitProgressQuestion({
      "ModuleId": this.moduleId,
      "screenType": this.screenType,
      "ScrNumber": this.screenNumber,
      "Bookmark": this.bookmark,
      "UserId": this.userId,
      "timeSpent": this.totalTime,
      "OptionIDs": this.option
    })
      .subscribe((res) => { },
        error => {
          console.log(error)
        },
        () => {

        })


  }

  prev() {
    this.router.navigate(['/adults/stress/s44234'])

  }
  ngOnDestroy() {


  }


}
