import { Component, OnInit } from '@angular/core';
import { AdultsService } from "../../adults.service";
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'HumanWisdom-s77111',
  templateUrl: './s77111.page.html',
  styleUrls: ['./s77111.page.scss'],
})
export class S77111Page implements OnInit {

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
    "ScreenNos":"77075,77076,77077,77078,77079,77080,77081,77082,77083,77084,77085,77086,77087,77088,77089,77090,77091,77092,77093,77094,77095,77096,77097,77098,77099,77100,77101,77102,77103,77104,77105,77106,77107,77108,77109,77110"})
    .subscribe(res=>
      {console.log("points",res)
      this.points=res
    })
  }

  submitProgress()
  {
    this.router.navigate(['/adults/making-better-decisions/s77112'])
  }

  prev()
  {
    this.router.navigate(['/adults/making-better-decisions/s77110'])
  }

}