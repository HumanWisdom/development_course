import { Component, OnInit } from '@angular/core';
import { AdultsService } from "../../adults.service";
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'HumanWisdom-s76058',
  templateUrl: './s76058.page.html',
  styleUrls: ['./s76058.page.scss'],
})
export class S76058Page implements OnInit {

  bg_tn="bg_red_pink"
  bg_cft="bg_red_pink"
  bg="red_pink_w2"

  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  points:any
  overallPercentage:any

  constructor(private router: Router,
    private service:AdultsService,
    private location:Location) { }

  ngOnInit() 
  {
    if(this.saveUsername==false)
      {this.userId=JSON.parse(sessionStorage.getItem("userId"))}
    else
      {this.userId=JSON.parse(localStorage.getItem("userId"))}
    this.sessionPoints()
  }

  sessionPoints()
  {
    this.service.sessionPoints({"UserId":this.userId,
    "ScreenNos":"76029,76030,76031,76032,76033,76034,76035,76036,76037,76038,76039,76040,76041,76042,76043,76044,76045,76046,76047,76048,76049,76050,76051,76052,76053,76054,76055,76056,76057"})
    .subscribe(res=>
      {console.log("points",res)
      this.points=res
    })
  }

  submitProgress()
  {
    this.router.navigate(['/adults/bullying/s76059'])
  }

  prev()
  {
    this.router.navigate(['/adults/bullying/s76057'])
  }

}