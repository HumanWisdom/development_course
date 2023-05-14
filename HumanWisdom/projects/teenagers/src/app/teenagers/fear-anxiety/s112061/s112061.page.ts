import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s112061',
  templateUrl: './s112061.page.html',
  styleUrls: ['./s112061.page.scss'],
})
export class S112061Page implements OnInit {

  bg_tn="bg_purple_red"
  bg_cft="bg_purple_red"
  bg="purple_red_w4"

  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  points:any
  overallPercentage:any


  constructor(private router: Router,
    private service:TeenagersService,
    private location:Location) { }

  ngOnInit() {
    if(this.saveUsername==false)
    {this.userId=JSON.parse(sessionStorage.getItem("userId"))}
    else
      {this.userId=JSON.parse(localStorage.getItem("userId"))}
    this.sessionPoints()
  }

  sessionPoints(){
    this.service.sessionPoints({"UserId":this.userId,
    "ScreenNos":"112028,112029,112030,112031,112032,112033,112034,112035,112036,112037,112038,112039,112040,112041,112042,112043,112044,112045,112046,112047,112048,112049,112050,112051,112052,112053,112054,112055,112056,112057,112058,112059,112060"})
    .subscribe(res=>
      {console.log("points",res)
      this.points=res
    })
   

  }

  submitProgress(){
    this.router.navigate(['/adults/fear-anxiety/s112062'])
  }
  prev(){
    this.router.navigate(['/adults/fear-anxiety/s112060'])

  }

}
