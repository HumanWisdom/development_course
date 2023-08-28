import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s136069',
  templateUrl: './s136069.page.html',
  styleUrls: ['./s136069.page.scss'],
})
export class S136069Page implements OnInit {

  bg_tn="bg_green"
  bg_cft="bg_green"
  bg="green_w10"

  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  points:any
  overallPercentage:any
  bookmark=0
  toc="/criticism/136001"


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
  receiveBookmark(e)
  {
    console.log(e)
   if(e==true)
    this.bookmark=1
    else
      this.bookmark=0
  }
  


  sessionPoints(){
    this.service.sessionPoints({"UserId":this.userId,
    "ScreenNos":"136044,136045,136046,136047,136048,136049,136050,136051,136052,136053,136054,136055,136056,136057,136058,136059,136060,136061,136062,136063,136064,136065,136066,136067,136068"})
    .subscribe(res=>
      {console.log("points",res)
      this.points=res
    })
    

  }
  submitProgress(){
    this.router.navigate(['/criticism/s136070'])

  }
  prev(){
    this.router.navigate(['/criticism/s136068'])
  }


}
