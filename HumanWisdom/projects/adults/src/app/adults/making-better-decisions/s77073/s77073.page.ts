import { Component, OnInit } from '@angular/core';
import { AdultsService } from "../../adults.service";
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'HumanWisdom-s77073',
  templateUrl: './s77073.page.html',
  styleUrls: ['./s77073.page.scss'],
})
export class S77073Page implements OnInit {

  bg_tn="bg_light_blue"
  bg_cft="bg_light_blue"
  bg="light_blue_flat"

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
    "ScreenNos":"77044,77045,77046,77047,77048,77049,77050,77051,77052,77053,77054,77055,77056,77057,77058,77059,77060,77061,77062,77063,77064,77065,77066,77067,77068,77069,77070,77071,77072"})
    .subscribe(res=>
      {console.log("points",res)
      this.points=res
    })
  }

  submitProgress()
  {
    this.router.navigate(['/adults/making-better-decisions/s77074'])
  }

  prev()
  {
    this.router.navigate(['/adults/making-better-decisions/s77072'])
  }

}