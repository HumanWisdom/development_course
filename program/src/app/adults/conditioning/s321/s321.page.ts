import { Component, OnInit, QueryList,OnDestroy } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import {Options} from '@angular-slider/ngx-slider'
import * as jQuery from 'jquery';
import * as noUiSlider from 'node_modules/propellerkit-range-slider/node_modules/nouislider/';
import * as wNumb from 'node_modules/propellerkit-range-slider/node_modules/wnumb/';

@Component({
  selector: 'app-s321',
  templateUrl: './s321.page.html',
  styleUrls: ['./s321.page.scss'],
})
export class S321Page implements OnInit {

  bg="feedback_survey_footer"

  startTime:any
  skipToPage="/adults/comparison/s159"
  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  qrList=JSON.parse(localStorage.getItem("qrList"))
  moduleId=JSON.parse(localStorage.getItem("moduleId"))
  screenType=JSON.parse(localStorage.getItem("feedbackSurvey"))
  screenNumber=321
  endTime:any
  totalTime:any
  bookmark:any
  x=[]
  q1:any
  q2:any
  q3:any
  q4:any
  q5:any
  q6:any
  optionList1=[]
  optionList2=[]
  optionList3=[]
  optionList4=[]
  optionList5=[]
  optionList6=[]
  s1:any
  s2:any
  s3:any
  s4:any
  s5:any
  s6:any
  question:any
  optionList=[]
  questionA:any
  checkedRight=false
  option:any
  sessionOption=JSON.parse(sessionStorage.getItem("sessionOption"))
  sendOption=[]
 /* value1:number =100
  value2:number =100
  value3:number =100
  value4:number =100
  value5:number =100
  value6:number =100
  dummychange:any
  options1: Options={
    floor:0,
    ceil:5
  }
  options2: Options={
    floor:0,
    ceil:5
  }
  options3: Options={
    floor:0,
    ceil:5
  }
  options4: Options={
    floor:0,
    ceil:5
  }
  
  options5: Options={
    floor:0,
    ceil:5
  }
  options6: Options={
    floor:0,
    ceil:5
  }*/
  rating1=0
  rating2=0
  rating3=0
  rating4=0
  rating5=0
  rating6=0

  constructor(private router: Router,
    private service:AdultsService,
    private location:Location) { }

    ngOnInit() {
    

      // single handle slider with visible tooltip
      var pmdSliderTooltip = document.getElementById('pmd-slider-tooltip');
      noUiSlider.create(pmdSliderTooltip, {
        start: [ 3 ],
        connect: 'lower',
        tooltips: [wNumb({ decimals: 0 }) ],
        range: {
          'min': [ 0 ],
          'max': [ 5 ]
        }
      });
      // /single handle slider with visible tooltip
  
      // multistep wizard
      $( document ).ready(function() {
        // var base_color = "rgb(160trial,160trial,160trial)";
        // var active_color = "rgb(237, 40, 70)";
        var base_color = "#C4C4C4";
        var active_color = "#60A757";
  
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
        
      });
      // /multistep wizard
  
      this.createScreen()
      console.log(this.qrList,"Qrlist")
      console.log(this.qrList.ListOfQueOpts)
      this.questionA=this.qrList.ListOfQueOpts
     
      this.q1=this.findQuestion(66).Question
      this.optionList1=this.findQuestion(66).optionList
      this.q2=this.findQuestion(67).Question
      this.optionList2=this.findQuestion(67).optionList
      this.q3=this.findQuestion(68).Question
      this.optionList3=this.findQuestion(68).optionList
      this.q4=this.findQuestion(69).Question
      this.optionList4=this.findQuestion(69).optionList
      this.q5=this.findQuestion(70).Question
      this.optionList5=this.findQuestion(70).optionList
      this.q6=this.findQuestion(71).Question
      this.optionList6=this.findQuestion(71).optionList
      console.log(this.q1,this.optionList1)
      console.log(this.q2,this.optionList2)
      console.log(this.q3,this.optionList3)
      console.log(this.q4,this.optionList4)
      console.log(this.q5,this.optionList5)
  
  
      if(this.saveUsername==false)
      {this.userId=JSON.parse(sessionStorage.getItem("userId"))}
      else
        {this.userId=JSON.parse(localStorage.getItem("userId"))}
        this.startTime = Date.now();
    }
  
