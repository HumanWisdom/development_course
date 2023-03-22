import { Component, OnInit } from '@angular/core';
import { AdultsService } from "../../adults.service";
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-s92149',
  templateUrl: './s92149.page.html',
  styleUrls: ['./s92149.page.scss'],
})
export class S92149Page implements OnInit {

  bg_tn="bg_dark_blue"
  bg_cft="bg_dark_blue"
  bg="dark_blue_flat"

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
    "ScreenNos":"92115,92116,92117,92118,92119,92120,92121,92122,92123,92124,92125,92126,92127,92128,92129,92130,92131,92132,92133,92134,92135,92136,92137,92138,92139,92140,92141,92142,92143,92144,92145,92146,92147,92148"})
    .subscribe(res=>
      {console.log("points",res)
      this.points=res
    })
  }

  submitProgress()
  {
    this.router.navigate(['/adults/dealing-with-depression/s92150'])
  }

  prev()
  {
    this.router.navigate(['/adults/dealing-with-depression/s92148'])
  }

}