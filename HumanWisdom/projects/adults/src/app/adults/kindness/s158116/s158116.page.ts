import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'HumanWisdom-s158116',
  templateUrl: './s158116.page.html',
  styleUrls: ['./s158116.page.scss'],
})
export class S158116Page implements OnInit {

  bg_tn="bg_pink_orange"
  bg_cft="bg_pink_orange"
  bg="pink_orange_flat"

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
    "ScreenNos":"137060,137061,137062,137063,137064,137065,137066,137067,137068,137069,137070,137071,137072,137073,137074,137075,1370137,137077,137078,137079,137080,137081,137082,137083,137084,137085,137086,137087,137088,137089,158116,137091"})
    .subscribe(res=>
      {console.log("points",res)
      this.points=res
    })
  }

  submitProgress()
  {
    this.router.navigate(['/adults/kindness/s158116p1'])
  }

  prev()
  {
    this.router.navigate(['/adults/kindness/s158115'])
  }

}