    selectRating1(r){
      
      console.log(r)
      this.rating1=r
      this.s1=this.optionList1.find(x=>x.Points==r).OptId
      console.log("selected rating",this.s1)
      
    }
    selectRating2(r){
      
      console.log(r)
      this.rating2=r
      this.s2=this.optionList2.find(x=>x.Points==r).OptId
      console.log("selected rating",this.s2)
      
    }
    selectRating3(r){
      
      console.log(r)
      this.rating3=r
      this.s3=this.optionList3.find(x=>x.Points==r).OptId
      console.log("selected rating",this.s3)
      
    }
    selectRating4(r){
      
      console.log(r)
      this.rating4=r
      this.s4=this.optionList4.find(x=>x.Points==r).OptId
      console.log("selected rating",this.s4)
      
    }
    selectRating5(r){
      
      console.log(r)
      this.rating5=r
      this.s5=this.optionList5.find(x=>x.Points==r).OptId
      console.log("selected rating",this.s5)
      
    }
    selectRating6(r){
      
      console.log(r)
      this.rating6=r
      this.s6=this.optionList6.find(x=>x.Points==r).OptId
      console.log("selected rating",this.s6)
      
    }
    receiveRating(e){
      console.log(e)
      e=JSON.parse(e)
      
      switch(e.Id){
        case "1":{
          this.rating1=e.Rating
          this.s1=this.optionList1.find(x=>x.Points==e.Rating).OptId
          console.log("selected rating",this.s1)
          break;
  
        }
        case "2":{
          this.optionList2.forEach((x)=>{ x.OptId=parseInt(x.OptId) });
          this.optionList2.sort((a, b) => a.OptId - b.OptId);
          this.s2=this.optionList2.find(x=>this.optionList2.indexOf(x)+1==e.Rating).OptId
          console.log(this.s2)
          break;
  
        }
        case "3":{
          this.rating1=e.Rating
          this.s3=this.optionList3.find(x=>x.Points==e.Rating).OptId
          console.log("selected rating",this.s1)
          break;
  
        }case "4":{
          this.rating1=e.Rating
          this.s4=this.optionList4.find(x=>x.Points==e.Rating).OptId
          console.log("selected rating",this.s1)
          break;
  
        }case "5":{
          this.rating1=e.Rating
          this.s5=this.optionList5.find(x=>x.Points==e.Rating).OptId
          console.log("selected rating",this.s1)
          break;
  
        }case "6":{
          this.rating1=e.Rating
          this.s6=this.optionList6.find(x=>x.Points==e.Rating).OptId
          console.log("selected rating",this.s1)
          break;
  
        }
        default:{
          console.log("week")
          break;
        }
      }
      
  
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
  
    findQuestion(q){
      var optionList=[]
      console.log(q,"questionId")
      for(var i=0;i<this.questionA.length;i++)
      {
        if(this.questionA[i].CorrectAns=="0")
          this.questionA[i].CorrectAns=false
        else
          this.questionA[i].CorrectAns=true
       
  
        if(q==this.questionA[i].QueId)
        {
         
          var question=this.questionA[i].Que
         
          optionList.push(this.questionA[i])
        
         //this.optionList.push(this.questionA[i])
   
        }
        
         
      }
      console.log(question,optionList)
      return({"Question":question,"optionList":optionList})
  
    }
  
    
   
  
    submitProgress(){
      this.endTime = Date.now();
    this.totalTime = this.endTime - this.startTime;
    //console.log(this.totalTime,"total time")
   

      var optionT=[this.s1,this.s2,this.s3,this.s4,this.s5,this.s6]
      this.option=optionT.join()
      this.service.submitProgressQuestion({"ModuleId":this.moduleId,
        "screenType":this.screenType, 
        "ScrNumber":this.screenNumber,  
        "Bookmark":this.bookmark, 
        "UserId":this.userId, 
        "timeSpent":this.totalTime,
        "OptionIDs":this.option})
        .subscribe(res=>console.log(res),
        error=>{
          console.log(error)
        },
        ()=>{
          this.router.navigate(['/adults/conditioning/s321p1'])
        })
  
  
    }
    prev(){
      this.router.navigate(['/adults/conditioning/s320'])
    }
    
    ngOnDestroy(){
      
    
    }

}
