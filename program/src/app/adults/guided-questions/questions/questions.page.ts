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
counter=1;
maintitile = new BehaviorSubject(1);
title='';
  constructor(private adultService:AdultsService,private router:ActivatedRoute
    ,private route: Router) { 
   
  }
  ngOnInit() {
    var id=  +this.router.snapshot.queryParamMap.get("Qid");
    this.adultService.GetGuidedQs_Response(id).subscribe(x=>{ 
      if(x){
     this.data=x;
     this.maintitile.subscribe(title => {
      this.title = (title)+"/"+this.data.length;
    });
      }
    })
  }
  Backward(){
    this.route.navigate(['/adults/journal'])
  }
;

  forward(){
    this.counter=(this.counter+1);
    if(this.counter>=this.data.length ){
      this.counter=1;
    }
    this.maintitile.next(this.counter);
  }
  back(){
    this.counter=(this.counter-1);
    if(this.counter<1){
      this.counter=this.data.length-1;
      }
    this.maintitile.next(this.counter);
  }
}