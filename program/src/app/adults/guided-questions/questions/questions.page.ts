import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.page.html',
  styleUrls: ['./questions.page.scss'],
})
export class QuestionsPage implements OnInit {
data:any;
counter=0;
maintitile = new BehaviorSubject(0);
title='';
currentSlide:number=0;
numSlides:number=0;
length:number=0;
userId:number=0;
  constructor(private adultService:AdultsService,private router:ActivatedRoute
    ,private route: Router) { 
      this.userId=JSON.parse(sessionStorage.getItem("userId"))
  }
  ngOnInit() {
    var id=  +this.router.snapshot.queryParamMap.get("Qid");
    this.adultService.GetGuidedQs_Response(id).subscribe(x=>{ 
      if(x){
     this.data=x;
     this.numSlides=this.data.length;
     this.maintitile.subscribe(title => {
      this.title = (title+1)+"/"+this.data.length;
    });
      }
    })
  }

  SaveAnswers(res:any){
   let data={
    ResponseID:res.ResponseID,
    TopicID:res.TopicId,
    AttemptNo:res.AttemptNo,
    QuestionID: res.QuestionId,
    UserID: 107,
    Response:res.Response,
    savetoJournal:"0"
    };
this.adultService.AddGuidedQs_Response(data).subscribe(res=>{

});
  }

  Backward(){
    this.route.navigate(['/adults/journal'],{queryParams:{"isGuided":true}})
  }

;

  // forward(){
  //   this.counter=(this.counter+1);
  //   if(this.counter>=this.data.length ){
  //     this.counter=1;
  //   }
  //   this.maintitile.next(this.counter);
  // }
  // back(){
  //   this.counter=(this.counter-1);
  //   if(this.counter<1){
  //     this.counter=this.data.length-1;
  //     }
  //   this.maintitile.next(this.counter);
  // }

  modulo(number, mod) {
    let result = number % mod;
    if (result < 0) {
      result += mod;
    }
    return result;
  }
  
   forward() {
    this.currentSlide = this.modulo(this.currentSlide + 1, this.numSlides);
    this.changeSlide(this.currentSlide);
    this.counter=this.currentSlide;
  }

   back() {
    this.currentSlide = this.modulo(this.currentSlide - 1, this.numSlides);
    this.changeSlide(this.currentSlide);
    this.counter=this.currentSlide;

  }

   changeSlide(slideNumber) {
    this.maintitile.next(slideNumber);
   // carousel.style.setProperty('--current-slide', slideNumber);
  }

  SubmitButton(){
    let res=this.data[this.numSlides-1];
    let data={
      ResponseID:res.ResponseID,
      TopicID:res.TopicId,
      AttemptNo:res.AttemptNo,
      QuestionID: res.QuestionId,
      UserID: this.userId,
      Response:res.Response,
      savetoJournal:"1"
      };
  this.adultService.AddGuidedQs_Response(data).subscribe(res=>{
    this.route.navigate(['/adults/journal'],{queryParams:{"isGuided":true}})
  });
  }

}