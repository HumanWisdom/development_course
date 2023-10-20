import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s156181',
  templateUrl: './s156181.page.html',
  styleUrls: ['./s156181.page.scss'],
})
export class S156181Page implements OnInit {

  bg_tn="bg_dark_blue"
  bg_cft="bg_dark_blue"
  bg="dark_blue_flat"

  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  points:any
  overallPercentage:any

  constructor(private router: Router,
    private service:TeenagersService,
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
    "ScreenNos":"156156,156157,156158,156159,156160,156161,156162,156163,156164,156165,156166,156167,156168,156169,156170,156171,156172,156173,156174,156175,156176,156177,156178,156179,156180"})
    .subscribe(res=>
      {console.log("points",res)
      this.points=res
    })
  }

  submitProgress()
  {
    this.router.navigate(['/dealing-with-depression/s156182'])
  }

  prev()
  {
    this.router.navigate(['/dealing-with-depression/s156180'])
  }

}