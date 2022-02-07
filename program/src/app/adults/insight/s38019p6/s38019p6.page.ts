import { Component, OnInit } from '@angular/core';
import * as jQuery from 'jquery';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common';

@Component({
  selector: 'HumanWisdom-s38019p6',
  templateUrl: './s38019p6.page.html',
  styleUrls: ['./s38019p6.page.scss'],
})
export class S38019p6Page implements OnInit {

  bg="feedback_survey_footer"
  
  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  qrList=JSON.parse(localStorage.getItem("qrList"))
  moduleId=localStorage.getItem("moduleId")
  screenType=localStorage.getItem("reflection")
  screenNumber="38019p6"
  startTime:any
  endTime:any
  totalTime:any
  bookmark:any
  rId=790
  reflection:any
  reflectionA:any
  r38019p6=(sessionStorage.getItem("r38019p6"))

  shared:any
  confirmed:any

  constructor(private router: Router,
    private service:AdultsService,
    private location:Location) { }


 

  ngOnInit() {

    // multistep wizard
    $( document ).ready(function() {
      // var base_color = "rgb(230,230,230)";
      // var active_color = "rgb(237, 40, 70)";
      var base_color = "#C4C4C4";
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
        var rect = makeSVG("rect", { x: positionX, y: 9, width: 200, height: 6 });
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
        currentSection.css('transform','translateX(0)');
      currentSection.prevAll('section').css('transform','translateX(-100px)');
        currentSection.nextAll('section').css('transform','translateX(100px)');
        $('section').not(currentSection).hide();
      });

       // second
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
        // second
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
      
    });
    // /multistep wizard

    this.createScreen()
    console.log(this.r38019p6)
    console.log(sessionStorage.getItem("r38019p6"))
    /*if(sessionStorage.getItem("r38019p6")==null)
    {
      this.r38019p6=sessionStorage.getItem("r38019p6")
    }*/
   
    console.log(this.qrList,"Qrlist")
    
    this.reflectionA=this.qrList.ListOfReflection
   
  
    this.findReflection()
    if(this.saveUsername==false)
    {this.userId=JSON.parse(sessionStorage.getItem("userId"))}
    else
      {this.userId=JSON.parse(localStorage.getItem("userId"))}
      this.startTime = Date.now();
  }
  createScreen(){
    this.service.createScreen({
      "ScrId":0,
      "ModuleId":this.moduleId,
      "GSetID":this.screenType,
      "ScreenNo":this.screenNumber
    }).subscribe(res=>
      {
        console.log(res)
      })
    

  }

  findReflection(){
    for(var i=0;i<this.reflectionA.length;i++)
    {
      
     

      if(this.rId==this.reflectionA[i].ReflectionId)
      {
        this.reflection=this.reflectionA[i].Que
       // this.optionList.push(this.questionA[i])
      }
       
    }
    console.log(this.reflection)

  }

  submitProgress(){
   // console.log("returned response",e)
    this.endTime = Date.now();
    this.totalTime = this.endTime - this.startTime;
    sessionStorage.setItem("r38019p6",this.r38019p6)
   //this.r38019p6=sessionStorage.getItem("r38019p6")
   console.log(this.r38019p6)
   if(this.r38019p6!="undefined")
   {
     
      this.service.submitProgressReflection({
        "ScrNumber":this.screenNumber,
        "UserId":this.userId,
        "BookMark":this.bookmark,
        "ModuleId":this.moduleId,
        "screenType":this.screenType,
        "timeSpent":this.totalTime,
        "ReflectionId":this.rId,
        "Resp":this.r38019p6
        }).subscribe(res=>
        {
          console.log(res)
        },
        error=>{
          console.log(error)
          this.router.navigate(['/adults/insight/s38019p7'])
        },
        ()=>{
          this.router.navigate(['/adults/insight/s38019p7'])
        })
   }

   else{
    this.router.navigate(['/adults/insight/s38019p5'])

   }
   
    
    

  }

  prev(){
    this.router.navigate(['/adults/insight/s38019p5'])
  }
  
  ngOnDestroy(){
   
    //console.log(this.totalTime,"total time")
    //this.submitProgress()
  }


}