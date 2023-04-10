import { Component, OnInit } from '@angular/core';
import { AdultsService } from "../../adults.service";
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-s92238',
  templateUrl: './s92238.page.html',
  styleUrls: ['./s92238.page.scss'],
})
export class S92238Page implements OnInit {

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
    "ScreenNos":"92178,92179,92180,92181,92182,92183,92184,92185,92186,92187,92188,92189,92190,92191,92192,92193,92194,92195,92196,92197,92198,92199,92200,92201,92202,92203,92204,92205,92206,92207,92208,92209,92210,92211,92212,92213,92214,92215,92216,92217,92218,92219,92220,92221,92222,92223,92224,92225,92226,92227,92228,92229,92230,92231,92232,92233,92234,92235,92236,92237"})
    .subscribe(res=>
      {console.log("points",res)
      this.points=res
    })
  }

  submitProgress()
  {
    this.router.navigate(['/adults/dealing-with-depression/s92239'])
  }

  prev()
  {
    this.router.navigate(['/adults/dealing-with-depression/s92237'])
  }

}